import { Phone, Zap, ThermometerSun, AlertTriangle } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Emergency() {
  const issues = [
    { icon: ThermometerSun, label: "AC blowing warm air" },
    { icon: Zap, label: "System won't turn on" },
    { icon: AlertTriangle, label: "Burning smell or loud noises" },
  ];

  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      {/* background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(1 0 0) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative grid gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        {/* LEFT */}
        <div>
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emergency/40 bg-emergency/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-emergency-safe">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emergency" />
            </span>
            24/7 Emergency HVAC
          </div>

          {/* HEADLINE */}
          <h2 className="mt-6 text-4xl leading-tight md:text-6xl font-bold">
            AC Broken? <br />
            <span className="text-emergency-safe">Get Immediate Help — Day or Night</span>
          </h2>

          {/* SUBTEXT */}
          <p className="mt-5 max-w-md text-base text-background/70 md:text-lg">
            Don’t wait in the heat. A live dispatcher sends a certified technician fast — often
            within the hour.
          </p>

          {/* URGENCY STRIP */}
          <div className="mt-5 text-sm font-semibold text-emergency-safe">
            ⚡ Calls answered in under 60 seconds
          </div>

          {/* CTA */}
          <Button
            asChild
            variant="emergency"
            className="mt-8 h-auto w-fit gap-3 rounded-full px-8 py-4 text-base font-bold"
          >
            <a href="tel:+18005551234">
              <Phone className="h-5 w-5" />
              Call Now — (800) 555-1234
            </a>
          </Button>

          {/* MICRO TRUST */}
          <p className="mt-3 text-xs text-background/60">
            Speak directly with a real dispatcher — no bots, no waiting
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid gap-4">
          {/* ISSUE LIST */}
          <div className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-widest text-emergency-safe">
              Call immediately if you notice:
            </div>

            <ul className="mt-4 divide-y divide-background/10">
              {issues.map((it) => (
                <li key={it.label} className="flex items-center gap-4 py-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emergency/10">
                    <it.icon className="h-5 w-5 text-emergency-safe" />
                  </div>

                  <span className="text-base font-medium">{it.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "24/7", v: "Live answering" },
              { k: "~60 min", v: "Typical arrival" },
              { k: "No extra", v: "Weekend charges" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-background/10 bg-background/5 p-5 text-center"
              >
                <div className="text-2xl font-bold text-emergency-safe md:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-background/60">{s.v}</div>
              </div>
            ))}
          </div>

          {/* SECONDARY CTA */}
          <a
            href="tel:+18005551234"
            className="text-center text-sm font-semibold text-emergency-safe underline"
          >
            Or tap here to call instantly
          </a>
        </div>
      </Container>
    </section>
  );
}
