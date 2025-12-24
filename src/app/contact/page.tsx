import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Book Royal Grandeur Banquet Hall Patna",
    description: "Contact Royal Grandeur Banquet Hall for wedding & event bookings. Located near Gandhi Maidan, Patna. Call +91-6205708606 for inquiries, venue tours & quotes. Open 7 days a week!",
    keywords: [
        "contact royal grandeur patna",
        "book banquet hall patna",
        "wedding venue booking patna",
        "banquet hall phone number patna",
        "event booking patna",
        "royal grandeur address",
        "marriage hall booking patna",
        "banquet hall gandhi maidan",
    ],
    alternates: {
        canonical: "https://royalgrandeurpatna.com/contact",
    },
    openGraph: {
        title: "Contact & Book Royal Grandeur Banquet Hall Patna",
        description: "Ready to plan your event? Contact us at +91-6205708606. Visit our venue near Gandhi Maidan, Patna or fill out our booking form.",
        url: "https://royalgrandeurpatna.com/contact",
        type: "website",
        images: [
            {
                url: "https://royalgrandeurpatna.com/logo.png",
                width: 512,
                height: 512,
                alt: "Contact Royal Grandeur",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Contact Royal Grandeur Banquet Hall",
        description: "Book your dream venue. Call +91-6205708606",
    },
};

// Contact Page Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Royal Grandeur Banquet Hall",
    "description": "Contact page for booking inquiries and venue tours",
    "url": "https://royalgrandeurpatna.com/contact",
    "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Royal Grandeur Banquet Hall",
        "telephone": "+91-6205708606",
        "email": "info@royalgrandeur.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Gandhi Maidan",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800001",
            "addressCountry": "IN",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.6080,
            "longitude": 85.1380,
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00",
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-6205708606",
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
