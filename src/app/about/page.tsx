import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | Alba Banquet Hall Patna",
    description: "Learn about Alba Banquet Hall - Patna's premier venue in Phulwari Sharif with 10+ years of excellence. Our journey, values, and commitment to creating unforgettable celebrations.",
    alternates: {
        canonical: "https://albacatering.com/about",
    },
    keywords: [
        "about alba banquet hall",
        "best banquet hall history patna",
        "luxury wedding venue story",
        "trusted catering service patna",
        "banquet hall management patna",
    ],
    openGraph: {
        title: "About Alba Banquet Hall",
        description: "10+ years of creating magical celebrations in Patna. Discover our story, values, and what makes us Bihar's most trusted event venue.",
    },
};

// About Page Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Alba Banquet Hall",
    "description": "Information about Alba Banquet Hall, Patna's premier wedding and event venue.",
    "url": "https://albacatering.com/about",
    "mainEntity": {
        "@type": "Organization",
        "name": "Alba Banquet Hall",
        "foundingDate": "2015",
        "url": "https://albacatering.com",
        "location": {
            "@type": "Place",
            "name": "Alba Banquet Hall",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alba Colony, Near Alba Masjid, Phulwari Sharif",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800005",
                "addressCountry": "IN",
            }
        }
    }
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutClient />
        </>
    );
}
