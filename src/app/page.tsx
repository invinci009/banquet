import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Royal Grandeur Banquet Hall Patna | #1 Luxury Wedding Venue & Marriage Hall in Bihar",
    description: "Royal Grandeur is Patna's most prestigious banquet hall near Gandhi Maidan. Perfect for weddings, receptions, engagements & corporate events. AC halls for 50-1000+ guests with premium catering, stunning decor & valet parking. ⭐ 4.9 Rating | 500+ Events | Book today!",
    keywords: [
        // High-volume primary keywords
        "banquet hall patna",
        "wedding venue patna",
        "marriage hall patna",
        "best banquet hall in patna",
        "luxury wedding venue patna",
        // Location-specific
        "banquet hall near gandhi maidan",
        "wedding hall patna city",
        "marriage hall boring road patna",
        "banquet near patna junction",
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
        "royal grandeur patna booking",
        "5 star wedding venue patna bihar",
    ],
    alternates: {
        canonical: "https://royalgrandeurpatna.com",
    },
    openGraph: {
        title: "Royal Grandeur Banquet Hall Patna | #1 Wedding & Event Venue in Bihar",
        description: "Patna's most prestigious venue for weddings & events. Premium halls for 50-1000+ guests. ⭐ 4.9 Rating | Book your dream celebration!",
        url: "https://royalgrandeurpatna.com",
        siteName: "Royal Grandeur Banquet Hall",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Royal Grandeur Banquet Hall - Luxury Wedding Venue Patna",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Royal Grandeur Banquet Hall Patna | Best Wedding Venue",
        description: "Patna's #1 luxury wedding venue. Book now! ⭐ 4.9 Rating",
        images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80"],
    },
};

export default function Home() {
    return <HomeClient />;
}
