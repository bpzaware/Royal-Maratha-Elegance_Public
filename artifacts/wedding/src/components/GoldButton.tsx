import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Primary CTA button — saffron-to-maroon gradient with soft shimmer.
 */
export const GoldButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative overflow-hidden group rounded-full px-8 py-3",
        "bg-gradient-to-r from-[#e85d04] via-[#c63a06] to-[#8b1e3f]",
        "text-white font-semibold tracking-[0.08em] uppercase text-sm",
        "shadow-[0_10px_28px_-10px_rgba(232,93,4,0.55)]",
        "transition-all duration-300",
        "hover:shadow-[0_14px_36px_-10px_rgba(232,93,4,0.7)] hover:-translate-y-0.5",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10">{children}</span>
    </button>
  );
});

GoldButton.displayName = "GoldButton";
