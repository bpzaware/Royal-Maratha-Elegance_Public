import { Ring, Droplet, Brush, Music, Gift, Users, HandHeart, GlassWater } from "lucide-react";

export const RITUALS = [
  { id: "sakharpuda", name: "Sakharpuda", subtitle: "Engagement Ceremony", description: "The formal engagement ceremony where the couple exchanges rings and families exchange sugar (sakhar) as a sweet beginning.", icon: Ring, date: "24 Nov, Morning" },
  { id: "haldi", name: "Haldi", subtitle: "Turmeric Ceremony", description: "A playful and vibrant ceremony where a paste of turmeric, sandalwood, and rose water is applied to the bride and groom.", icon: Droplet, date: "24 Nov, Afternoon" },
  { id: "mehendi", name: "Mehendi", subtitle: "Henna Ceremony", description: "Intricate henna designs are applied to the bride's hands and feet, symbolizing joy, beauty, and spiritual awakening.", icon: Brush, date: "24 Nov, Evening" },
  { id: "sangeet", name: "Sangeet", subtitle: "Musical Night", description: "A night of music, dance, and celebration where both families come together to perform and celebrate the upcoming union.", icon: Music, date: "25 Nov, Evening" },
  { id: "seemant-pujan", name: "Seemant Pujan", subtitle: "Welcoming the Groom", description: "The bride's family welcomes the groom and his family at the boundary of the marriage venue with traditional honors.", icon: Gift, date: "26 Nov, Morning" },
  { id: "mangalashtak", name: "Mangalashtak", subtitle: "The Sacred Chants", description: "The couple is separated by a silk shawl (antarpat) while priests chant eight auspicious verses before they look at each other.", icon: Users, date: "26 Nov, Afternoon" },
  { id: "saat-phere", name: "Saat Phere", subtitle: "The Seven Vows", description: "The couple takes seven rounds around the sacred fire, making seven promises of love, respect, and companionship.", icon: HandHeart, date: "26 Nov, Afternoon" },
  { id: "reception", name: "Reception", subtitle: "The Grand Celebration", description: "The newlywed couple makes their first public appearance as husband and wife to receive blessings and celebrate with all guests.", icon: GlassWater, date: "26 Nov, Evening" }
] as const;
