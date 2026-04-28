import { motion } from "framer-motion";
import { Phone, ShieldCheck, Star, Clock, Zap, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-technician.jpg";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.19 45 / 0.4), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.13 220 / 0.4), transparent 60%)",
        }}
      />

      <Container className="relative grid gap-12 pb-20 pt-8 md:grid-cols-12 md:gap-10 md:pb-32 md:pt-14">
        {/* LEFT */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emergency/30 bg-emergency/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider shadow-soft"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emergency" />
            </span>
            <span className="text-strong">3 technicians available now</span>
            <span className="text-muted">· avg wait 47 min</span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 text-balance font-display text-[44px] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
          >
            Comfort restored
            <span className="block">
              <span className="font-light italic text-muted">in</span>{" "}
              <span className="text-emergency-safe font-bold">under 60 min.</span>
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-xl text-balance text-base text-muted md:text-lg"
          >
            Family-owned HVAC pros serving the Tri-State since 2003. Same-day AC repair, heating
            service, and installation — backed by a 100% satisfaction guarantee.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            {/* CALL CTA */}
            <Button
              asChild
              variant="emergency"
              className="group relative h-auto overflow-hidden rounded-2xl px-8 py-5 text-lg font-extrabold tracking-tight hover:translate-y-[-3px]"
            >
              <a href="tel:+18005551234">
                <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/20 ring-2 ring-white/40">
                  <Phone className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-90">
                    Tap to call now
                  </span>
                  <span className="mt-1 text-lg">(800) 555-1234</span>
                </span>
              </a>
            </Button>

            {/* SECONDARY CTA */}
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-2xl border-2 border-foreground/15 bg-card px-7 py-5 text-base font-bold text-strong transition-smooth hover:border-foreground/40 hover:bg-foreground hover:text-background"
            >
              <a href="#book">
                <Zap className="h-4 w-4 text-accent-safe" strokeWidth={2.5} />
                Get free quote in 60 sec
              </a>
            </Button>
          </motion.div>

          {/* TRUST STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-safe text-accent-safe" />
                ))}
              </div>
              <span className="font-bold text-strong">4.9</span>
              <span className="text-muted">· 2,300+ reviews</span>
            </div>

            <span className="hidden h-4 w-px bg-border sm:block" />

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-strong" />
              <span className="font-medium text-strong">Licensed & insured</span>
            </div>

            <span className="hidden h-4 w-px bg-border sm:block" />

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-strong" />
              <span className="font-medium text-strong">No weekend fees</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-5 relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={heroImg}
              alt="HVAC technician"
              className="h-[480px] w-full object-cover md:h-[640px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

            {/* Live ticker */}
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-full border border-white/15 bg-foreground/40 px-4 py-2 text-xs text-background backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Live · Sarah just booked
              </div>
              <span className="opacity-70">2 min ago</span>
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-background">
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent-safe">
                On-call now
              </div>
              <div className="mt-1.5 text-xl font-bold">Mike R. — Master Tech</div>
              <div className="text-sm text-background/70">NATE certified · 14 yrs</div>
            </div>
          </div>

          {/* Floating stat */}
          <div className="absolute -bottom-8 -left-4 right-4 rounded-2xl border border-border bg-card p-5 shadow-elegant md:-left-10 md:right-auto md:max-w-[260px]">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl btn-emergency">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold">60 min</div>
                <div className="text-xs text-muted">Avg arrival</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* BOTTOM STRIP */}
      <div className="border-y border-border bg-foreground text-background">
        <Container className="flex flex-col items-center justify-between gap-2 py-3 text-xs font-semibold uppercase tracking-[0.2em] sm:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent-safe" />
            <span>Summer special — $89 AC tune-up · ends Sunday</span>
          </div>
          <a href="#book" className="text-accent-safe hover:underline">
            Claim offer →
          </a>
        </Container>
      </div>
    </section>
  );
}
