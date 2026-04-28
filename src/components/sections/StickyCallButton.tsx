import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export function StickyCallButton() {
  return (
    <a
      href="tel:+18005551234"
      aria-label="Call now for emergency HVAC service"
      className="fixed bottom-5 right-5 z-50 group md:bottom-8 md:right-8"
    >
      {/* PULSE RING (SAFE COLOR SYSTEM) */}
      <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden />

      {/* BUTTON */}
      <Button
        variant="emergency"
        className="relative h-auto w-full gap-3 rounded-full px-5 py-4 text-emergency-foreground hover:scale-105 md:px-6 md:py-5"
      >
        {/* ICON */}
        <Phone className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />

        {/* TEXT (DESKTOP ONLY) */}
        <span className="hidden sm:flex flex-col leading-tight text-left">
          <span className="text-[10px] font-semibold uppercase tracking-widest opacity-90">
            24/7 Emergency
          </span>
          <span className="text-base font-bold">(800) 555-1234</span>
        </span>

        {/* MOBILE TEXT */}
        <span className="font-bold sm:hidden">Call Now</span>
      </Button>
    </a>
  );
}
