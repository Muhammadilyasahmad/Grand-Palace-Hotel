// Real Hotel Photographic & Video Assets uploaded by Grand Palace Hotel Multan
export const REAL_HOTEL_ASSETS = {
  // Real Video
  inaugurationVideo: "/assets/aistudio/WhatsApp_Video_2026-10-24_at_3.26.02_AM_46a6f0ce.mp4",

  // Real Exterior & Parking
  hotelExteriorCourtyard: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.25.59_AM_eaad88eb.jpeg",
  banquetParkingEntrance: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.01_AM__2__fc5cb9a1.jpeg",
  parkingAreaCovered: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.25.58_AM_18488669.jpeg",
  securityEntrance: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.00_AM__1__645995a0.jpeg",

  // Real Reception & Lobby
  receptionDeskStaff: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.03_AM_bd1f8c51.jpeg",
  receptionDeskWarm: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.02_AM__1__8251a692.jpeg",
  receptionDeskFront: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.00_AM_81dd880f.jpeg",
  mainLobbyLounge: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.25.59_AM__1__9866b127.jpeg",
  lobbySeatingArea: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.02_AM_b1336a41.jpeg",
  guestCorridor: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.25.59_AM__2__0f419145.jpeg",

  // Real Rooms
  familyQuadRoom: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.01_AM__1__3d94c0fd.jpeg",
  executiveTripleRoom: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.01_AM_a5afd970.jpeg",
  deluxeDoubleRoom: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.26.00_AM__2__cbcb2b81.jpeg",
};

export interface RoomCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bedType: string;
  occupancy: string;
  roomSize: string;
  verifiedFeatures: string[];
  priceNote: string;
}

export interface HotelFacility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
  realImage?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'exterior' | 'lobby' | 'parking' | 'video';
  image: string;
  caption: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface Landmark {
  name: string;
  distance: string;
  driveTime: string;
  description: string;
}

export const HOTEL_CONFIG = {
  name: "Grand Palace Hotel & Restaurant",
  shortName: "Grand Palace Hotel Multan",
  brandSubtitle: "Multan, Pakistan",
  tagline: "Comfort, convenience, and a warm welcome in the heart of Multan.",
  address: "Railway Road Chowk, Railway Colony, Basti Saddu Hassan, Multan, Punjab, Pakistan",
  postalCode: "60000",
  // Verified Contact Numbers from Hotel entrance banner & listings
  verifiedPhone: "+92 300 1113686",
  verifiedWhatsAppNumber: "923001113686", // International format digits only
  whatsappDisplay: "+92 300 1113686",
  additionalPhones: [
    { label: "Front Desk & Reservations", number: "+92 300 1113686" },
    { label: "Hotel Hotline", number: "+92 306 7777363" },
    { label: "Manager & Banquet", number: "+92 312 8121514" }
  ],
  frontDeskHours: "24 Hours / 7 Days a Week",
  checkInTime: "14:00 (2:00 PM)",
  checkOutTime: "12:00 (12:00 PM)",
  // Real Hero Images
  heroImage: REAL_HOTEL_ASSETS.hotelExteriorCourtyard,
  receptionImage: REAL_HOTEL_ASSETS.receptionDeskStaff,
  securityImage: REAL_HOTEL_ASSETS.securityEntrance,
  locationCoordinates: {
    lat: 30.1925,
    lng: 71.4582,
  },
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Palace+Hotel+Multan+Railway+Road",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Grand+Palace+Hotel+Railway+Road+Multan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  defaultInquiryText: "Assalam-o-Alaikum, I would like to inquire about room availability and booking at Grand Palace Hotel Multan. Please share the available room options and rates."
};

