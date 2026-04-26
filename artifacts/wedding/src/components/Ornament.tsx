import { cn } from "@/lib/utils";

/** Decorative center motif — gold lotus-paisley separator. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-accent",
        className
      )}
      aria-hidden="true"
    >
      <span className="rule-gold w-16" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 C 13 6 16 9 12 12 C 8 9 11 6 12 2 Z M12 22 C 11 18 8 15 12 12 C 16 15 13 18 12 22 Z M2 12 C 6 11 9 8 12 12 C 9 16 6 13 2 12 Z M22 12 C 18 13 15 16 12 12 C 15 8 18 11 22 12 Z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
      <span className="rule-gold w-16" />
    </div>
  );
}
