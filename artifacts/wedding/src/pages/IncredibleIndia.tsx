import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  MapPin,
  Check,
  Plus,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Crown,
  Shield,
  Mountain,
} from "lucide-react";

import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { Ornament } from "@/components/Ornament";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { DESTINATIONS } from "@/data/destinations";
import { SITE } from "@/config/site";

/* =================================================================
   MARATHA EMPIRE HISTORY (data lives next to the section that uses it)
   ================================================================= */
const MARATHA_HIGHLIGHTS = [
  {
    icon: Crown,
    title: "Founded by Chhatrapati Shivaji Maharaj",
    desc: "In 1674 CE, Chhatrapati Shivaji Maharaj was crowned at Raigad Fort, formally establishing the Maratha kingdom — a sovereign Hindu state rooted in self-rule (Swarajya), justice, and protection of dharma.",
  },
  {
    icon: Shield,
    title: "Pioneers of Guerrilla Warfare",
    desc: "The Marathas perfected mobile, hill-fort-based warfare across the Sahyadris. From Sinhagad to Pratapgad, their forts became symbols of resistance — many still standing within a few hours of our wedding venue.",
  },
  {
    icon: Mountain,
    title: "From Deccan to the Himalayas",
    desc: "At its 18th-century peak under the Peshwas, the Maratha Confederacy spanned from Tamil Nadu to Attock (Pakistan today) — the largest indigenous power in India before the British Raj.",
  },
];

const MARATHA_PARAGRAPH = `The Maratha Empire (1674–1818) is the cultural inheritance of every Marathi family. Born from the vision of Chhatrapati Shivaji Maharaj — a king celebrated for his statecraft, religious tolerance, and protection of women — it shaped the language, the cuisine, the music, and the spiritual rhythms that surround our wedding traditions today. The forts of Raigad, Pratapgad, Sinhagad, Lohagad and Rajmachi rise from the same Sahyadri ranges that cradle our venue. We invite you to spend a day exploring them — to feel the soil from which our families come.`;

/* ================================================================= */

