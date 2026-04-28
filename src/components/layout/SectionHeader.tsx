import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-safe">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-balance font-display text-4xl leading-[1.05] md:text-6xl",
          "text-strong",
        )}
      >
        {title}
      </h2>
      {subtitle ? <p className="mt-6 text-muted">{subtitle}</p> : null}
    </div>
  );
}
