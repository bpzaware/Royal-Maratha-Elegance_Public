import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const GoldButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden group rounded-full px-8 py-3",
          "bg-gradient-to-r from-[#AA771C] via-[#D4AF37] to-[#AA771C]",
          "text-black font-semibold tracking-wide transition-all duration-300",
          "hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

GoldButton.displayName = "GoldButton";
