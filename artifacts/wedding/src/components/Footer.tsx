import { Heart } from "lucide-react";
import { Link } from "wouter";
import { SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 mt-24 relative overflow-hidden border-t border-primary/15 bg-gradient-to-b from-transparent to-secondary/5">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="rule-gold w-32 mb-8" />

        <p className="font-marathi text-2xl text-secondary mb-2">
          {SITE.taglineMarathi}
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-saffron-gradient mb-3 tracking-wide">
          {SITE.groomShort} <span className="text-secondary/50">&</span>{" "}
          {SITE.brideShort}
        </h2>

        <p className="font-serif italic text-foreground/70 mb-2">
          {SITE.weddingDateLabel}
        </p>

        <p className="text-sm text-foreground/60 mb-8 max-w-md">
          With the blessings of {SITE.groomFamily} & {SITE.brideFamily} —
          we look forward to sharing this sacred day with you.
        </p>

        <div className="flex items-center gap-2 text-xs text-foreground/40 font-display tracking-[0.22em]">
          <span>MADE WITH</span>
          <Heart className="w-3 h-3 text-secondary fill-secondary" />
          <span>IN MAHARASHTRA</span>
        </div>

        <Link
          href="/admin"
          className="mt-6 text-[10px] tracking-[0.3em] uppercase text-foreground/30 hover:text-primary transition-colors"
        >
          Admin
        </Link>
      </div>
    </footer>
  );
}
