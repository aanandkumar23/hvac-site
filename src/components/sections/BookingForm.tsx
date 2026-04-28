import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().optional(),
  message: z.string().trim().max(500).optional(),
});

const services = [
  "Emergency AC repair",
  "Heating repair",
  "New installation",
  "Maintenance / tune-up",
  "Indoor air quality",
];

export function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [apiError, setApiError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);

    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});
    setApiError(null);
    setStatus("loading");

    try {
      const base = (import.meta.env.VITE_API_URL as string | undefined) ?? "";
      const url = `${base}/api/book-service`;

      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const payload = (await resp.json().catch(() => null)) as
        | { success: true; message: string }
        | { success: false; error: string }
        | null;

      if (!resp.ok || !payload || payload.success === false) {
        setStatus("error");
        setApiError(
          payload?.success === false ? payload.error : "Something went wrong. Please call instead.",
        );
        return;
      }

      e.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setApiError("Something went wrong. Please call instead.");
    }
  }

  return (
    <section id="book" className="relative overflow-hidden bg-background py-20 md:py-32">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-20">
        {/* LEFT */}
        <div>
          <SectionHeader
            eyebrow="Book Service"
            title={
              <>
                AC Not Working? <br /> Get Help Fast — Same-Day Service
              </>
            }
            subtitle="Request service in seconds. A technician will contact you within 10 minutes."
          />

          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Licensed & insured HVAC technicians",
              "4.9★ rating from 1200+ customers",
              "Same-day service available",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-safe" />
                <span className="font-medium text-strong">{t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted">Serving Dallas & surrounding areas</p>
        </div>

        {/* RIGHT */}
        <div className="relative rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-10">
          {/* EMERGENCY BOX (FIXED) */}
          <div className="mb-6 rounded-2xl btn-emergency p-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider">Emergency? Call now</p>

            <Button
              asChild
              variant="ghost"
              className="mt-1 h-auto p-0 text-2xl font-bold text-inherit hover:bg-transparent"
            >
              <a href="tel:18005551234" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                (800) 555-1234
              </a>
            </Button>

            <p className="text-xs mt-1 opacity-90">24/7 Immediate Service</p>
          </div>

          {status === "success" ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full btn-emergency">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-strong">
                You're booked! We'll contact you shortly.
              </h3>

              <p className="mt-2 text-muted">Usually within 10 minutes.</p>

              <p className="mt-2 text-sm font-semibold text-emergency-safe">
                Need urgent help? Call (800) 555-1234
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <Field label="Full name" name="name" error={errors.name} />

              <Field label="Phone number" name="phone" type="tel" error={errors.phone} />

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Service (optional)
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm outline-none focus:border-accent-safe focus:ring-2 focus:ring-accent/30"
                >
                  <option value="">Select if known…</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted">
                  What's going on?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={500}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3.5 text-sm outline-none focus:border-accent-safe focus:ring-2 focus:ring-accent/30"
                />
              </div>

              {/* MAIN CTA (FIXED SYSTEM) */}
              <Button
                type="submit"
                disabled={status === "loading"}
                variant="emergency"
                className="mt-2 h-auto w-full gap-2 rounded-full px-7 py-4 text-base font-bold disabled:opacity-70"
              >
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                Get Help Now (10 min response)
              </Button>

              {status === "error" ? (
                <p className="text-center text-xs font-semibold text-emergency-safe">
                  {apiError ?? "Something went wrong. Please call instead."}
                </p>
              ) : null}

              <p className="text-center text-xs font-semibold text-emergency-safe">
                ⚡ Fast response guaranteed
              </p>

              <p className="text-center text-xs text-muted">
                By submitting, you agree to be contacted.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm outline-none focus:border-accent-safe focus:ring-2 focus:ring-accent/30"
      />
      {error && <p className="mt-1.5 text-xs font-medium text-emergency-safe">{error}</p>}
    </div>
  );
}
