import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
    title: "Photo Gallery | Wedding & Event Photos at Royal Grandeur Patna",
    description: "Browse stunning photos of weddings, receptions, sangeet, mehndi & corporate events hosted at Royal Grandeur Banquet Hall Patna. See our luxurious halls, beautiful decorations, and happy celebrations. 500+ events captured!",
    keywords: [
        "wedding photos patna",
        "banquet hall gallery",
        "royal grandeur photos",
        "wedding venue photos patna",
        "reception hall images",
        "wedding decoration photos patna",
        "event photos patna bihar",
        "marriage hall photos patna",
    ],
    alternates: {
        canonical: "https://royalgrandeurpatna.com/gallery",
    },
    openGraph: {
        title: "Photo Gallery - Royal Grandeur Banquet Hall Patna",
        description: "Browse through our collection of beautiful moments. From grand weddings to intimate gatherings, see why we are Patna's favorite venue.",
        url: "https://royalgrandeurpatna.com/gallery",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Royal Grandeur Wedding Gallery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Photo Gallery | Royal Grandeur Banquet Hall",
        description: "See beautiful weddings and events hosted at Patna's finest venue",
    },
};

// Gallery Page Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Royal Grandeur Photo Gallery",
    "description": "Collection of wedding, reception, and event photos from Royal Grandeur Banquet Hall Patna",
    "url": "https://royalgrandeurpatna.com/gallery",
    "publisher": {
        "@type": "Organization",
        "name": "Royal Grandeur Banquet Hall",
        "url": "https://royalgrandeurpatna.com",
    },
    "about": {
        "@type": "EventVenue",
        "name": "Royal Grandeur Banquet Hall",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
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
