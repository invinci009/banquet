import {
    Utensils,
    Flower,
    CalendarCheck,
    Camera,
    Music,
    Users,
    Wine,
    Car,
    Palette,
    Heart,
    LucideIcon
} from "lucide-react";

export type IconName = "utensils" | "flower" | "calendar-check" | "camera" | "music" | "users" | "wine" | "car" | "palette" | "heart";

export const iconMap: Record<IconName, LucideIcon> = {
    "utensils": Utensils,
    "flower": Flower,
    "calendar-check": CalendarCheck,
    "camera": Camera,
    "music": Music,
    "users": Users,
    "wine": Wine,
    "car": Car,
    "palette": Palette,
    "heart": Heart,
};

export interface Service {
    id: number;
    slug: string;
    iconName: IconName;
    title: string;
    shortDesc: string;
    description: string;
    fullDescription: string;
    features: string[];
    image: string;
    galleryImages: string[];
    highlight: string;
    pricing: string;
    duration: string;
}

export const services: Service[] = [
    {
        id: 1,
        slug: "gourmet-catering",
        iconName: "utensils",
        title: "Gourmet Catering",
        shortDesc: "Multi-cuisine culinary excellence",
        description: "Indulge in a gastronomic journey with our diverse menu options. Our expert chefs craft everything from traditional Indian delicacies to international cuisines, ensuring hygiene, taste, and presentation are world-class.",
        fullDescription: "At Royal Grandeur, we believe that exceptional food is the heart of every memorable celebration. Our culinary team, led by master chefs with decades of experience, creates an unforgettable gastronomic experience for you and your guests. From authentic Bihari specialties to North Indian classics, Mughlai delicacies, and international cuisines - we craft each dish with passion and precision. Our kitchens maintain the highest standards of hygiene and food safety, and we source only the freshest ingredients from trusted suppliers.",
        features: ["Live Food Stations", "Customized Menus", "Multi-Cuisine Options", "Trained Service Staff", "Diet-Specific Options", "Live Counters", "Chaat Corner", "Dessert Stations", "Welcome Drinks", "Midnight Snacks"],
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop"
        ],
        highlight: "500+ Menu Options",
        pricing: "Starting ₹800/plate",
        duration: "Full Event Coverage"
    },
    {
        id: 2,
        slug: "exquisite-decoration",
        iconName: "flower",
        title: "Exquisite Decoration",
        shortDesc: "Transform your vision into reality",
        description: "Our expert decorators transform venues into dreamscapes. From classic elegance to contemporary themes, we create stunning visual experiences with premium florals, drapery, and ambient lighting.",
        fullDescription: "Transform your celebration into a visual masterpiece with our comprehensive decoration services. Our award-winning design team brings together creativity, craftsmanship, and cutting-edge technology to create breathtaking environments. Whether you envision a traditional mandap adorned with marigolds and roses, a modern minimalist setup, or a lavish royal theme with crystal chandeliers and silk drapes - we bring your dreams to life. We work with premium flowers sourced fresh, imported fabrics, and state-of-the-art lighting systems to create the perfect ambiance.",
        features: ["Floral Arrangements", "Theme Concepts", "Stage Design", "Ambient Lighting", "Entry Gates", "Table Settings", "Mandap Decoration", "LED Walls", "Photo Booths", "Ceiling Décor"],
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
        ],
        highlight: "100+ Themes",
        pricing: "Starting ₹1,50,000",
        duration: "Setup & Dismantling Included"
    },
    {
        id: 3,
        slug: "event-planning",
        iconName: "calendar-check",
        title: "Event Planning",
        shortDesc: "Seamless end-to-end management",
        description: "Our experienced planners manage every detail, from vendor coordination to guest hospitality. We ensure your event runs smoothly with meticulous planning and flawless execution.",
        fullDescription: "Let our expert event planners take the stress out of your celebration. From the moment you book with us, you'll have a dedicated coordinator who becomes your single point of contact for everything. We handle vendor negotiations, timeline creation, logistics management, and on-the-day coordination so you can focus on enjoying your special moments. Our planners bring years of experience and a vast network of trusted vendors to ensure every aspect of your event exceeds expectations.",
        features: ["End-to-End Management", "Vendor Coordination", "Timeline Planning", "Day-of Management", "Guest List Management", "Budget Optimization", "Rehearsal Coordination", "Emergency Backup Plans", "RSVP Management", "Post-Event Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
        ],
        highlight: "Dedicated Coordinator",
        pricing: "Starting ₹50,000",
        duration: "3-6 Months Planning"
    },
    {
        id: 4,
        slug: "photography-videography",
        iconName: "camera",
        title: "Photography & Videography",
        shortDesc: "Capture every precious moment",
        description: "Our professional photographers and videographers capture every emotion, every smile, and every tear of joy. With state-of-the-art equipment and artistic vision, we create timeless memories.",
        fullDescription: "Your special moments deserve to be captured with artistry and precision. Our team of award-winning photographers and cinematographers use the latest equipment including 4K cameras, drones, and stabilizers to create stunning visual stories. From candid moments to grand celebrations, pre-wedding shoots to same-day edits - we capture the essence of your event. Our post-production team works meticulously on color grading, editing, and album design to deliver products that you'll treasure for generations.",
        features: ["Pre-Wedding Shoots", "Candid Photography", "Cinematic Videos", "Drone Coverage", "Photo Albums", "Same-Day Edits", "360° Photography", "Photo Booth", "Live Streaming", "Digital Gallery"],
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop"
        ],
        highlight: "4K Cinematic",
        pricing: "Starting ₹75,000",
        duration: "Full Day Coverage"
    },
    {
        id: 5,
        slug: "entertainment-dj",
        iconName: "music",
        title: "Entertainment & DJ",
        shortDesc: "Keep the celebrations alive",
        description: "From soulful live bands to energetic DJs, we bring the perfect entertainment to match your celebration's vibe. Choreographed performances, celebrity appearances, and more.",
        fullDescription: "Entertainment is what transforms a good event into an unforgettable one. Our entertainment division offers everything from professional DJs with premium sound systems to live bands, classical musicians, and choreographed dance performances. We can arrange celebrity appearances, stand-up comedians, and specialized acts like fire dancers or aerial performers. Our sound and lighting technicians ensure crystal-clear audio and mesmerizing visual effects that keep your guests engaged throughout.",
        features: ["Professional DJs", "Live Bands", "Dance Performances", "Celebrity Artists", "Sound Systems", "Light Shows", "Anchor/Emcee", "Cultural Programs", "Kids Entertainment", "Fireworks"],
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop"
        ],
        highlight: "Premium Sound",
        pricing: "Starting ₹40,000",
        duration: "4-8 Hours"
    },
    {
        id: 6,
        slug: "mehendi-haldi-ceremony",
        iconName: "heart",
        title: "Mehendi & Haldi Ceremony",
        shortDesc: "Traditional ceremonies with elegance",
        description: "Celebrate your pre-wedding rituals in style. We provide dedicated spaces and specialized setups for Mehendi and Haldi ceremonies with traditional décor and comfortable seating.",
        fullDescription: "The pre-wedding ceremonies of Mehendi and Haldi are cherished traditions that deserve a perfect setting. We offer dedicated venues with traditional yet elegant décor featuring marigold garlands, colorful drapes, and comfortable floor seating. Our packages include professional Mehendi artists who create intricate designs, traditional music, and delicious refreshments. The Haldi ceremony setup features protective coverings, traditional urlis, and all necessary arrangements to keep the celebrations joyful and mess-free.",
        features: ["Dedicated Venue", "Traditional Décor", "Mehendi Artists", "Music & Dance", "Refreshments", "Photography Setup", "Seating Arrangements", "Haldi Setup", "Games & Activities", "Return Gifts"],
        image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1609358905581-e5381612486e?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1604604994333-f1b0e9471186?w=600&h=400&fit=crop"
        ],
        highlight: "Complete Setup",
        pricing: "Starting ₹35,000",
        duration: "Half Day Event"
    },
    {
        id: 7,
        slug: "bar-beverages",
        iconName: "wine",
        title: "Bar & Beverages",
        shortDesc: "Premium drink experiences",
        description: "Elevate your celebration with our curated beverage services. From signature mocktails to premium bar setups, our skilled bartenders craft memorable drink experiences.",
        fullDescription: "Quench your guests' thirst with our premium beverage services. Our professional bartenders craft exquisite mocktails, fresh juices, and specialty drinks that complement your event theme. We offer beautifully designed bar counters, from rustic wooden setups to sleek modern designs. Our beverage menu includes everything from traditional Indian drinks like lassi and jaljeera to international favorites and customized signature drinks created specially for your event.",
        features: ["Mocktail Bars", "Premium Setups", "Signature Drinks", "Trained Bartenders", "Elegant Counters", "Non-Alcoholic Options", "Chaas Counter", "Coffee Station", "Tea Service", "Fresh Juices"],
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop"
        ],
        highlight: "50+ Mocktails",
        pricing: "Starting ₹25,000",
        duration: "Full Event Service"
    },
    {
        id: 8,
        slug: "guest-hospitality",
        iconName: "users",
        title: "Guest Hospitality",
        shortDesc: "VIP treatment for every guest",
        description: "We ensure every guest feels special from arrival to departure. Our hospitality team handles welcome services, accommodation coordination, and personalized guest experiences.",
        fullDescription: "At Royal Grandeur, we believe every guest deserves VIP treatment. Our dedicated hospitality team ensures seamless guest experiences from the moment they receive your invitation to their departure after the celebration. We coordinate hotel bookings at preferential rates, arrange airport pickups, provide welcome kits, and ensure dietary preferences are noted and accommodated. On the event day, our team manages guest registration, seating, and any special requirements.",
        features: ["Welcome Ceremonies", "Guest Coordination", "Hotel Bookings", "Transportation", "Welcome Kits", "Concierge Service", "Elderly Care", "Kids Zone", "First Aid", "24/7 Helpline"],
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1529543544277-06f615cb9b24?w=600&h=400&fit=crop"
        ],
        highlight: "24/7 Support",
        pricing: "Starting ₹20,000",
        duration: "Multi-Day Support"
    },
    {
        id: 9,
        slug: "valet-transport",
        iconName: "car",
        title: "Valet & Transport",
        shortDesc: "Hassle-free parking & transfers",
        description: "Our professional valet service ensures seamless parking management. We also arrange luxury car rentals, vintage vehicles for the couple, and guest transportation.",
        fullDescription: "Arrive in style and let us handle the logistics. Our valet service ensures smooth parking for all your guests, with trained attendants managing vehicles with utmost care. For the couple, we offer a stunning collection of vintage cars, luxury sedans, and decorated vehicles. Guest transportation can be arranged with AC buses, tempo travelers, or individual cabs. We also provide airport transfer services and city tour arrangements for outstation guests.",
        features: ["Valet Parking", "Luxury Car Rentals", "Vintage Cars", "Guest Bus Service", "Airport Transfers", "Decorated Vehicles", "Security Personnel", "Parking Management", "GPS Tracking", "Driver Services"],
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop"
        ],
        highlight: "100+ Parking Spots",
        pricing: "Starting ₹15,000",
        duration: "Full Event Coverage"
    },
    {
        id: 10,
        slug: "invitations-stationery",
        iconName: "palette",
        title: "Invitations & Stationery",
        shortDesc: "Elegant wedding stationery",
        description: "Set the tone for your celebration with beautifully crafted invitations. From traditional cards to digital invites, we offer complete stationery solutions matching your theme.",
        fullDescription: "First impressions matter, and your invitation sets the tone for your celebration. Our design team creates stunning invitation suites that reflect your personality and event theme. Choose from traditional Indian card designs with intricate patterns, modern minimalist styles, or luxurious box invitations with sweets and gifts. We also offer complete digital solutions including animated e-invites, wedding websites, and social media graphics. All stationery items like menu cards, table numbers, and thank you cards can be designed to match.",
        features: ["Custom Designs", "Digital Invites", "Box Invitations", "Thank You Cards", "Menu Cards", "Theme Matching", "Save the Dates", "Wedding Website", "RSVP Management", "Envelope Printing"],
        image: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=1200&h=800&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1528475563668-e15742001b92?w=600&h=400&fit=crop"
        ],
        highlight: "Custom Designs",
        pricing: "Starting ₹10,000",
        duration: "2-4 Weeks Delivery"
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map(service => service.slug);
}
