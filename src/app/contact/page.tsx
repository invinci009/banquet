import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Book Alba Banquet Hall Patna",
    description: "Contact Alba Banquet Hall for wedding & event catering bookings. Located in Phulwari Sharif, Patna. Call +91-9234953085 for inquiries & quotes. Open 7 days a week!",
    keywords: [
        "contact Alba Banquet Hall patna",
        "book catering patna",
        "wedding catering booking patna",
        "caterers phone number patna",
        "event catering booking patna",
        "Alba Banquet Hall address",
        "catering service booking patna",
        "caterers phulwari sharif",
    ],
    alternates: {
        canonical: "https://albacatering.com/contact",
    },
    openGraph: {
        title: "Contact & Book Alba Banquet Hall Patna",
        description: "Ready to plan your event? Contact us at +91-9234953085. Visit us in Phulwari Sharif, Patna or fill out our booking form.",
        url: "https://albacatering.com/contact",
        type: "website",
        images: [
            {
                url: "https://albacatering.com/logo.png",
                width: 512,
                height: 512,
                alt: "Contact Alba Banquet Hall",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Contact Alba Banquet Hall",
        description: "Book your catering. Call +91-9234953085",
    },
};

// Contact Page Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Alba Banquet Hall",
    "description": "Contact page for catering inquiries and bookings",
    "url": "https://albacatering.com/contact",
    "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Alba Banquet Hall",
        "telephone": "+91-9234953085",
        "email": "albabanquethall123@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alba Colony, Near Alba Masjid, Phulwari Sharif",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800005",
            "addressCountry": "IN",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.5693995,
            "longitude": 85.0734818,
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00",
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9234953085",
            "contactType": "reservations",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"],
        },
    },
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContactClient />
        </>
    );
}
