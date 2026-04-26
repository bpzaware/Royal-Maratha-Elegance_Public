import { Camera, ExternalLink, ImageOff } from "lucide-react";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SITE } from "@/config/site";

export default function Gallery() {
  useDocumentMeta(
    "Gallery",
    "Photo gallery from our wedding celebration — Sanket & Bhagyashree."
  );

  const hasGallery = SITE.galleryUrl.trim().length > 0;

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          eyebrow="Smruti Sangrah"
          subtitle="A growing collection of moments from our journey, the rituals and the celebration."
        >
          Our Photo Gallery
        </SectionHeading>

        {hasGallery ? (
          <GalleryEmbed url={SITE.galleryUrl} />
        ) : (
          <GalleryPlaceholder />
        )}

        <p className="text-center text-xs text-foreground/50 mt-10 max-w-xl mx-auto">
          The gallery is hosted on Google Photos. Click through to view, like,
          download or contribute your own photos to the shared album.
        </p>
      </div>
    </PageTransition>
  );
}

function GalleryEmbed({ url }: { url: string }) {
  return (
    <div className="space-y-6">
      <GlassCard className="p-2 overflow-hidden">
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted">
          <iframe
            src={url}
            title="Wedding Photo Gallery"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            allow="autoplay; encrypted-media"
          />
        </div>
      </GlassCard>

      <div className="text-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <GoldButton>
            <ExternalLink className="w-4 h-4 mr-2 inline-block" />
            Open Full Album in Google Photos
          </GoldButton>
        </a>
      </div>
    </div>
  );
}

function GalleryPlaceholder() {
  return (
    <GlassCard className="text-center py-16 px-6">
      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
        <Camera className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-display text-2xl text-saffron-gradient mb-3">
        The Album is Being Curated
      </h3>
      <p className="font-serif text-foreground/75 max-w-md mx-auto mb-8 leading-relaxed">
        We're collecting the most precious moments. The shared Google Photos
        album will be linked here soon — please check back closer to the wedding
        day.
      </p>
      <div className="inline-flex items-center gap-2 text-xs text-foreground/55 px-4 py-2 rounded-full border border-primary/20 bg-white/60">
        <ImageOff className="w-3.5 h-3.5" />
        <span>
          Gallery link not yet configured. Edit <code>src/config/site.ts</code>{" "}
          and set <code>galleryUrl</code>.
        </span>
      </div>
    </GlassCard>
  );
}
