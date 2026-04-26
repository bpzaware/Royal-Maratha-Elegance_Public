import { MapPin, Plane, Train, Car, Hotel, Camera } from "lucide-react";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { VENUE_INFO } from "@/data/venue";
import { SITE } from "@/config/site";
import venueImg from "@/assets/venue-exterior.png";

export default function Venue() {
  useDocumentMeta(
    "Venue & Travel",
    `${SITE.venueName} — directions, accommodation and travel details.`
  );

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=River+Paradise+Resort+Kolavadi",
      "_blank"
    );
  };

  const travelIcon = (mode: string) => {
    if (mode === "By Air") return Plane;
    if (mode === "By Rail") return Train;
    return Car;
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          eyebrow="Lagnsthal"
          subtitle="Cradled by the Sahyadri ranges and the Ulhas river — a regal Maratha setting awaits."
        >
          The Venue
        </SectionHeading>

        {/* Hero venue image */}
        <div className="mb-16 relative rounded-2xl overflow-hidden glass-card group">
          <div className="aspect-[21/9] w-full">
            <img
              src={venueImg}
              alt={SITE.venueName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/30 to-transparent flex flex-col justify-end p-6 md:p-10">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-2 drop-shadow-lg">
              {SITE.venueName}
            </h2>
            <div className="flex items-center text-white/95 gap-2 font-serif text-lg">
              <MapPin className="w-5 h-5 text-primary-foreground" />
              <span>{SITE.venueAddress}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-7 h-7 text-primary" />
                <h3 className="font-display text-2xl text-saffron-gradient">
                  How To Reach
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {VENUE_INFO.travelModes.map((mode) => {
                  const Icon = travelIcon(mode.mode);
                  return (
                    <GlassCard
                      key={mode.mode}
                      className="p-5 flex flex-col items-center text-center"
                    >
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-display tracking-[0.12em] uppercase text-sm text-secondary mb-2">
                        {mode.mode}
                      </h4>
                      <p className="text-sm text-foreground/75 leading-relaxed">
                        {mode.details}
                      </p>
                    </GlassCard>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Hotel className="w-7 h-7 text-primary" />
                <h3 className="font-display text-2xl text-saffron-gradient">
                  Accommodations
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VENUE_INFO.accommodations.map((acc) => (
                  <GlassCard key={acc.name} className="p-5">
                    <h4 className="font-display text-secondary mb-2 tracking-wide">
                      {acc.name}
                    </h4>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {acc.blurb}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-7 h-7 text-primary" />
                <h3 className="font-display text-2xl text-saffron-gradient">
                  Nearby Attractions
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {VENUE_INFO.attractions.map((attr) => (
                  <GlassCard key={attr.name} className="p-5">
                    <h4 className="font-display text-secondary mb-2 tracking-wide">
                      {attr.name}
                    </h4>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      {attr.blurb}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlassCard className="p-1.5">
                <div className="w-full aspect-square rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3be7fbc6f1c4e70b%3A0x6b13b1f23714b105!2sRiver%20Paradise%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venue Map"
                  />
                </div>
              </GlassCard>

              <GlassCard className="p-6 text-center">
                <h3 className="font-display tracking-wider text-secondary mb-4">
                  Need Directions?
                </h3>
                <GoldButton onClick={openDirections} className="w-full">
                  Get Directions
                </GoldButton>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
