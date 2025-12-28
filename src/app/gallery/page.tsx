import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
    title: "Photo Gallery | Wedding & Event Photos at Alba Banquet Hall Patna",
    description: "Browse stunning photos of weddings, receptions, sangeet, mehndi & corporate events hosted at Alba Banquet Hall Patna. See our luxurious halls, beautiful decorations, and happy celebrations. 500+ events captured!",
    keywords: [
        "wedding photos patna",
        "banquet hall gallery",
        "alba banquet photos",
        "wedding venue photos patna",
        "reception hall images",
        "wedding decoration photos patna",
        "event photos patna bihar",
        "marriage hall photos patna",
    ],
    alternates: {
        canonical: "https://albacatering.com/gallery",
    },
    openGraph: {
        title: "Photo Gallery - Alba Banquet Hall Patna",
        description: "Browse through our collection of beautiful moments. From grand weddings to intimate gatherings, see why we are Patna's favorite venue.",
        url: "https://albacatering.com/gallery",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Alba Banquet Wedding Gallery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Photo Gallery | Alba Banquet Hall",
        description: "See beautiful weddings and events hosted at Patna's finest venue",
    },
};

// Gallery Page Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Alba Banquet Photo Gallery",
    "description": "Collection of wedding, reception, and event photos from Alba Banquet Hall Patna",
    "url": "https://albacatering.com/gallery",
    "publisher": {
        "@type": "Organization",
        "name": "Alba Banquet Hall",
        "url": "https://albacatering.com",
    },
    "about": {
        "@type": "EventVenue",
        "name": "Alba Banquet Hall",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alba Colony, Near Alba Masjid, Phulwari Sharif",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800005",
            "addressCountry": "IN",
        },
    },
};

export default function GalleryPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <GalleryClient />
        </>
    );
}
