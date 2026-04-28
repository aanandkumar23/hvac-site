import { MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

const cities = [
  "Springfield",
  "Riverdale",
  "Oak Park",
  "Lakeside",
  "Westfield",
  "Hillcrest",
  "Maplewood",
  "Brookhaven",
  "Greendale",
  "Northgate",
  "Cedar Hills",
  "Bayview",
];

export function ServiceArea() {
  return (
    <section id="areas" className="bg-secondary py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* LEFT CONTENT */}
          <div>
            <SectionHeader
              eyebrow="Service area"
              title="Proudly serving the Tri-State — within 30 miles of downtown."
              subtitle="Not sure if we cover you? Call us — if we don't, we'll personally recommend a trusted partner who does."
            />

            {/* CITY PILLS */}
            <div className="mt-8 flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium transition-smooth hover:bg-secondary hover:scale-[1.02]"
                >
                  <MapPin className="h-3.5 w-3.5 text-accent-safe" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT MAP VISUAL */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-ink shadow-elegant">
            {/* glow */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 60%)",
              }}
            />

            {/* GRID MAP */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full opacity-60">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="color-mix(in oklch, var(--foreground), transparent 85%)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>

              <rect width="400" height="400" fill="url(#grid)" />

              {/* rings */}
              {[120, 170, 220].map((r) => (
                <circle
                  key={r}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="color-mix(in oklch, var(--accent), transparent 40%)"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                />
              ))}

              {/* city dots */}
              {[
                [200, 200],
                [140, 160],
                [260, 150],
                [180, 270],
                [290, 230],
                [120, 250],
                [240, 110],
                [310, 290],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="6" fill="var(--accent)" />
                  <circle
                    cx={x}
                    cy={y}
                    r="12"
                    fill="color-mix(in oklch, var(--accent), transparent 70%)"
                  />
                </g>
              ))}
            </svg>

            {/* HQ CARD */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-background/95 p-4 backdrop-blur">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Headquarters
                </div>
                <div className="mt-1 font-bold text-strong">1247 Industrial Blvd, Springfield</div>
              </div>

              <MapPin className="h-6 w-6 text-accent-safe" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
