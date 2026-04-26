import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Ornament } from "./Ornament";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  showOrnament?: boolean;
}

export function SectionHeading({ children, className, showOrnament = true }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-6">
        {children}
      </h2>
      {showOrnament && <Ornament className="mx-auto" />}
    </div>
  );
}
