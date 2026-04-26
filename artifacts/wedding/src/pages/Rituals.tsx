import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { RITUALS } from "@/data/rituals";
import { motion } from "framer-motion";

export default function Rituals() {
  useDocumentMeta("Rituals", "Wedding rituals and ceremonies.");

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading>Wedding Rituals</SectionHeading>

        <div className="relative mt-12">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
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
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:text-right">
                    <GlassCard className={`h-full ${isEven ? "md:text-left" : "md:text-right"}`}>
                      <h3 className="font-display text-2xl text-gold-gradient mb-1">
                        {ritual.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">{ritual.subtitle}</p>
                      {ritual.date && (
                        <p className="text-foreground/60 text-sm mb-4 font-mono">{ritual.date}</p>
                      )}
                      <p className="font-serif text-foreground/80 leading-relaxed">
                        {ritual.description}
                      </p>
                    </GlassCard>
                  </div>

                  <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-black border border-primary items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <Icon className="w-6 h-6 text-primary" />
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
