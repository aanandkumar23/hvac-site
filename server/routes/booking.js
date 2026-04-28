import express from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";

import { getSupabase } from "../lib/supabaseClient.js";
import { insertBooking, countBookings } from "../lib/inMemoryStore.js";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().optional(),
  message: z.string().trim().max(500).optional(),
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { success: false, error: "Too many requests. Please call instead." },
});

export const bookingRouter = express.Router();

bookingRouter.post("/book-service", limiter, async (req, res) => {
  const parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Invalid request";
    return res.status(400).json({ success: false, error: first });
  }

  const booking = parsed.data;

  try {
    const supabase = getSupabase();

    if (supabase) {
      const { error } = await supabase.from("bookings").insert({
        name: booking.name,
        phone: booking.phone,
        service: booking.service ?? null,
        message: booking.message ?? null,
      });

      if (error) {
        console.error("[book-service] supabase insert failed", error);
        return res.status(500).json({ success: false, error: "Database error" });
      }
    } else {
      const record = insertBooking(booking);
      console.log("[book-service] stored in-memory", {
        id: record.id,
        count: countBookings(),
        phone: record.phone,
      });
    }

    console.log("[book-service] received booking", {
      name: booking.name,
      phone: booking.phone,
      service: booking.service ?? null,
    });

    return res.status(200).json({ success: true, message: "Booking received" });
  } catch (err) {
    console.error("[book-service] unexpected error", err);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
});
