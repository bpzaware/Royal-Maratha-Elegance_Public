import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { MandalaRing } from "@/components/MandalaRing";
import { CountdownTimer } from "@/components/CountdownTimer";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Heart, Users, Globe } from "lucide-react";
import heroCoupleImg from "@/assets/hero-couple.png";

const WEDDING_DATE = new Date("2026-11-26T00:00:00+05:30");

export default function Home() {
  useDocumentMeta("Home", "Welcome to the wedding celebration of Sanket More & Bhagyashree Zaware.");

  return (
    <PageTransition className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
          <MandalaRing className="w-[120%] md:w-[80%] max-w-[800px] aspect-square" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-48 md:w-64 mb-8"
          >
            <img src={heroCoupleImg} alt="Sanket & Bhagyashree" className="w-full h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="font-serif text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-4">
              The Royal Union Of
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-gradient mb-8 leading-tight">
              Sanket <span className="font-serif text-3xl md:text-5xl italic px-2 text-foreground/80">&</span> Bhagyashree
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-12 font-serif text-lg md:text-xl text-foreground/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>26 November 2026</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-primary/40" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>River Paradise Resort, Karjat</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/rsvp">
                <GoldButton className="w-full sm:w-auto">RSVP Now</GoldButton>
              </Link>
              <Link href="/venue">
                <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-semibold tracking-wide">
                  View Venue
                </button>
              </Link>
            </div>

            <CountdownTimer targetDate={WEDDING_DATE} />
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4 container mx-auto max-w-3xl text-center">
        <Heart className="w-8 h-8 text-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-8">Welcome</h2>
        <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80">
          With the blessings of our elders and the love of our families, we invite you to share in our joy as we begin a new chapter of our lives together. Your presence will make our celebration complete and our memories unforgettable.
        </p>
      </section>

      {/* Explore Section */}
      <section className="py-24 px-4 container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-center text-gold-gradient mb-12">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/rsvp">
            <GlassCard hoverable className="h-full text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">RSVP</h3>
              <p className="text-sm text-foreground/60">Confirm your presence for our special day.</p>
            </GlassCard>
          </Link>
          <Link href="/rituals">
            <GlassCard hoverable className="h-full text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Rituals</h3>
              <p className="text-sm text-foreground/60">Discover the beautiful ceremonies we have planned.</p>
            </GlassCard>
          </Link>
          <Link href="/venue">
            <GlassCard hoverable className="h-full text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Venue</h3>
              <p className="text-sm text-foreground/60">Get directions and accommodation details.</p>
            </GlassCard>
          </Link>
          <Link href="/incredible-india">
            <GlassCard hoverable className="h-full text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Incredible India</h3>
              <p className="text-sm text-foreground/60">Plan your trip with our travel recommendations.</p>
            </GlassCard>
          </Link>
          <Link href="/faqs">
            <GlassCard hoverable className="h-full text-center flex flex-col items-center lg:col-start-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">FAQs</h3>
              <p className="text-sm text-foreground/60">Answers to common questions about the event.</p>
            </GlassCard>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
