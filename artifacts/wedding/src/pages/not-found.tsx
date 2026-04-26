import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PageTransition } from "@/components/PageTransition";
import { HeartCrack } from "lucide-react";
import { Link } from "wouter";
import { GoldButton } from "@/components/GoldButton";

export default function NotFound() {
  return (
    <PageTransition className="flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md mx-4">
        <GlassCard className="text-center py-12">
          <HeartCrack className="h-16 w-16 text-primary mx-auto mb-6" />
          <SectionHeading showOrnament={false} className="mb-4 text-3xl">
            Page Not Found
          </SectionHeading>

          <p className="mt-4 mb-8 text-foreground/70 font-serif">
            The page you are looking for seems to have wandered off.
          </p>
          
          <Link href="/">
            <GoldButton>Return Home</GoldButton>
          </Link>
        </GlassCard>
      </div>
    </PageTransition>
  );
}
