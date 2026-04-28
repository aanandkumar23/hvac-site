import { Phone, Snowflake } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#emergency", label: "Emergency" },
    { href: "#areas", label: "Service Areas" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between md:h-20">
        {/* BRAND */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-ink text-cream">
            <Snowflake className="h-5 w-5" />
          </span>

          <span className="font-display text-xl font-bold tracking-tight text-strong">
            Northwind<span className="text-accent-safe">.</span>
          </span>
        </a>

        {/* LINKS */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-smooth hover:text-strong"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button
          asChild
          variant="emergency"
          className="hidden md:inline-flex h-auto items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          <a href="tel:+18005551234">
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call Now
          </a>
        </Button>
      </Container>
    </header>
  );
}
