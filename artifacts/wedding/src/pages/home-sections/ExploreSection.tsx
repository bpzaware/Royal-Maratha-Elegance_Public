import { Link } from "wouter";
import {
  Sparkles,
  Heart,
  MapPin,
  Globe,
  Camera,
  HelpCircle,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const TILES = [
  {
    href: "/rsvp",
    icon: Sparkles,
    title: "RSVP",
    blurb: "Confirm your presence for our sacred day.",
  },
  {
    href: "/rituals",
    icon: Heart,
    title: "Rituals",
    blurb: "The eight ceremonies of a Maratha vivah.",
  },
  {
    href: "/venue",
    icon: MapPin,
    title: "Venue",
    blurb: "Travel, accommodation & directions.",
  },
  {
    href: "/gallery",
    icon: Camera,
    title: "Gallery",
    blurb: "Memories from our journey together.",
  },
  {
    href: "/incredible-india",
    icon: Globe,
    title: "Incredible India",
    blurb: "Plan your trip beyond the wedding.",
  },
  {
    href: "/faqs",
    icon: HelpCircle,
    title: "FAQs",
    blurb: "Answers to common questions.",
  },
];

export function ExploreSection() {
  return (
    <section className="py-20 px-4 container mx-auto max-w-5xl">
      <SectionHeading
        eyebrow="Discover Everything"
        showOrnament={false}
        subtitle="From sacred rituals to travel plans — everything you need for our celebration."
      >
        Explore the Sohala
      </SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {TILES.map(({ href, icon: Icon, title, blurb }) => (
          <Link key={href} href={href}>
            <GlassCard
              hoverable
              className="h-full text-center flex flex-col items-center py-8"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg tracking-[0.12em] uppercase text-secondary mb-2">
                {title}
              </h3>
              <p className="text-sm text-foreground/65">{blurb}</p>
            </GlassCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
