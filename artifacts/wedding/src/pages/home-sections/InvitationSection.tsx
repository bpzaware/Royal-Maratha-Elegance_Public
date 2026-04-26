import { Ornament } from "@/components/Ornament";
import { SITE } from "@/config/site";

export function InvitationSection() {
  return (
    <section className="py-24 px-4 container mx-auto max-w-3xl text-center">
      <p className="font-marathi text-2xl text-secondary mb-3">
        ॥ श्री गणेशाय नमः ॥
      </p>
      <h2 className="font-display text-3xl md:text-4xl text-saffron-gradient mb-5">
        With the Blessings of Our Elders
      </h2>
      <Ornament className="mx-auto mb-8" />
      <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
        With the divine grace of Lord Ganesha and the blessings of our families,
        we invite you to share in our joy as <strong className="text-secondary">{SITE.groom}</strong>{" "}
        and <strong className="text-secondary">{SITE.bride}</strong> begin a new
        sacred chapter of their lives — woven in the timeless traditions of a
        Hindu-Maratha wedding.
      </p>
      <p className="font-serif italic text-foreground/70">
        Your presence is the truest blessing we could ask for.
      </p>
    </section>
  );
}
