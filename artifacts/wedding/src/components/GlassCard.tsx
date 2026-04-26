import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function GlassCard({ children, className, onClick, hoverable = false }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "glass-card rounded-xl p-6 relative overflow-hidden transition-all duration-300",
        hoverable && "hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(212,175,55,0.15)] hover:border-primary/40 cursor-pointer",
        className
      )}
    >
      {/* Subtle top glare */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </div>
  );
}
