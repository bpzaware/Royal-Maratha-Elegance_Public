import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { HeroSection } from "@/pages/home-sections/HeroSection";
import { InvitationSection } from "@/pages/home-sections/InvitationSection";
import { ExploreSection } from "@/pages/home-sections/ExploreSection";

export default function Home() {
  useDocumentMeta(
    "Shubh Vivah",
    "Sanket More & Bhagyashree Zaware — a sacred Hindu-Maratha wedding on 26 November 2026."
  );

  return (
    <PageTransition className="pt-0">
      <HeroSection />
      <InvitationSection />
      <ExploreSection />
    </PageTransition>
  );
}
