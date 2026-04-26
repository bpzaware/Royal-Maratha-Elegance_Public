import { useState } from "react";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { DESTINATIONS } from "@/data/destinations";
import { Plane, MapPin, Check, Plus, Calendar } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { motion, AnimatePresence } from "framer-motion";

export default function IncredibleIndia() {
  useDocumentMeta("Incredible India", "Explore India's beauty for your trip.");

  const [itinerary, setItinerary] = useLocalStorage<string[]>("itinerary", []);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const toggleDestination = (id: string) => {
    if (itinerary.includes(id)) {
      setItinerary(itinerary.filter((i) => i !== id));
    } else {
      setItinerary([...itinerary, id]);
    }
  };

  const selectedDestinations = DESTINATIONS.filter((d) => itinerary.includes(d.id));
  const totalDays = selectedDestinations.reduce((acc, curr) => acc + curr.days, 0);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-6xl pb-24">
        <SectionHeading>Incredible India</SectionHeading>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-serif text-lg text-foreground/80 leading-relaxed mb-8">
            For our international guests and those traveling from afar, we invite you to explore the rich heritage and diverse landscapes of India before or after the wedding celebrations.
          </p>
          
          <GlassCard className="p-2 overflow-hidden aspect-video relative max-w-4xl mx-auto rounded-xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/0BqGI8gRxBE" 
              title="Incredible India Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-lg absolute inset-0 w-full h-full"
            ></iframe>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => {
            const isSelected = itinerary.includes(dest.id);
            return (
              <GlassCard key={dest.id} className="flex flex-col p-0 overflow-hidden h-full group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="font-display text-2xl text-white drop-shadow-md">{dest.name}</h3>
                      <p className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {dest.state}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-foreground/80 mb-4 flex-1">
                    {dest.blurb}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Must Visit</h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.topPlaces.map(place => (
                          <span key={place} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Local Food</h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.foods.map(food => (
                          <span key={food} className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-md border border-secondary/30">
                            {food}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/10">
                    <div className="text-xs text-foreground/60 flex items-center gap-2">
                      <span className="flex items-center gap-1" title="Recommended Days"><Calendar className="w-3 h-3" /> {dest.days}d</span>
                      <span className="flex items-center gap-1" title="Nearest Airport"><Plane className="w-3 h-3" /> {dest.airport}</span>
                    </div>
                    <button 
                      onClick={() => toggleDestination(dest.id)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? "bg-primary text-black" : "bg-black/40 border border-primary/40 text-primary hover:bg-primary/20"
                      }`}
                    >
                      {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Floating Itinerary Panel */}
        <AnimatePresence>
          {itinerary.length > 0 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-24 z-40 w-[90%] md:w-80"
            >
              <GlassCard className={`p-0 overflow-hidden transition-all duration-300 ${isPanelOpen ? "" : "h-14"}`}>
                <div 
                  className="px-4 py-3 bg-black/60 border-b border-primary/20 flex items-center justify-between cursor-pointer hover:bg-black/80"
                  onClick={() => setIsPanelOpen(!isPanelOpen)}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-serif font-medium text-foreground">Your Itinerary</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-primary text-black px-2 py-0.5 rounded-full font-bold">
                      {itinerary.length}
                    </span>
                  </div>
                </div>
                
                {isPanelOpen && (
                  <div className="p-4 bg-black/40 max-h-60 overflow-y-auto">
                    <div className="space-y-3 mb-4">
                      {selectedDestinations.map(d => (
                        <div key={d.id} className="flex justify-between items-center text-sm border-b border-primary/10 pb-2">
                          <span className="text-foreground/90">{d.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-foreground/50">{d.days} days</span>
                            <button 
                              onClick={() => toggleDestination(d.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <Plus className="w-3 h-3 rotate-45" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-primary/30 mt-2">
                      <span className="font-serif text-primary">Total Duration</span>
                      <span className="font-bold font-mono">{totalDays} days</span>
                    </div>
                    
                    <button 
                      onClick={() => setItinerary([])}
                      className="w-full mt-4 text-xs text-foreground/50 hover:text-primary transition-colors py-2"
                    >
                      Clear Itinerary
                    </button>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
