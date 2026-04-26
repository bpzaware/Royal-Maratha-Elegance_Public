import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { MandalaRing } from "@/components/MandalaRing";
import { CountdownTimer } from "@/components/CountdownTimer";
import { GoldButton } from "@/components/GoldButton";
import { SITE } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* Twin mandala backdrop */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <MandalaRing className="w-[110%] md:w-[78%] max-w-[820px] aspect-square absolute opacity-90" />
        <MandalaRing className="w-[80%] md:w-[58%] max-w-[600px] aspect-square absolute opacity-60" />
      </div>

      {/* Top gold-saffron gradient halo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        <p className="font-marathi text-3xl md:text-4xl text-secondary mb-3">
          {SITE.taglineMarathi}
        </p>
        <p className="eyebrow mb-5">{SITE.invitation}</p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8">
          <span className="text-saffron-gradient">{SITE.groomShort}</span>
          <span className="font-serif italic font-normal text-secondary/60 mx-3">
            &
          </span>
          <span className="text-saffron-gradient">{SITE.brideShort}</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-10 font-serif text-base md:text-lg text-foreground/85">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>{SITE.weddingDateLabel}</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-primary/40" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>
              {SITE.venueName}, {SITE.venueLocation.split(",")[1]?.trim() || ""}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link href="/rsvp">
            <GoldButton className="w-full sm:w-auto">RSVP With Love</GoldButton>
          </Link>
          <Link href="/venue">
            <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-primary/45 text-primary hover:bg-primary/10 transition-colors font-semibold tracking-[0.08em] uppercase text-sm">
              View Venue
            </button>
          </Link>
        </div>

        <CountdownTimer targetDate={SITE.weddingDate} />
      </motion.div>
    </section>
  );
}
