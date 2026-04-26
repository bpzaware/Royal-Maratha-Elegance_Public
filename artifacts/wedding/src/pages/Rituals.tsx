import { motion } from "framer-motion";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { RITUALS } from "@/data/rituals";

export default function Rituals() {
  useDocumentMeta(
    "Rituals & Vidhi",
    "The eight sacred ceremonies of a Hindu-Maratha wedding."
  );

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          eyebrow="Wedding Ceremony"
          subtitle="From the playful Haldi to the sacred Saat Phere — the ceremonies that weave two souls into one."
        >
          The Sacred Ceremonies
        </SectionHeading>

        <div className="relative mt-12">
          {/* Vertical timeline rail (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {RITUALS.map((ritual, index) => {
              const Icon = ritual.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={ritual.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full">
                    <GlassCard
                      className={`h-full ${
                        isEven ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <h3 className="font-display text-2xl text-saffron-gradient mb-1">
                        {ritual.name}
                      </h3>
                      <p className="text-secondary font-medium text-sm mb-2">
                        {ritual.subtitle}
                      </p>
                      {ritual.date && (
                        <p className="text-foreground/55 text-xs mb-4 font-display tracking-[0.18em] uppercase">
                          {ritual.date}
                        </p>
                      )}
                      <p className="font-serif text-foreground/80 leading-relaxed">
                        {ritual.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Center timeline dot */}
                  <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary items-center justify-center shadow-[0_8px_22px_-8px_rgba(232,93,4,0.45)]">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1 w-full hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