export default function IncredibleIndia() {
  useDocumentMeta(
    "Incredible India",
    "Discover India and the Maratha heritage — destinations, history and a travel concierge for our guests."
  );

  const [itinerary, setItinerary] = useLocalStorage<string[]>("itinerary", []);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const toggleDestination = (id: string) => {
    setItinerary(
      itinerary.includes(id)
        ? itinerary.filter((i) => i !== id)
        : [...itinerary, id]
    );
  };

  const selectedDestinations = DESTINATIONS.filter((d) =>
    itinerary.includes(d.id)
  );
  const totalDays = selectedDestinations.reduce((acc, d) => acc + d.days, 0);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-6xl pb-24">
        <SectionHeading
          eyebrow="Atithi Devo Bhava"
          subtitle="Many of you are travelling far. Why not extend your journey and witness the wonders that make India unforgettable?"
        >
          Incredible India
        </SectionHeading>

        <MarathaEmpireSection />
        <TravelHelperSection />

        {/* Destinations grid */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Curated Destinations"
            showOrnament={false}
            subtitle="Tap the + to add stops to your personal itinerary, saved on this device."
          >
            Where to Go
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest) => (
              <DestinationCard
                key={dest.id}
                dest={dest}
                isSelected={itinerary.includes(dest.id)}
                onToggle={() => toggleDestination(dest.id)}
              />
            ))}
          </div>
        </div>

        {/* Floating itinerary panel */}
        <AnimatePresence>
          {itinerary.length > 0 && (
            <ItineraryPanel
              isOpen={isPanelOpen}
              onToggleOpen={() => setIsPanelOpen((o) => !o)}
              destinations={selectedDestinations}
              totalDays={totalDays}
              onRemove={toggleDestination}
              onClear={() => setItinerary([])}
            />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}

/* ----------------------------------------------------------------- */

function MarathaEmpireSection() {
  return (
    <section className="my-20">
      <SectionHeading
        eyebrow="Hindavi Swarajya"
        subtitle="A short tribute to the empire that shaped the soil our families come from."
      >
        The Maratha Legacy
      </SectionHeading>

      <GlassCard className="p-8 md:p-10 max-w-4xl mx-auto">
        <p className="font-marathi text-2xl text-secondary text-center mb-6">
          ॥ हर हर महादेव ॥
        </p>
        <p className="font-serif text-base md:text-lg text-foreground/85 leading-[1.85] text-center mb-8">
          {MARATHA_PARAGRAPH}
        </p>

        <Ornament className="mx-auto mb-8" />

        <div className="grid md:grid-cols-3 gap-6">
          {MARATHA_HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="text-center p-4 rounded-xl bg-primary/5 border border-primary/15"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-white border border-primary/40 flex items-center justify-center text-primary mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm tracking-[0.1em] uppercase text-secondary mb-3">
                {title}
              </h4>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}

function TravelHelperSection() {
  const helper = SITE.travelHelper;
  const whatsappLink = `https://wa.me/${helper.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="my-20">
      <SectionHeading
        eyebrow="At Your Service"
        subtitle="Need help shaping your perfect India trip? Reach out to our dedicated travel concierge."
      >
        Your Travel Helper
      </SectionHeading>

      <GlassCard className="max-w-3xl mx-auto p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Avatar / monogram */}
          <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-display text-3xl shadow-lg">
            {helper.name
              .replace(/^Mrs?\.?\s*/, "")
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl text-saffron-gradient mb-1">
              {helper.name}
            </h3>
            <p className="text-sm text-secondary font-medium tracking-[0.12em] uppercase mb-4">
              {helper.role}
            </p>
            <p className="font-serif text-foreground/80 leading-relaxed mb-6">
              {helper.blurb}
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href={`tel:${helper.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-green-50 border border-green-600/40 text-green-700 hover:bg-green-600 hover:text-white transition-colors text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${helper.email}`}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-2 text-xs text-foreground/60 text-center sm:text-left">
              <div>{helper.phone}</div>
              <div>{helper.whatsapp}</div>
              <div className="truncate">{helper.email}</div>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

function DestinationCard({
  dest,
  isSelected,
  onToggle,
}: {
  dest: (typeof DESTINATIONS)[number];
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <GlassCard className="flex flex-col p-0 overflow-hidden h-full group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <h3 className="font-display text-2xl text-white drop-shadow-md">
              {dest.name}
            </h3>
            <p className="text-white/80 text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {dest.state}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-sm text-foreground/80 mb-4 flex-1 leading-relaxed">
          {dest.blurb}
        </p>

        <div className="space-y-3 mb-6">
          <ChipGroup label="Must Visit" items={dest.topPlaces} variant="primary" />
          <ChipGroup label="Local Food" items={dest.foods} variant="secondary" />
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/15">
          <div className="text-xs text-foreground/65 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {dest.days}d
            </span>
            <span className="flex items-center gap-1">
              <Plane className="w-3 h-3" /> {dest.airport}
            </span>
          </div>
          <button
            onClick={onToggle}
            aria-label={isSelected ? "Remove from itinerary" : "Add to itinerary"}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isSelected
                ? "bg-primary text-white shadow-md"
                : "bg-white border border-primary/40 text-primary hover:bg-primary hover:text-white"
            }`}
          >
            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </GlassCard>
  );
}

function ChipGroup({
  label,
  items,
  variant,
}: {
  label: string;
  items: readonly string[];
  variant: "primary" | "secondary";
}) {
  const colors =
    variant === "primary"
      ? "bg-primary/10 text-primary border-primary/25"
      : "bg-secondary/10 text-secondary border-secondary/25";
  return (
    <div>
      <h4 className="text-[10px] font-display tracking-[0.18em] text-foreground/55 uppercase mb-2">
        {label}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span
            key={it}
            className={`text-xs px-2 py-1 rounded-md border ${colors}`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function ItineraryPanel({
  isOpen,
  onToggleOpen,
  destinations,
  totalDays,
  onRemove,
  onClear,
}: {
  isOpen: boolean;
  onToggleOpen: () => void;
  destinations: typeof DESTINATIONS[number][];
  totalDays: number;
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-24 z-40 w-[90%] md:w-80"
    >
      <GlassCard className="p-0 overflow-hidden">
        <button
          onClick={onToggleOpen}
          className="w-full px-4 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20 flex items-center justify-between hover:bg-primary/15"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-display tracking-wide text-secondary">
              Your Itinerary
            </span>
          </div>
          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-bold">
            {destinations.length}
          </span>
        </button>

        {isOpen && (
          <div className="p-4 max-h-72 overflow-y-auto bg-white/60">
            <div className="space-y-3 mb-4">
              {destinations.map((d) => (
                <div
                  key={d.id}
                  className="flex justify-between items-center text-sm border-b border-primary/10 pb-2"
                >
                  <span className="text-foreground/85">{d.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-foreground/55">{d.days}d</span>
                    <button
                      onClick={() => onRemove(d.id)}
                      className="text-secondary hover:text-destructive"
                      aria-label={`Remove ${d.name}`}
                    >
                      <Plus className="w-3.5 h-3.5 rotate-45" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-primary/30 mt-2">
              <span className="font-display tracking-wide text-secondary text-sm">
                Total Duration
              </span>
              <span className="font-bold font-display text-primary">
                {totalDays} days
              </span>
            </div>

            <button
              onClick={onClear}
              className="w-full mt-4 text-xs text-foreground/50 hover:text-destructive transition-colors py-2"
            >
              Clear Itinerary
            </button>
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
}
