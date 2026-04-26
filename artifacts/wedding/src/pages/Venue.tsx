import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { VENUE_INFO } from "@/data/venue";
import { MapPin, Plane, Train, Car, Hotel, Camera } from "lucide-react";
import venueImg from "@/assets/venue-exterior.png";

export default function Venue() {
  useDocumentMeta("Venue", "Venue details, directions, and accommodations.");

  const openDirections = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=River+Paradise+Resort+Kolavadi", "_blank");
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading>The Venue</SectionHeading>

        {/* Hero Venue Image */}
        <div className="mb-16 relative rounded-2xl overflow-hidden glass-card group">
          <div className="aspect-[21/9] w-full">
            <img 
              src={venueImg} 
              alt="River Paradise Resort" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-2 drop-shadow-lg">River Paradise Resort</h2>
            <div className="flex items-center text-white/90 gap-2 font-serif text-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Kolavadi, Karjat, Maharashtra 410201</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl text-gold-gradient">How To Reach</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {VENUE_INFO.travelModes.map((mode, i) => (
                  <GlassCard key={i} className="p-5 flex flex-col items-center text-center">
                    {mode.mode === "By Air" && <Plane className="w-8 h-8 text-primary mb-3" />}
                    {mode.mode === "By Rail" && <Train className="w-8 h-8 text-primary mb-3" />}
                    {mode.mode === "By Road" && <Car className="w-8 h-8 text-primary mb-3" />}
                    <h4 className="font-serif font-bold text-foreground mb-2">{mode.mode}</h4>
                    <p className="text-sm text-foreground/70">{mode.details}</p>
                  </GlassCard>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Hotel className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl text-gold-gradient">Accommodations</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VENUE_INFO.accommodations.map((acc, i) => (
                  <GlassCard key={i} className="p-5">
                    <h4 className="font-serif font-bold text-primary mb-2">{acc.name}</h4>
                    <p className="text-sm text-foreground/70">{acc.blurb}</p>
                  </GlassCard>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl text-gold-gradient">Nearby Attractions</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {VENUE_INFO.attractions.map((attr, i) => (
                  <GlassCard key={i} className="p-5">
                    <h4 className="font-serif font-bold text-foreground mb-2">{attr.name}</h4>
                    <p className="text-xs text-foreground/70">{attr.blurb}</p>
                  </GlassCard>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Map & CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlassCard className="p-1">
                <div className="w-full aspect-square rounded-lg overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3be7fbc6f1c4e70b%3A0x6b13b1f23714b105!2sRiver%20Paradise%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(150%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venue Map"
                  />
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 text-center">
                <h3 className="font-serif text-xl mb-4 text-foreground/90">Need Directions?</h3>
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
