import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { FAQS } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  useDocumentMeta("FAQs", "Common questions about our wedding celebration.");

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading
          eyebrow="For Your Comfort"
          subtitle="Everything you may wish to know before joining our celebration."
        >
          Frequently Asked Questions
        </SectionHeading>

        <GlassCard className="p-6 md:p-8 mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-primary/20 mb-3 last:mb-0 last:border-0"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg text-secondary hover:text-primary hover:no-underline px-2 tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 font-sans px-2 pb-4 pt-1 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>
      </div>
    </PageTransition>
  );
}
