import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heart } from "lucide-react";

import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { GUEST_LIST } from "@/data/guests";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SITE } from "@/config/site";
import { saveRsvpResponse } from "@/lib/rsvp-store";

const rsvpSchema = z.object({
  attending: z.boolean().default(true),
  plusOne: z.boolean().default(false).optional(),
  dietaryNotes: z.string().optional(),
  message: z.string().optional(),
});

type RsvpFormValues = z.infer<typeof rsvpSchema>;
type GuestRecord = (typeof GUEST_LIST)[number];

export default function RSVP() {
  useDocumentMeta(
    "RSVP",
    `RSVP for the Shubh Vivah of ${SITE.groom} & ${SITE.bride}.`
  );

  const [search, setSearch] = useState("");
  const [selectedGuest, setSelectedGuest] = useState<GuestRecord | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm<RsvpFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      attending: true,
      plusOne: false,
      dietaryNotes: "",
      message: "",
    },
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSelectedGuest(null);
    setNotFound(false);
  };

  const handleSelectGuest = (guest: GuestRecord) => {
    setSelectedGuest(guest);
    setSearch(guest.name);
    setNotFound(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const exact = GUEST_LIST.find(
        (g) => g.name.toLowerCase() === search.toLowerCase()
      );
      if (exact) handleSelectGuest(exact);
      else setNotFound(true);
    }
  };

  const filteredGuests =
    search.length > 0 && !selectedGuest
      ? GUEST_LIST.filter((g) =>
          g.name.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 5)
      : [];

  const onSubmit = async (data: RsvpFormValues) => {
    if (!selectedGuest) return;
    setSubmitError("");

    try {
      saveRsvpResponse({
        guestId: selectedGuest.id,
        name: selectedGuest.name,
        side: selectedGuest.side,
        ...data,
      });
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "We couldn't save your RSVP right now. Please try again in a moment."
      );
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionHeading
          eyebrow="Ashirwad Suchana"
          subtitle="Your blessings complete our celebration. Kindly let us know if you can join us."
        >
          Confirm Your Sacred Presence
        </SectionHeading>

        {isSubmitted ? (
          <GlassCard className="text-center py-12">
            <Heart className="w-12 h-12 text-secondary fill-secondary/20 mx-auto mb-6" />
            <p className="font-marathi text-xl text-secondary mb-2">धन्यवाद!</p>
            <h3 className="font-display text-2xl text-saffron-gradient mb-3">
              Thank You
            </h3>
            <p className="font-serif text-lg text-foreground/80">
              We can't wait to celebrate with you, <strong>{selectedGuest?.name}</strong>.
            </p>
          </GlassCard>
        ) : (
          <GlassCard className="p-6 md:p-10">
            {!selectedGuest ? (
              <div className="relative">
                <Label
                  htmlFor="name-search"
                  className="text-base font-display tracking-[0.16em] uppercase mb-3 block text-secondary"
                >
                  Please Enter Your Full Name
                </Label>
                <Input
                  id="name-search"
                  value={search}
                  onChange={handleSearch}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="e.g. Amit Patil"
                  className="bg-white border-primary/30 h-12 text-base focus-visible:ring-primary"
                  autoComplete="off"
                />

                {filteredGuests.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-primary/30 rounded-md overflow-hidden z-20 shadow-lg">
                    {filteredGuests.map((guest) => (
                      <button
                        key={guest.id}
                        onClick={() => handleSelectGuest(guest)}
                        className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors border-b border-primary/10 last:border-0"
                      >
                        {guest.name}
                      </button>
                    ))}
                  </div>
                )}

                {notFound && (
                  <div className="mt-4 p-4 rounded-md bg-secondary/10 border border-secondary/30 text-secondary text-sm">
                    We couldn't find your name on the guest list. Please contact
                    the family for invitation assistance.
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/20">
                  <div>
                    <h3 className="font-display text-xl text-secondary">
                      {selectedGuest.name}
                    </h3>
                    <p className="text-sm text-foreground/60 capitalize">
                      {selectedGuest.side}'s Side
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedGuest(null);
                      setSearch("");
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    Not you?
                  </button>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="attending"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-primary/25 p-4 bg-primary/5">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-base font-medium">
                              Joyfully Accepts
                            </FormLabel>
                            <p className="text-sm text-foreground/60">
                              I will be there to bless the couple.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    {selectedGuest.invitedPlusOne && form.watch("attending") && (
                      <FormField
                        control={form.control}
                        name="plusOne"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-primary/25 p-4 bg-primary/5">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-base font-medium">
                                Bringing a Plus One
                              </FormLabel>
                              <p className="text-sm text-foreground/60">
                                My partner / guest will accompany me.
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />
                    )}

                    {form.watch("attending") && (
                      <>
                        <FormField
                          control={form.control}
                          name="dietaryNotes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Dietary Requirements / Allergies
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Jain, vegan, gluten-free, allergies..."
                                  className="bg-white border-primary/30 focus-visible:ring-primary resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                A Blessing or Note for the Couple
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Share a wish, a song request, or a memory..."
                                  className="bg-white border-primary/30 focus-visible:ring-primary resize-none h-24"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    {submitError && (
                      <p className="text-sm text-destructive">{submitError}</p>
                    )}

                    <div className="pt-4">
                      <GoldButton type="submit" className="w-full">
                        Send My Response
                      </GoldButton>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </GlassCard>
        )}
      </div>
    </PageTransition>
  );
}
