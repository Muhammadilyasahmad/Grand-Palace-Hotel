import hotelExteriorImg from '../assets/images/hotel_exterior_1792783917023.jpg';
import hotelReceptionImg from '../assets/images/hotel_reception_lobby_1792783917717.jpg';
import roomDeluxeDoubleImg from '../assets/images/room_deluxe_double_1792783918343.jpg';
import roomDeluxeTwinImg from '../assets/images/room_deluxe_twin_1792783919040.jpg';
import roomFamilySuiteImg from '../assets/images/room_family_suite_1792783920068.jpg';
import roomDeluxeSingleImg from '../assets/images/room_deluxe_single_1792783938222.jpg';
import hotelRestaurantImg from '../assets/images/hotel_dining_restaurant_1792783919890.jpg';
import hotelBathroomImg from '../assets/images/hotel_bathroom_1792783937084.jpg';

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
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'exterior' | 'dining' | 'facilities';
  image: string;
  caption: string;
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
  // Verified Contact Info from Google Listings & Public Records
  verifiedPhone: "+92 300 1113686",
  verifiedWhatsAppNumber: "923001113686", // International format digits only
  whatsappDisplay: "+92 300 1113686",
  frontDeskHours: "24 Hours / 7 Days a Week",
  checkInTime: "14:00 (2:00 PM)",
  checkOutTime: "12:00 (12:00 PM)",
  heroImage: hotelExteriorImg,
  receptionImage: hotelReceptionImg,
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
    id: "deluxe-single",
    name: "Deluxe Single Room",
    tagline: "Cozy & Efficient Accommodation for Solo & Business Travelers",
    description: "Thoughtfully designed private room featuring a comfortable single bed, independent air conditioning, ergonomic work desk, high-speed Wi-Fi, and 24-hour room service.",
    image: roomDeluxeSingleImg,
    bedType: "1 Single Bed",
    occupancy: "1 Guest",
    roomSize: "180 sq. ft.",
    verifiedFeatures: [
      "Individual Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Attached Clean Bathroom",
      "Work Desk & Reading Lamp",
      "24-Hour Room Service",
      "Fresh Linens & Daily Housekeeping"
    ],
    priceNote: "Inquire via WhatsApp for competitive daily rates"
  },
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    tagline: "Elegant Sanctuary with King-Size Bed for Couples & Business Executives",
    description: "Spacious and tastefully furnished master bedroom offering a plush double/king bed, split air conditioner, flat-screen television, seating area, and modern attached bathroom.",
    image: roomDeluxeDoubleImg,
    bedType: "1 King / Double Bed",
    occupancy: "2 Guests",
    roomSize: "260 sq. ft.",
    verifiedFeatures: [
      "Comfortable King-Size Bed",
      "Split Air Conditioning",
      "Flat-Screen Television",
      "Attached Modern Bathroom",
      "High-Speed Wi-Fi",
      "Lounge Chair & Coffee Table",
      "24/7 Front Desk Assistance"
    ],
    priceNote: "Inquire via WhatsApp for current rates & deals"
  },
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    tagline: "Dual Bed Configuration Ideal for Colleagues & Friends",
    description: "Well-lit and functional room fitted with two separate single beds, double wardrobe, window view, cooling air conditioning, and clean private en-suite bathroom.",
    image: roomDeluxeTwinImg,
    bedType: "2 Separate Single Beds",
    occupancy: "2 Guests",
    roomSize: "280 sq. ft.",
    verifiedFeatures: [
      "2 Individual Single Beds",
      "Powerful Air Conditioner",
      "High-Speed Wi-Fi Access",
      "Storage Wardrobe",
      "En-Suite Clean Bathroom",
      "Intercom Front Desk Access"
    ],
    priceNote: "Inquire via WhatsApp for group & corporate rates"
  },
  {
    id: "executive-triple",
    name: "Executive Triple Room",
    tagline: "Generous Multi-Bed Space for Small Groups & Small Families",
    description: "Expanded living space configured with comfortable multi-bed sleeping arrangements, seating area, air conditioning, and attentive room service for up to three guests.",
    image: roomFamilySuiteImg,
    bedType: "1 Double + 1 Single Bed",
    occupancy: "3 Guests",
    roomSize: "340 sq. ft.",
    verifiedFeatures: [
      "Three Sleeping Spaces",
      "Climate-Controlled Air Conditioning",
      "Spacious Attached Bathroom",
      "Free High-Speed Wi-Fi",
      "Seating Area with Table",
      "Round-the-Clock Support"
    ],
    priceNote: "Inquire via WhatsApp for best triple rates"
  },
  {
    id: "deluxe-family",
    name: "Deluxe Family Room",
    tagline: "Comprehensive Multi-Bed Family Suite for Parents and Children",
    description: "Specially appointed for visiting families, providing ample bed space, sitting lounge area, flat-screen TV, air conditioning, and full privacy in the heart of Multan.",
    image: roomFamilySuiteImg,
    bedType: "Multiple Beds (Double + Singles)",
    occupancy: "4–5 Guests",
    roomSize: "450 sq. ft.",
    verifiedFeatures: [
      "Multiple Bed Setups for Families",
      "Full Air Conditioning",
      "Family-Sized Clean Bathroom",
      "Flat-Screen Television",
      "Luggage & Wardrobe Storage",
      "Fast Room Service & Wi-Fi"
    ],
    priceNote: "Inquire via WhatsApp for tailored family packages"
  }
];

