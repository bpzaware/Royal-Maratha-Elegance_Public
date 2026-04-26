import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  variant?: "default" | "soft";
}

/**
 * Frosted card on warm cream backdrop.
 * Use `hoverable` for clickable cards (gentle lift + saffron glow).
 */
export function GlassCard({
  children,
  className,
  onClick,
  hoverable = false,
  variant = "default",
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        variant === "default" ? "glass-card" : "glass-card-soft",
        "rounded-2xl p-6 relative overflow-hidden transition-all duration-300",
        hoverable &&
          "hover:-translate-y-1 hover:shadow-[0_18px_50px_-20px_rgba(232,93,4,0.35)] hover:border-primary/45 cursor-pointer",
        className
      )}
    >
      {/* Subtle inner gold rim */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
      {children}
    </div>
  );
}
