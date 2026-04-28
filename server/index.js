import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { bookingRouter } from "./routes/booking.js";

const app = express();

app.use(express.json({ limit: "32kb" }));

const allowedOrigin =
  process.env.CORS_ORIGIN?.trim() || process.env.FRONTEND_ORIGIN?.trim() || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api", bookingRouter);

app.use((req, res) => {
  res.status(404).json({ success: false, error: "Not found" });
});

const port = Number(process.env.PORT || 5174);
app.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
  console.log(`[server] cors origin: ${allowedOrigin}`);
  console.log(
    `[server] supabase enabled: ${Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY)}`,
  );
});
