import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Premium Catering Services in Patna | Alba Banquet Hall",
    description: "Experience exceptional catering services at Alba Banquet Hall, Patna. Wedding Catering, Corporate Catering, Buffet, Dinner, Snack & Personal Catering. Be a Guest on Your Party! Call: +91-9234953085",
    keywords: [
        "catering services patna",
        "wedding catering patna",
        "corporate catering patna",
        "buffet catering patna",
        "dinner catering patna",
        "snack catering patna",
        "personal catering patna",
        "party catering patna",
        "event catering bihar",
        "best caterers patna",
        "catering near me",
        "wedding caterers bihar",
        "corporate event catering",
        "birthday party catering"
    ],
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Premium Catering Services | Alba Banquet Hall Patna",
        description: "Transform your celebrations with our comprehensive catering services. From intimate gatherings to grand weddings, we deliver perfection in every dish.",
        type: "website",
        images: [
            {
                url: "/gallery/catering-service.webp",
                width: 1200,
                height: 630,
                alt: "Alba Banquet Hall Premium Catering Services in Patna"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Premium Catering Services | Alba Banquet Hall",
        description: "Wedding, Corporate, Buffet, Dinner & Snack Catering in Patna. Be a Guest on Your Party!",
        images: ["/gallery/catering-service.webp"],
        creator: "@albacatering",
        site: "@albacatering",
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
    "name": "Alba Banquet Hall",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Alba Banquet Hall",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alba Colony, Near Alba Masjid, Phulwari Sharif",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800005",
            "addressCountry": "IN"
        },
        "telephone": "+91-9234953085"
    },
    "serviceType": [
        "Wedding Catering",
        "Corporate Catering",
        "Buffet Catering",
        "Dinner Catering",
        "Snack Catering",
        "Personal Catering"
    ],
    "areaServed": {
        "@type": "City",
        "name": "Patna"
    },
    "description": "Comprehensive catering services including wedding catering, corporate catering, buffet, dinner, snack, and personal catering.",
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
