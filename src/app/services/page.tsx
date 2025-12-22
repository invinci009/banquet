import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Premium Wedding & Event Services in Patna | Royal Grandeur Banquet",
    description: "Experience luxury event services at Royal Grandeur Banquet Hall, Patna. Expert wedding planning, gourmet catering, exquisite decoration, professional photography, entertainment, and complete event management. 5000+ successful events hosted.",
    keywords: [
        "wedding services patna",
        "banquet hall services",
        "event planning patna",
        "wedding catering patna",
        "wedding decoration patna",
        "wedding photography patna",
        "mehendi ceremony patna",
        "haldi ceremony venue",
        "reception hall patna",
        "party venue patna",
        "corporate event patna",
        "birthday party venue",
        "anniversary celebration",
        "engagement venue patna",
        "luxury wedding patna"
    ],
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Premium Wedding & Event Services | Royal Grandeur Banquet Hall Patna",
        description: "Transform your special day with our comprehensive event services. From intimate celebrations to grand weddings, we deliver perfection in every detail.",
        type: "website",
        images: [
            {
                url: "/images/services-og.jpg",
                width: 1200,
                height: 630,
                alt: "Royal Grandeur Banquet Services"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Premium Wedding & Event Services | Royal Grandeur",
        description: "Luxury wedding planning, catering, decoration & more. 5000+ successful events in Patna."
    },
    robots: {
        index: true,
        follow: true,
    }
};

// JSON-LD Structured Data for Services
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Royal Grandeur Event Services",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Royal Grandeur Banquet Hall",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
        }
    },
    "serviceType": [
        "Wedding Planning",
        "Event Catering",
        "Venue Decoration",
        "Photography Services",
        "Entertainment Services",
        "Corporate Event Management"
    ],
    "areaServed": {
        "@type": "City",
        "name": "Patna"
    },
    "description": "Comprehensive event services including wedding planning, catering, decoration, photography, and entertainment.",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
    }
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicesClient />
        </>
    );
}
