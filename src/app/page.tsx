import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Alba Banquet Hall Patna | #1 Luxury Wedding Venue & Event Hall in Bihar",
    description: "Alba Banquet Hall: Patna's premier AC venue for weddings & corporate events in Phulwari Sharif. 50-1000+ guest capacity, premium catering & decor. Book now!",
    keywords: [
        // High-volume primary keywords
        "banquet hall patna",
        "wedding venue patna",
        "marriage hall patna",
        "best banquet hall in patna",
        "luxury wedding venue patna",
        // Location-specific
        "banquet hall phulwari sharif",
        "wedding hall patna city",
        "alba banquet hall patna",
        "banquet near patna",
        // Event-specific
        "reception hall patna",
        "engagement venue patna",
        "corporate event venue patna",
        "birthday party hall patna",
        "sangeet venue patna",
        "mehndi hall patna",
        // Service keywords
        "wedding catering patna",
        "wedding decoration patna",
        "ac banquet hall patna",
        // Long-tail
        "best wedding venue in patna with price",
        "top 10 banquet halls in patna",
        "alba banquet patna booking",
        "premium wedding venue patna bihar",
    ],
    alternates: {
        canonical: "https://albacatering.com",
    },
    openGraph: {
        title: "Alba Banquet Hall Patna | #1 Wedding & Event Venue in Bihar",
        description: "Patna's most prestigious venue for weddings & events. Premium halls for 50-1000+ guests. ⭐ Top Rated | Book your dream celebration!",
        url: "https://albacatering.com",
        siteName: "Alba Banquet Hall",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Alba Banquet Hall - Luxury Wedding Venue Patna",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Alba Banquet Hall Patna | Best Wedding Venue",
        description: "Patna's #1 luxury wedding venue. Book now! ⭐ Top Rated",
        images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80"],
    },
};

export default function Home() {
    return <HomeClient />;
}