export const ROOMS_DATA: RoomCategory[] = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    tagline: "Spacious Comfort with Double Beds, Sofa Lounge & Split AC",
    description: "Tastefully appointed air-conditioned master room featuring comfortable double bedding with clean white linen, seating sofa, wall-mounted television, dressing mirror, and private bathroom.",
    image: REAL_HOTEL_ASSETS.deluxeDoubleRoom,
    bedType: "2 Comfortable Double Beds",
    occupancy: "2–3 Guests",
    roomSize: "280 sq. ft.",
    verifiedFeatures: [
      "Real Room Photo Verified",
      "Split Unit Air Conditioning",
      "Wall-Mounted LCD Television",
      "Cozy Seating Sofa & Coffee Table",
      "Attached Clean Bathroom",
      "Free High-Speed Wi-Fi",
      "24/7 Room Service & Intercom"
    ],
    priceNote: "Contact via WhatsApp for today's special rate"
  },
  {
    id: "deluxe-family",
    name: "Deluxe Family Room (Quad Setup)",
    tagline: "Expansive 4-Bed Layout for Families & Group Travelers",
    description: "Generously proportioned family accommodation fitted with four individual wooden beds, clean white bedding, split air conditioning, ceiling fans, sofa seating, and tiled floors for maximum comfort.",
    image: REAL_HOTEL_ASSETS.familyQuadRoom,
    bedType: "4 Separate Single Beds",
    occupancy: "4–5 Family Guests",
    roomSize: "450 sq. ft.",
    verifiedFeatures: [
      "Real Room Photo Verified",
      "4 Independent Single Beds",
      "Split Air Conditioner & Ceiling Fans",
      "Lounge Sofa & Coffee Table",
      "Large Attached Bathroom",
      "High-Speed Wi-Fi",
      "Daily Housekeeping"
    ],
    priceNote: "Inquire via WhatsApp for family discount packages"
  },
  {
    id: "executive-triple",
    name: "Executive Triple Room",
    tagline: "Long-Format Suite with Multi-Beds, Work Desk & Wardrobe",
    description: "Spacious long-format room designed with multiple sleeping arrangements, individual wardrobe, work table, wall-mounted TV, split air conditioner, and bright tiled decor.",
    image: REAL_HOTEL_ASSETS.executiveTripleRoom,
    bedType: "3 Beds Configuration",
    occupancy: "3 Guests",
    roomSize: "360 sq. ft.",
    verifiedFeatures: [
      "Real Room Photo Verified",
      "Three Comfortable Beds",
      "Climate-Controlled Air Conditioning",
      "Wooden Clothes Wardrobe",
      "Work Desk & Table",
      "Attached Modern Bathroom",
      "Free High-Speed Wi-Fi"
    ],
    priceNote: "Inquire via WhatsApp for group & corporate rates"
  },
  {
    id: "deluxe-single",
    name: "Deluxe Single Room",
    tagline: "Quiet & Efficient Private Room for Solo & Corporate Visitors",
    description: "Private single room equipped with comfortable bed, split air conditioning, fast Wi-Fi, work table, and round-the-clock room service on Railway Road.",
    image: REAL_HOTEL_ASSETS.deluxeDoubleRoom,
    bedType: "1 Comfortable Bed",
    occupancy: "1 Guest",
    roomSize: "190 sq. ft.",
    verifiedFeatures: [
      "Split Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Attached Clean Bathroom",
      "24-Hour Room Service",
      "Quiet Environment"
    ],
    priceNote: "Inquire via WhatsApp for single occupancy rates"
  },
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    tagline: "Dual Bed Configuration for Traveling Colleagues & Friends",
    description: "Comfortable room configured with separate beds, air conditioning, free Wi-Fi, wardrobe, clean bathroom, and attentive hospitality service.",
    image: REAL_HOTEL_ASSETS.deluxeDoubleRoom,
    bedType: "2 Separate Beds",
    occupancy: "2 Guests",
    roomSize: "260 sq. ft.",
    verifiedFeatures: [
      "Two Separate Beds",
      "Split Air Conditioning",
      "Attached Bathroom",
      "High-Speed Wi-Fi Access",
      "24/7 Front Desk Support"
    ],
    priceNote: "Inquire via WhatsApp for twin room tariff"
  }
];

