import { Star, Quote } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

const items = [
  {
    quote:
      "Called at 11pm on a Sunday — tech was at our door by midnight. Cool air by 1am. These folks are the real deal.",
    name: "Sarah M.",
    where: "Riverdale · AC Repair",
  },
  {
    quote:
      "Got three quotes for a new system. Northwind was honest about what we actually needed and saved us $1,800.",
    name: "James T.",
    where: "Oak Park · Installation",
  },
  {
    quote:
      "Furnace died during the cold snap. They had a loaner heater dropped off in 90 minutes while parts came in.",
    name: "Priya K.",
    where: "Lakeside · Heating",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-background py-20 md:py-32">
      <Container>
        {/* HEADER */}
        <div className="flex items-end justify-between gap-6">
          <SectionHeader eyebrow="Real reviews" title="The neighbors agree." />

          <div className="hidden md:flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent-safe text-accent-safe" />
            ))}
            <span className="ml-2 font-semibold text-strong">4.9 / 5</span>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => {
            const inverted = i === 1;

            return (
              <figure
                key={i}
                className={[
                  "relative flex flex-col rounded-3xl border border-border p-7 transition-smooth",
                  inverted ? "bg-foreground text-background shadow-elegant" : "bg-card",
                ].join(" ")}
              >
                {/* ICON */}
                <Quote className="h-8 w-8 text-accent-safe" />

                {/* QUOTE */}
                <blockquote
                  className={`mt-5 text-lg leading-relaxed font-medium ${
                    inverted ? "text-background/90" : "text-strong"
                  }`}
                >
                  "{t.quote}"
                </blockquote>

                {/* FOOTER */}
                <figcaption
                  className={`mt-8 flex items-center justify-between border-t pt-5 ${
                    inverted ? "border-white/10" : "border-border"
                  }`}
                >
                  <div>
                    <div className={`font-bold ${inverted ? "text-background" : "text-strong"}`}>
                      {t.name}
                    </div>
                    <div className={`text-sm ${inverted ? "text-background/60" : "text-muted"}`}>
                      {t.where}
                    </div>
                  </div>

                  {/* STARS */}
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-accent-safe text-accent-safe" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
