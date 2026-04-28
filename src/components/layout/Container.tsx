import * as React from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8",
        size === "default" ? "max-w-7xl" : "max-w-6xl",
        className,
      )}
      {...props}
    />
  );
}