export const FACILITIES_DATA: HotelFacility[] = [
  {
    id: "parking",
    title: "Secure On-Site Parking",
    description: "Spacious open courtyard and covered parking area protected with 24/7 security, accommodating cars, 4WD vehicles, and private vans.",
    iconName: "Car",
    highlight: "Free & Monitored for Guests",
    realImage: REAL_HOTEL_ASSETS.parkingAreaCovered
  },
  {
    id: "security",
    title: "24/7 Dedicated Security",
    description: "Uniformed security personnel stationed at the main hotel entrance around the clock to ensure complete safety and peace of mind.",
    iconName: "ShieldCheck",
    highlight: "24-Hour Active Guard",
    realImage: REAL_HOTEL_ASSETS.securityEntrance
  },
  {
    id: "reception",
    title: "24-Hour Front Desk",
    description: "Professional reception staff in uniform ready to assist with round-the-clock check-ins, guest queries, luggage, and local travel advice.",
    iconName: "Clock",
    highlight: "Always Attentive",
    realImage: REAL_HOTEL_ASSETS.receptionDeskStaff
  },
  {
    id: "lobby",
    title: "Spacious Lobby & Lounge",
    description: "Welcoming reception lounge with chandelier, comfortable leather sofa seating, and dining area for relaxing or waiting for transport.",
    iconName: "Coffee",
    highlight: "Comfortable Waiting Area",
    realImage: REAL_HOTEL_ASSETS.mainLobbyLounge
  },
  {
    id: "ac",
    title: "Air-Conditioned Rooms",
    description: "Modern split-unit air conditioners in all guest bedrooms keeping you cool and relaxed in Multan's warm climate.",
    iconName: "Wind",
    highlight: "Individual AC Control",
    realImage: REAL_HOTEL_ASSETS.deluxeDoubleRoom
  },
  {
    id: "family",
    title: "Family & Quad Accommodation",
    description: "Large 4-bed family rooms and triple setups designed specifically to comfortably host visiting families together.",
    iconName: "Users",
    highlight: "Spacious Family Rooms",
    realImage: REAL_HOTEL_ASSETS.familyQuadRoom
  },
  {
    id: "wifi",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet coverage across all guest rooms, corridors, and reception areas.",
    iconName: "Wifi",
    highlight: "Fast & Unlimited"
  },
  {
    id: "roomservice",
    title: "Room Service & Cleanliness",
    description: "Prompt in-room service delivering tea, refreshments, and fresh linens with spotless guest corridors and daily housekeeping.",
    iconName: "Sparkles",
    highlight: "Spotless Clean Rooms",
    realImage: REAL_HOTEL_ASSETS.guestCorridor
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g-video",
    title: "Grand Opening Ceremony (Video)",
    category: "video",
    image: REAL_HOTEL_ASSETS.hotelExteriorCourtyard,
    caption: "Grand inauguration ceremony at Grand Palace Hotel Multan with chief guest Syed Ali Musa Gillani cutting the ribbon alongside owners and staff.",
    isVideo: true,
    videoUrl: REAL_HOTEL_ASSETS.inaugurationVideo
  },
  {
    id: "g-exterior-courtyard",
    title: "Hotel Building Courtyard & Entrance",
    category: "exterior",
    image: REAL_HOTEL_ASSETS.hotelExteriorCourtyard,
    caption: "Real photo of Grand Palace Hotel & Restaurant courtyard at night, showing the multi-story hotel balconies, warm lighting, and vehicle parking."
  },
  {
    id: "g-reception-staff",
    title: "Front Desk & Reception Staff",
    category: "lobby",
    image: REAL_HOTEL_ASSETS.receptionDeskStaff,
    caption: "Our polite reception staff in uniform attending to a guest checking in at the front desk counter with the 24-hour reception board."
  },
  {
    id: "g-reception-warm",
    title: "Reception Counter & Lobby Entry",
    category: "lobby",
    image: REAL_HOTEL_ASSETS.receptionDeskWarm,
    caption: "Warm ambiance at the Grand Palace Hotel reception counter with decorative lighting, clock, and staircase leading to upper guest rooms."
  },
  {
    id: "g-lobby-lounge",
    title: "Grand Lobby & Waiting Lounge",
    category: "lobby",
    image: REAL_HOTEL_ASSETS.mainLobbyLounge,
    caption: "Airy lobby lounge featuring ceiling chandelier, comfortable leather sofas, central floor design, and dining space."
  },
  {
    id: "g-family-room",
    title: "Deluxe Family Room (4-Bed Setup)",
    category: "rooms",
    image: REAL_HOTEL_ASSETS.familyQuadRoom,
    caption: "Real photograph of the spacious Family Room equipped with 4 comfortable single beds, clean white linens, split AC, and sofa seating."
  },
  {
    id: "g-executive-triple",
    title: "Executive Triple Room & Suite",
    category: "rooms",
    image: REAL_HOTEL_ASSETS.executiveTripleRoom,
    caption: "Executive suite with multiple beds, wooden clothes wardrobe, wall-mounted television, split AC, and tiled flooring."
  },
  {
    id: "g-double-room",
    title: "Deluxe Double Room Interior",
    category: "rooms",
    image: REAL_HOTEL_ASSETS.deluxeDoubleRoom,
    caption: "Comfortable double room with plush bedding, seating sofa, wall LCD, dressing mirror, and split air conditioner."
  },
  {
    id: "g-security",
    title: "24/7 Security Guard at Main Entrance",
    category: "parking",
    image: REAL_HOTEL_ASSETS.securityEntrance,
    caption: "Dedicated uniformed security guard stationed at the hotel entrance under the Masha'Allah board, providing round-the-clock safety."
  },
  {
    id: "g-parking-covered",
    title: "Hotel Parking Area",
    category: "parking",
    image: REAL_HOTEL_ASSETS.parkingAreaCovered,
    caption: "Designated covered parking facility at Grand Palace Hotel Multan with ample room for cars and SUVs."
  },
  {
    id: "g-parking-night",
    title: "Banquet Hall & Parking Entrance",
    category: "parking",
    image: REAL_HOTEL_ASSETS.banquetParkingEntrance,
    caption: "Entrance gate and parking area showing The Grand Palace Hotel & Restaurant Banquet Hall sign and guest vehicles."
  },
  {
    id: "g-corridor",
    title: "Spotless Guest Room Corridor",
    category: "lobby",
    image: REAL_HOTEL_ASSETS.guestCorridor,
    caption: "Clean, well-illuminated guest corridor with polished tile flooring leading to private guest suites."
  },
  {
    id: "g-lobby-seating",
    title: "Reception Lobby Seating Area",
    category: "lobby",
    image: REAL_HOTEL_ASSETS.lobbySeatingArea,
    caption: "Comfortable leather sofa seating and floor medallion inside the Grand Palace Hotel reception lobby."
  }
];

export const NEARBY_LANDMARKS: Landmark[] = [
  {
    name: "Multan Railway Station",
    distance: "1.2 km",
    driveTime: "3–5 mins drive",
    description: "Quick access for passengers arriving via Railway Road."
  },
  {
    name: "Multan Cantonment (Cantt) & Sadar Bazar",
    distance: "2.5 km",
    driveTime: "6–8 mins drive",
    description: "Premier shopping, dining, and secure cantonment area."
  },
  {
    name: "Ghanta Ghar (Multan Clock Tower)",
    distance: "3.2 km",
    driveTime: "8–10 mins drive",
    description: "Historic central landmark of Multan city center."
  },
  {
    name: "Shrines of Shah Rukn-e-Alam & Bahauddin Zakariya",
    distance: "3.8 km",
    driveTime: "10–12 mins drive",
    description: "The renowned historical and spiritual crown jewels of Multan Fort."
  },
  {
    name: "Multan International Airport (MUX)",
    distance: "7.5 km",
    driveTime: "15–18 mins drive",
    description: "Straightforward connection to the regional airport terminal."
  }
];
