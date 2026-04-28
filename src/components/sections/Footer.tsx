import { Phone, Mail, MapPin, Clock, Snowflake, Star } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <Container className="py-16 md:py-20">
        {/* 🔥 TOP CTA STRIP */}
        <div className="mb-12 rounded-2xl bg-emergency p-6 text-center text-emergency-foreground shadow-cta">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-90">
            Need HVAC Help Right Now?
          </p>

          <Button
            asChild
            variant="ghost"
            className="mt-3 h-auto p-0 text-2xl font-extrabold text-inherit underline hover:bg-transparent"
          >
            <a href="tel:+18005551234" className="inline-flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              Call (800) 555-1234
            </a>
          </Button>

          <p className="mt-1 text-xs opacity-80">24/7 Emergency Service — No waiting</p>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* BRAND */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-foreground">
                <Snowflake className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">Northwind HVAC</span>
            </div>

            <p className="mt-5 max-w-sm text-background/65">
              Family-owned heating and cooling experts serving the Tri-State since 2003. Honest
              work, fair prices, real guarantees.
            </p>

            {/* ⭐ TRUST REVIEW */}
            <div className="mt-5 flex items-center gap-2 text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-safe text-accent-safe" />
                ))}
              </div>
              <span className="text-background/80">4.9 rating from 1200+ customers</span>
            </div>

            {/* CTA BUTTON */}
            <Button
              asChild
              variant="emergency"
              className="mt-7 h-auto w-fit items-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold hover:scale-[1.03]"
            >
              <a href="tel:+18005551234">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent-safe">
              Contact
            </div>

            <ul className="mt-5 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-safe" />
                (800) 555-1234
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-safe" />
                dispatch@northwindhvac.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-safe" />
                1247 Industrial Blvd <br />
                Springfield, IL 62701
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-safe" />
                24 hours / 7 days
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent-safe">
              Services
            </div>

            <ul className="mt-5 space-y-3 text-sm text-background/80">
              <li>
                <a href="#services" className="hover:text-accent-safe">
                  AC Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-safe">
                  Heating
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-safe">
                  Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-safe">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent-safe">
              Company
            </div>

            <ul className="mt-5 space-y-3 text-sm text-background/80">
              <li>
                <a href="#reviews" className="hover:text-accent-safe">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-accent-safe">
                  Service Area
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-accent-safe">
                  Book Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔥 TRUST BAR */}
        <div className="mt-14 border-t border-background/10 pt-6 text-center text-sm text-background/70">
          <div className="font-semibold">
            NATE Certified · EPA 608 Certified · BBB A+ Accredited
          </div>
          <div className="mt-2 text-xs text-background/50">
            © {new Date().getFullYear()} Northwind HVAC. All rights reserved. License #HV-0029488.
          </div>
        </div>
      </Container>
    </footer>
  );
}
