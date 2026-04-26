import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { SITE } from "@/config/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/rituals", label: "Rituals" },
  { href: "/venue", label: "Venue" },
  { href: "/gallery", label: "Gallery" },
  { href: "/incredible-india", label: "Incredible India" },
  { href: "/faqs", label: "FAQs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-primary/15">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.22em] font-bold flex items-center gap-1"
        >
          <span className="text-saffron-gradient">
            {SITE.groomShort.charAt(0)}
          </span>
          <span className="text-foreground/40 italic font-serif">&</span>
          <span className="text-saffron-gradient">
            {SITE.brideShort.charAt(0)}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm tracking-wide transition-colors font-medium ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-primary">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/98 backdrop-blur-xl border-l-primary/20 sm:max-w-xs"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-12">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-base font-display tracking-[0.16em] py-3 border-b border-primary/15 transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
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
