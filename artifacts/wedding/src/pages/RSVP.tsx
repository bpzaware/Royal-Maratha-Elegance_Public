import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Check, Heart } from "lucide-react";

const rsvpSchema = z.object({
  attending: z.boolean().default(true),
  plusOne: z.boolean().default(false).optional(),
  dietaryNotes: z.string().optional(),
  message: z.string().optional(),
});

type RsvpFormValues = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  useDocumentMeta("RSVP", "RSVP for the wedding of Sanket & Bhagyashree.");

  const [search, setSearch] = useState("");
  const [selectedGuest, setSelectedGuest] = useState<typeof GUEST_LIST[number] | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notFound, setNotFound] = useState(false);

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
    const val = e.target.value;
    setSearch(val);
    setSelectedGuest(null);
    setNotFound(false);
  };

  const handleSelectGuest = (guest: typeof GUEST_LIST[number]) => {
    setSelectedGuest(guest);
    setSearch(guest.name);
    setNotFound(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const exactMatch = GUEST_LIST.find((g) => g.name.toLowerCase() === search.toLowerCase());
      if (exactMatch) {
        handleSelectGuest(exactMatch);
      } else {
        setNotFound(true);
      }
    }
  };

  const filteredGuests = search.length > 0 && !selectedGuest
    ? GUEST_LIST.filter((g) => g.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5)
    : [];

  const onSubmit = (data: RsvpFormValues) => {
    if (!selectedGuest) return;
    
    const response = {
      guestId: selectedGuest.id,
      name: selectedGuest.name,
      ...data,
      timestamp: new Date().toISOString(),
    };
    
    try {
      const existing = JSON.parse(localStorage.getItem("rsvp_responses") || "[]");
      localStorage.setItem("rsvp_responses", JSON.stringify([...existing, response]));
    } catch (e) {}
    
    setIsSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionHeading>Join Us in Celebration</SectionHeading>

        {isSubmitted ? (
          <GlassCard className="text-center py-12">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="font-display text-2xl text-gold-gradient mb-4">Thank You!</h3>
            <p className="font-serif text-lg text-foreground/80">
              We can't wait to celebrate with you, {selectedGuest?.name}.
            </p>
          </GlassCard>
        ) : (
          <GlassCard className="p-6 md:p-10">
            {!selectedGuest ? (
              <div className="relative">
                <Label htmlFor="name-search" className="text-lg font-serif mb-2 block text-foreground/90">
                  Please enter your full name
                </Label>
                <Input
                  id="name-search"
                  value={search}
                  onChange={handleSearch}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="e.g. Amit Patil"
                  className="bg-black/50 border-primary/30 h-12 text-lg focus-visible:ring-primary/50"
                  autoComplete="off"
                />
                
                {filteredGuests.length > 0 && (
                  <div className="absolute top-full mt-2 w-full glass-card border border-primary/30 rounded-md overflow-hidden z-20">
                    {filteredGuests.map((guest) => (
                      <button
                        key={guest.id}
                        onClick={() => handleSelectGuest(guest)}
                        className="w-full text-left px-4 py-3 hover:bg-primary/20 transition-colors border-b border-primary/10 last:border-0"
                      >
                        {guest.name}
                      </button>
                    ))}
                  </div>
                )}
                
                {notFound && (
                  <div className="mt-4 p-4 rounded-md bg-secondary/20 border border-secondary/50 text-secondary-foreground/90 text-sm">
                    We couldn't find your name on the guest list. Please contact the family for invitation assistance.
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/20">
                  <div>
                    <h3 className="font-display text-xl text-primary">{selectedGuest.name}</h3>
                    <p className="text-sm text-foreground/60 capitalize">{selectedGuest.side}'s Side</p>
                  </div>
                  <button 
                    onClick={() => { setSelectedGuest(null); setSearch(""); }}
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
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-primary/20 p-4 bg-black/20">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-base font-medium">Joyfully Accepts</FormLabel>
                            <p className="text-sm text-foreground/60">I wouldn't miss it for the world!</p>
                          </div>
                        </FormItem>
                      )}
                    />

                    {selectedGuest.invitedPlusOne && form.watch("attending") && (
                      <FormField
                        control={form.control}
                        name="plusOne"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-primary/20 p-4 bg-black/20">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-base font-medium">Bringing a Plus One</FormLabel>
                              <p className="text-sm text-foreground/60">My partner/guest will join me.</p>
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
                              <FormLabel>Dietary Requirements / Allergies</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Let us know if you have any specific dietary needs..."
                                  className="bg-black/50 border-primary/30 focus-visible:ring-primary/50 resize-none"
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
                              <FormLabel>Message for the Couple</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Leave a sweet note or song request..."
                                  className="bg-black/50 border-primary/30 focus-visible:ring-primary/50 resize-none h-24"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    <div className="pt-4">
                      <GoldButton type="submit" className="w-full">
                        Submit RSVP
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
