import { Link } from "wouter";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/rituals", label: "Rituals" },
  { href: "/venue", label: "Venue" },
  { href: "/incredible-india", label: "Incredible India" },
  { href: "/faqs", label: "FAQs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-gold-gradient tracking-widest font-bold">
          S & B
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground/80 hover:text-primary">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l-primary/20 sm:max-w-xs">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-12">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-serif text-foreground/90 hover:text-primary transition-colors border-b border-primary/10 pb-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
