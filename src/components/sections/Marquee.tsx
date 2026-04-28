export function Marquee() {
  const items = [
    "NATE Certified",
    "EPA 608 Licensed",
    "BBB A+ Rated",
    "Carrier Factory Authorized",
    "Trane Comfort Specialist",
    "Lennox Premier Dealer",
    "Google 4.9★",
    "Angi Super Service",
  ];

  const loop = [...items, ...items];

  return (
    <div className="border-y border-border bg-foreground text-background overflow-hidden">
      {/* fade edges (premium touch) */}
      <div className="relative">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-foreground to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-foreground to-transparent" />

        {/* TRACK */}
        <div className="flex w-max animate-marquee py-5">
          {loop.map((it, i) => (
            <span
              key={i}
              className="mx-10 flex items-center gap-6 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-muted"
            >
              <span className="text-strong">{it}</span>

              <span className="h-1 w-1 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
