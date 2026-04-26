import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
        
        <h2 className="font-display text-2xl md:text-3xl text-gold-gradient mb-4">
          Sanket & Bhagyashree
        </h2>
        
        <p className="font-serif text-lg text-foreground/80 mb-2">
          26 November 2026
        </p>
        
        <p className="text-sm text-foreground/60 mb-8 max-w-md">
          With blessings from the More & Zaware families. We look forward to celebrating our special day with you.
        </p>
        
        <div className="flex items-center gap-2 text-xs text-foreground/40 font-mono tracking-widest">
          <span>MADE WITH</span>
          <Heart className="w-3 h-3 text-secondary fill-secondary" />
          <span>IN INDIA</span>
        </div>
      </div>
    </footer>
  );
}
