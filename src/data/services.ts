import {
    Utensils,
    Users,
    UtensilsCrossed,
    Salad,
    Coffee,
    Heart,
    LucideIcon
} from "lucide-react";

export type IconName = "utensils" | "users" | "utensils-crossed" | "salad" | "coffee" | "heart";

export const iconMap: Record<IconName, LucideIcon> = {
    "utensils": Utensils,
    "users": Users,
    "utensils-crossed": UtensilsCrossed,
    "salad": Salad,
    "coffee": Coffee,
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
        slug: "wedding-catering",
        iconName: "heart",
        title: "Wedding Catering",
        shortDesc: "Delicious food for your special day",
        description: "Celebrate your wedding with a feast your guests will love. We offer a wide range of traditional and modern dishes, prepared with care and served with style.",
        fullDescription: "At Alba Banquet Hall, we know how important your wedding food is. Our team creates delicious menus that suit your celebration perfectly. From traditional Bihari and North Indian favorites to international cuisines, we ensure every dish is fresh and flavorful. Our wedding catering packages are flexible, allowing you to choose exactly what fits your taste and budget.",
        features: ["Customized Wedding Menus", "Live Food Counters", "Traditional & Modern Cuisine", "Professional Service Staff", "Elegant Presentation", "Welcome Drinks", "Dessert Stations", "Chaat Corner", "Midnight Snacks", "Diet-Specific Options"],
        image: "/gallery/wedding-stage-roses.webp",
        galleryImages: [
            "/gallery/wedding-stage-roses.webp",
            "/gallery/haldi-stage.webp",
            "/gallery/entrance-decor.webp",
            "/gallery/floral-gate.webp"
        ],
        highlight: "500+ Menu Options",
        pricing: "Veg ₹600 | Non-veg ₹900 per person",
        duration: "Full Event Coverage"
    },
    {
        id: 2,
        slug: "corporate-catering",
        iconName: "users",
        title: "Corporate Catering",
        shortDesc: "Professional catering for business events",
        description: "Professional catering solutions for business meetings, conferences, and corporate events. Impress your clients and colleagues with our premium corporate catering services.",
        fullDescription: "Alba Banquet Hall offers professional corporate catering that elevates your business events. Whether it's a board meeting, product launch, annual conference, or office party, we deliver impeccable food service that reflects your company's standards. Our corporate packages include everything from executive lunch boxes to elaborate buffet setups. We understand the importance of punctuality and presentation in the corporate world, and our team ensures seamless service every time.",
        features: ["Business Lunch Packages", "Conference Catering", "Office Party Menus", "On-Time Delivery", "Executive Box Lunches", "Tea & Coffee Service", "Meeting Snacks", "Branded Packaging", "Dietary Accommodations", "Quick Setup"],
        image: "/gallery/hall-wide-view.webp",
        galleryImages: [
            "/gallery/hall-wide-view.webp",
            "/gallery/indoor-hall.webp",
            "/gallery/hall-seating.webp",
            "/gallery/buffet-staff.webp"
        ],
        highlight: "Timely Delivery",
        pricing: "Veg ₹600 | Non-veg ₹900 per person",
        duration: "Flexible Hours"
    },
    {
        id: 3,
        slug: "buffet-catering",
        iconName: "utensils-crossed",
        title: "Buffet Catering",
        shortDesc: "Grand buffet setups for celebrations",
        description: "Grand buffet setups featuring an extensive variety of dishes. Perfect for large gatherings and celebrations with unlimited servings and live cooking stations.",
        fullDescription: "Our buffet catering is perfect for events where you want to offer a wide variety of choices. We set up an extensive spread of appetizers, main courses, breads, rice, and desserts. With live cooking stations, your guests can enjoy fresh, hot dishes made right in front of them. Our team ensures the buffet looks great and is kept fully stocked throughout your event.",
        features: ["Multi-Cuisine Spread", "Live Cooking Stations", "Elegant Presentation", "Unlimited Servings", "Variety of Options", "Fresh Preparations", "Professional Setup", "Trained Servers", "Quality Ingredients", "Custom Menu Design"],
        image: "/gallery/buffet-service.webp",
        galleryImages: [
            "/gallery/buffet-service.webp",
            "/gallery/food-counter.webp",
            "/gallery/mocktail-counter.webp",
            "/gallery/buffet-staff.webp"
        ],
        highlight: "50+ Dishes",
        pricing: "Veg ₹600 | Non-veg ₹900 per person",
        duration: "Full Event Service"
    },
    {
        id: 4,
        slug: "dinner-catering",
        iconName: "utensils",
        title: "Dinner Catering",
        shortDesc: "Elegant dinner service for special occasions",
        description: "Elegant dinner service for your special occasions. From intimate gatherings to grand celebrations, we offer multi-course dinners with fine dining experience.",
        fullDescription: "Our dinner catering service brings the fine dining experience to your venue. Whether you're hosting an intimate anniversary dinner, a family get-together, or a grand celebration, we create memorable dining experiences with multi-course menus designed to delight. Our dinner service includes starter courses, soup, salads, main courses with choice of proteins and sides, fresh breads, and a selection of desserts. Plated service is available for formal occasions.",
        features: ["Plated Service Available", "Multi-Course Dinners", "Fine Dining Experience", "Specialty Dishes", "Soup & Starters", "Premium Ingredients", "Dessert Selection", "Table Service", "Menu Customization", "Wine Pairing Suggestions"],
        image: "/gallery/hall-seating.webp",
        galleryImages: [
            "/gallery/hall-seating.webp",
            "/gallery/hall-stage-view.webp",
            "/gallery/catering-service.webp",
            "/gallery/indoor-hall.webp"
        ],
        highlight: "Fine Dining",
        pricing: "Veg ₹600 | Non-veg ₹900 per person",
        duration: "Evening Service"
    },
    {
        id: 5,
        slug: "snack-catering",
        iconName: "coffee",
        title: "Snack Catering",
        shortDesc: "Delicious snacks for tea parties & events",
        description: "Delicious snacks and appetizers for tea parties, get-togethers, and casual events. Quality bites that impress your guests every time.",
        fullDescription: "Perfect for tea parties, kitty parties, office events, and casual get-togethers, our snack catering offers a delightful variety of appetizers and finger foods. From crispy samosas and pakoras to innovative fusion bites, we have something for every palate. Our snack packages include both hot and cold options, sweet and savory items, and can be customized based on your preferences. We also offer chai and coffee service to complement your snacks.",
        features: ["Tea Party Snacks", "Appetizer Platters", "Quick Bites Menu", "Customizable Options", "Hot & Cold Snacks", "Sweet & Savory", "Chai & Coffee", "Fresh Preparations", "Hygienic Packaging", "Timely Delivery"],
        image: "/gallery/mocktail-counter.webp",
        galleryImages: [
            "/gallery/mocktail-counter.webp",
            "/gallery/food-counter.webp",
            "/gallery/catering-service.webp",
            "/gallery/buffet-service.webp"
        ],
        highlight: "Fresh & Tasty",
        pricing: "Veg ₹600 | Non-veg ₹900 per person",
        duration: "2-4 Hours"
    },
    {
        id: 6,
        slug: "personal-catering",
        iconName: "salad",
        title: "Personal Catering",
        shortDesc: "Personalized catering for small gatherings",
        description: "Personalized catering for small family gatherings, house parties, and intimate celebrations. Home delivery available with flexible portions.",
        fullDescription: "Our personal catering service is ideal for smaller, intimate gatherings. Whether it's a family dinner, a birthday at home, or a small puja, we bring restaurant-quality food directly to you. You can choose the menu and portion sizes that fit your group, from 10 to 100 guests. We handle the cooking and delivery so you can relax and enjoy time with your family.",
        features: ["Small Batch Cooking", "Home Delivery", "Personalized Menus", "Flexible Portions", "Family Gatherings", "House Parties", "Puja Catering", "Birthday Events", "Fresh Ingredients", "Complete Service"],
        image: "/gallery/lawn-area.webp",
        galleryImages: [
            "/gallery/lawn-area.webp",
            "/gallery/building-exterior.webp",
            "/gallery/entrance-gate.webp",
            "/gallery/night-lawn-view.webp"
        ],
        highlight: "Home Delivery",
        pricing: "Veg ₹600 | Non-veg ₹900 per person",
        duration: "Flexible Timing"
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map(service => service.slug);
}