export const FACILITIES_DATA: HotelFacility[] = [
  {
    id: "wifi",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary wireless internet coverage throughout all guest rooms, reception lobby, and public areas for seamless connectivity.",
    iconName: "Wifi",
    highlight: "All Rooms & Public Areas"
  },
  {
    id: "parking",
    title: "On-Site Secure Parking",
    description: "Convenient on-premises vehicle parking for hotel guests traveling by car or private transport, with monitored security.",
    iconName: "Car",
    highlight: "Complimentary for Guests"
  },
  {
    id: "ac",
    title: "Air-Conditioned Rooms",
    description: "Modern climate control units in every room ensuring cool, comfortable rest regardless of Multan's seasonal weather.",
    iconName: "Wind",
    highlight: "Individual Climate Control"
  },
  {
    id: "reception",
    title: "24-Hour Front Desk",
    description: "Round-the-clock reception team ready to facilitate smooth check-ins, guest inquiries, luggage assistance, and travel guidance.",
    iconName: "Clock",
    highlight: "24/7 Attentive Staff"
  },
  {
    id: "roomservice",
    title: "Room Service",
    description: "Prompt in-room dining and refreshment service delivering fresh meals, hot tea, and beverages directly to your doorstep.",
    iconName: "UtensilsCrossed",
    highlight: "In-Room Convenience"
  },
  {
    id: "family",
    title: "Family Accommodation",
    description: "Specially dedicated triple and family room options tailored to keep families and children comfortable in one shared space.",
    iconName: "Users",
    highlight: "Spacious Multi-Bed Layouts"
  },
  {
    id: "dining",
    title: "On-Site Restaurant & Dining",
    description: "Traditional Pakistani delicacies and fresh breakfast choices prepared with quality ingredients inside our restaurant area.",
    iconName: "Coffee",
    highlight: "Fresh Local Delicacies"
  },
  {
    id: "backup",
    title: "Reliable Generator Backup",
    description: "Continuous uninterrupted electrical power supply with heavy-duty backup generators for peace of mind.",
    iconName: "Zap",
    highlight: "Uninterrupted Power"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Grand Palace Hotel Exterior",
    category: "exterior",
    image: hotelExteriorImg,
    caption: "The majestic multi-story hotel facade situated on Railway Road, Multan, beautifully illuminated at dusk."
  },
  {
    id: "g2",
    title: "Reception Lobby & Front Desk",
    category: "facilities",
    image: hotelReceptionImg,
    caption: "Polished marble lobby with warm chandeliers and welcoming 24-hour reception staff."
  },
  {
    id: "g3",
    title: "Deluxe Double Bedroom",
    category: "rooms",
    image: roomDeluxeDoubleImg,
    caption: "Luxurious double accommodation featuring a king-size bed, gold accents, and serene interior."
  },
  {
    id: "g4",
    title: "Deluxe Twin Room",
    category: "rooms",
    image: roomDeluxeTwinImg,
    caption: "Dual bed setup with pristine white bedding and natural window illumination."
  },
  {
    id: "g5",
    title: "Deluxe Family Suite",
    category: "rooms",
    image: roomFamilySuiteImg,
    caption: "Expansive family room with multiple beds, wooden headboards, and comfortable seating."
  },
  {
    id: "g6",
    title: "Deluxe Single Room",
    category: "rooms",
    image: roomDeluxeSingleImg,
    caption: "Cozy single bedroom with dedicated workspace, air conditioner, and modern comforts."
  },
  {
    id: "g7",
    title: "Grand Palace Restaurant Hall",
    category: "dining",
    image: hotelRestaurantImg,
    caption: "Elegant dining area where guests enjoy freshly prepared Pakistani cuisine and breakfast."
  },
  {
    id: "g8",
    title: "Modern Attached Bathroom",
    category: "facilities",
    image: hotelBathroomImg,
    caption: "Sparkling clean en-suite bathroom with glass shower stall, vanity lighting, and fresh towels."
  }
];

export const NEARBY_LANDMARKS: Landmark[] = [
  {
    name: "Multan Railway Station",
    distance: "1.2 km",
    driveTime: "3–5 mins drive",
    description: "Quick access for travelers arriving by train via Railway Road."
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
