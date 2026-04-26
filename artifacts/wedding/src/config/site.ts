/**
 * SITE CONFIGURATION
 * --------------------------------------------------------------
 * Edit this file to update names, dates, contacts and links
 * shown across the website.
 */

export const SITE = {
  // Couple
  groom: "Sanket More",
  bride: "Bhagyashree Zaware",
  groomShort: "Sanket",
  brideShort: "Bhagyashree",

  // Wedding
  weddingDate: new Date("2026-11-26T00:00:00+05:30"),
  weddingDateLabel: "26 November 2026",
  weddingDateMarathi: "२६ नोव्हेंबर २०२६",

  // Venue
  venueName: "River Paradise Resort",
  venueLocation: "Kolavadi, Karjat, Maharashtra",
  venueAddress: "Kolavadi, Karjat, Maharashtra 410201",

  // Tagline
  taglineEnglish: "A Sacred Hindu-Maratha Union",
  taglineMarathi: "शुभ विवाह सोहळा",
  invitation: "Shubh Vivah Sohala",

  // Families
  groomFamily: "More Family",
  brideFamily: "Zaware Family",

  /**
   * GOOGLE PHOTOS GALLERY
   * Paste your shared Google Photos album URL below.
   * Leave empty ("") to show a "coming soon" message instead.
   * Tip: open your album in Google Photos, click Share, then "Create link".
   */
  galleryUrl: "https://photos.app.goo.gl/ayS2NzmLMyvqnCuR8", // e.g. "https://photos.app.goo.gl/XXXXXXXXXX"

  /**
   * TRAVEL HELPER
   * Contact details for the lady who helps guests plan their India trip.
   */
  travelHelper: {
    name: "Mrs. Anita Kulkarni",
    role: "Travel Concierge for Wedding Guests",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    email: "anita.travel@example.com",
    blurb:
      "A seasoned travel curator based in Pune, Anita has spent 15+ years crafting bespoke India journeys for international guests. From booking heritage stays in Rajasthan to arranging Kerala backwater cruises, she takes care of every detail so you can focus on the celebration.",
  },

  /**
   * ADMIN LOGIN
   */
  admin: {
    username: "Bhagyashree",
    password: "Sanket2026",
  },

  /**
   * API SERVER
   */
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "",
} as const;

export const PALETTE = {
  saffron: "#e85d04",
  saffronDeep: "#c63a06",
  maroon: "#8b1e3f",
  maroonDeep: "#5e0f29",
  gold: "#c9a227",
  goldSoft: "#e7c554",
  cream: "#fdf8ee",
  ivory: "#f4ecd8",
  ink: "#1a1410",
} as const;
