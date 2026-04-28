import { Snowflake, Flame, Wrench, Wind, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Snowflake,
    title: "AC Repair",
    desc: "Diagnostics, refrigerant, compressor, and full system repairs — most fixed same day.",
    variant: "cool",
  },
  {
    icon: Flame,
    title: "Heating Service",
    desc: "Furnace, heat pump, and boiler repair. Tune-ups starting at $89.",
    variant: "heat",
  },
  {
    icon: Wrench,
    title: "New Installation",
    desc: "High-efficiency systems from Carrier, Trane & Lennox with 10-yr warranty.",
    variant: "ink",
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    desc: "Air purifiers, humidifiers, duct cleaning, and smart thermostats.",
    variant: "cool",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-20 md:py-32">
      <Container>
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            className="max-w-2xl"
            eyebrow="What we do"
            title="One team. Every season. Every system."
          />

          <p className="max-w-sm text-muted">
            Residential and light commercial HVAC, handled by certified, background-checked
            technicians.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card
              asChild
              key={s.title}
              className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl p-7 transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              <a href="#book">
                {/* ICON WRAPPER (SYSTEM FIXED) */}
                <div
                  className={[
                    "grid h-14 w-14 place-items-center rounded-2xl",
                    s.variant === "heat" && "bg-emergency text-emergency-foreground",
                    s.variant === "cool" && "bg-secondary text-strong",
                    s.variant === "ink" && "bg-gradient-ink text-background",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <s.icon className="h-6 w-6" strokeWidth={2} />
                </div>

                {/* TEXT */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-strong">{s.title}</h3>

                    <ArrowUpRight className="h-5 w-5 text-muted transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-strong" />
                  </div>

                  <p className="mt-3 text-sm text-muted">{s.desc}</p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
