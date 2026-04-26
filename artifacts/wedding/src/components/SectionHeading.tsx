import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Ornament } from "./Ornament";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  showOrnament?: boolean;
  eyebrow?: string;
  subtitle?: string;
}

export function SectionHeading({
  children,
  className,
  showOrnament = true,
  eyebrow,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-5xl text-saffron-gradient mb-4 leading-tight">
        {children}
      </h2>
      {showOrnament && <Ornament className="mx-auto" />}
      {subtitle && (
        <p className="mt-5 font-serif text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
