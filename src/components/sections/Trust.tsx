import { Award, Users, Calendar, ThumbsUp } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Calendar, k: "21+", v: "Years in business" },
  { icon: Users, k: "12,400+", v: "Homes serviced" },
  { icon: ThumbsUp, k: "98%", v: "Would recommend" },
  { icon: Award, k: "4.9★", v: "Across 2,300 reviews" },
];

export function Trust() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card
              key={s.v}
              className="group rounded-2xl p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              {/* ICON */}
              <s.icon className="h-6 w-6 text-accent-safe" strokeWidth={2} />

              {/* NUMBER */}
              <div className="mt-5 font-display text-4xl font-bold leading-none md:text-5xl text-strong">
                {s.k}
              </div>

              {/* LABEL */}
              <div className="mt-2 text-sm text-muted">{s.v}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
