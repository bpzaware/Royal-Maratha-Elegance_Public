import jaipurImg from "@/assets/jaipur.png";
import keralaImg from "@/assets/kerala.png";
import tajMahalImg from "@/assets/taj-mahal.png";

export const DESTINATIONS = [
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1522204481062-817887e5b22b?auto=format&fit=crop&w=800&q=80",
    topPlaces: ["Gateway of India", "Marine Drive", "Colaba Causeway"],
    days: 3,
    foods: ["Vada Pav", "Pav Bhaji", "Bombil Fry"],
    airport: "BOM (Mumbai)",
    blurb: "The city of dreams, offering a mix of colonial architecture, bustling markets, and coastal beauty."
  },
  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    topPlaces: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
    days: 2,
    foods: ["Misal Pav", "Pithla Bhakri", "Bakarwadi"],
    airport: "PNQ (Pune)",
    blurb: "The cultural capital of Maharashtra, known for its historical forts and vibrant student life."
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e4f2?auto=format&fit=crop&w=800&q=80",
    topPlaces: ["Baga Beach", "Basilica of Bom Jesus", "Dudhsagar Falls"],
    days: 4,
    foods: ["Fish Curry", "Vindaloo", "Bebinca"],
    airport: "GOI (Goa)",
    blurb: "Famous for its pristine beaches, Portuguese heritage, and relaxed coastal vibe."
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    image: jaipurImg,
    topPlaces: ["Amber Fort", "Hawa Mahal", "City Palace"],
    days: 3,
    foods: ["Dal Baati Churma", "Laal Maas", "Ghevar"],
    airport: "JAI (Jaipur)",
    blurb: "The Pink City, showcasing royal palaces, majestic forts, and rich Rajput culture."
  },
  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&w=800&q=80",
    topPlaces: ["City Palace", "Lake Pichola", "Jag Mandir"],
    days: 3,
    foods: ["Kachori", "Mirchi Bada", "Mohanthal"],
    airport: "UDR (Udaipur)",
    blurb: "The City of Lakes, known for its romantic palaces, serene waters, and intricate architecture."
  },
  {
    id: "kerala",
    name: "Munnar",
    state: "Kerala",
    image: keralaImg,
    topPlaces: ["Tea Gardens", "Eravikulam Park", "Mattupetty Dam"],
    days: 4,
    foods: ["Appam", "Karimeen Pollichathu", "Puttu"],
    airport: "COK (Kochi)",
    blurb: "God's Own Country, featuring tranquil backwaters, lush tea plantations, and pristine nature."
  },
  {
    id: "delhi",
    name: "New Delhi",
    state: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    topPlaces: ["Red Fort", "India Gate", "Qutub Minar"],
    days: 3,
    foods: ["Chole Bhature", "Butter Chicken", "Parathas"],
    airport: "DEL (New Delhi)",
    blurb: "The capital city, blending ancient history with modern metropolis and incredible street food."
  },
  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    image: tajMahalImg,
    topPlaces: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    days: 2,
    foods: ["Petha", "Bedai", "Mughlai Curry"],
    airport: "AGR (Agra) / DEL (New Delhi)",
    blurb: "Home to the iconic Taj Mahal, a masterpiece of Mughal architecture and symbol of eternal love."
  },
  {
    id: "rajasthan-desert",
    name: "Jaisalmer",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    topPlaces: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli"],
    days: 2,
    foods: ["Ker Sangri", "Gatte Ki Sabzi", "Mawa Kachori"],
    airport: "JSA (Jaisalmer)",
    blurb: "The Golden City, offering majestic sand dunes, camel safaris, and golden sandstone architecture."
  }
] as const;
