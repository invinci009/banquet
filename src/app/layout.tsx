import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
    title: {
        default: "Alba Banquet Hall Patna | #1 Premium Catering Service in Bihar",
        template: "%s | Alba Banquet Hall - Best Caterers in Patna",
    },
    description: "Alba Banquet Hall - Patna's premier catering company for weddings, corporate events & parties. Be a Guest on Your Party! Wedding Catering, Corporate Catering, Buffet, Dinner & Snack Catering. ⭐ Top Rated | Book now: +91-9234953085",
    keywords: [
        // Primary Keywords - High Intent
        "banquet hall in patna",
        "wedding venue patna",
        "marriage hall patna",
        "best banquet hall patna",
        "luxury wedding hall patna",
        "wedding banquet patna",
        // Location-Based Keywords
        "banquet hall near gandhi maidan patna",
        "wedding venue near me patna",
        "marriage hall in patna bihar",
        "banquet hall patna city",
        "wedding hall boring road patna",
        "banquet near patna junction",
        // Event-Specific Keywords
        "reception hall patna",
        "engagement venue patna",
        "corporate event venue patna",
        "birthday party hall patna",
        "anniversary celebration venue patna",
        "mehndi ceremony hall patna",
        "sangeet function hall patna",
        // Service Keywords
        "wedding catering patna",
        "wedding decoration patna",
        "ac banquet hall patna",
        "banquet with parking patna",
        "affordable wedding venue patna",
        "premium banquet hall bihar",
        // Long-tail Keywords
        "best wedding venue in patna with price",
        "top 10 banquet halls in patna",
        "royal banquet hall patna booking",
        "5 star wedding venue patna",
        "grand wedding hall patna bihar",
        // Hindi Transliteration Keywords
        "shadi ka hall patna",
        "vivah sthal patna",
        "banquet hall patna price",
    ],
    authors: [{ name: "Alba Banquet Hall", url: "https://albacatering.com" }],
    creator: "Alba Banquet Hall",
    publisher: "Alba Banquet Hall",
    metadataBase: new URL("https://albacatering.com"),
    alternates: {
        canonical: "https://albacatering.com",
        languages: {
            "en-IN": "https://albacatering.com",
        },
    },
    icons: {
        icon: [
            { url: "/logo.png", sizes: "32x32", type: "image/png" },
            { url: "/logo.png", sizes: "192x192", type: "image/png" },
        ],
        shortcut: "/logo.png",
        apple: [
            { url: "/logo.png", sizes: "180x180", type: "image/png" },
        ],
    },
    openGraph: {
        title: "Alba Banquet Hall Patna | #1 Premium Catering Service in Bihar",
        description: "Patna's most trusted catering service for weddings, receptions & events. Wedding Catering | Corporate Catering | Buffet | Dinner | Snack Catering | ⭐ Top Rated",
        url: "https://albacatering.com",
        siteName: "Alba Banquet Hall",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Alba Banquet Hall - Premium Catering in Patna",
                type: "image/jpeg",
            },
            {
                url: "/logo.png",
                width: 512,
                height: 512,
                alt: "Alba Banquet Hall Logo",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Alba Banquet Hall Patna | Best Caterers in Bihar",
        description: "Patna's premier catering service for weddings & events. Wedding, Corporate, Buffet & Personal Catering. ⭐ Top Rated | Book now!",
        images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80"],
        creator: "@albacatering",
        site: "@albacatering",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // Add your verification codes here when you get them
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
    },
    category: "Catering Service",
    classification: "Business",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    other: {
        "geo.region": "IN-BR",
        "geo.placename": "Phulwari Sharif, Patna",
        "geo.position": "25.5693995;85.0734818",
        "ICBM": "25.5693995, 85.0734818",
        "revisit-after": "7 days",
        "rating": "General",
        "distribution": "Global",
        "coverage": "Worldwide",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#D4AF37" },
        { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    colorScheme: "light",
};

// Comprehensive Structured Data
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        // Organization Schema
        {
            "@type": "Organization",
            "@id": "https://albacatering.com/#organization",
            "name": "Alba Banquet Hall",
            "url": "https://albacatering.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://albacatering.com/logo.png",
                "width": 512,
                "height": 512,
            },
            "image": "https://albacatering.com/logo.png",
            "description": "Patna's premier catering service for weddings, corporate events, and celebrations.",
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
            "sameAs": [
                "https://www.facebook.com/albabanquethall",
                "https://www.instagram.com/albabanquethall",
                "https://www.youtube.com/@albabanquethall",
                "https://www.justdial.com/Patna/Alba-Banquet-Hall-Alba-Colony-Phulwarisharif/0612PX612-X612-181113174509-G2J3_BZDET",
            ],
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-9234953085",
                    "contactType": "reservations",
                    "areaServed": ["IN"],
                    "availableLanguage": ["en", "hi"],
                },
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-9234953085",
                    "contactType": "customer service",
                    "areaServed": ["IN"],
                    "availableLanguage": ["en", "hi"],
                },
            ],
        },
        // LocalBusiness Schema (Important for Local SEO)
        {
            "@type": ["LocalBusiness", "EventVenue", "WeddingVenue", "CateringService"],
            "@id": "https://albacatering.com/#localbusiness",
            "name": "Alba Banquet Hall",
            "image": [
                "https://albacatering.com/logo.png",
                "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
            ],
            "description": "Alba Banquet Hall - Patna's most trusted catering company offering wedding catering, corporate catering, buffet, dinner, and snack catering services.",
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
            "url": "https://albacatering.com",
            "telephone": "+91-9234953085",
            "priceRange": "₹₹₹",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "09:00",
                    "closes": "22:00",
                },
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.2",
                "reviewCount": "124",
                "bestRating": "5",
                "worstRating": "1",
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Changing Rooms", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Outdoor Lawn", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Catering", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Decoration", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "DJ & Sound System", "value": true },
            ],
            "maximumAttendeeCapacity": 3000,
            "isAccessibleForFree": false,
            "publicAccess": true,
            "smokingAllowed": false,
            "foundingDate": "2012",
            "founder": {
                "@type": "Person",
                "name": "Alba Family",
            },
            "slogan": "Be a Guest on Your Party!",
            "keywords": "banquet hall, wedding venue, marriage hall, patna wedding, reception hall, event venue",
            "review": [
                {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Priya Sharma",
                    },
                    "reviewBody": "Absolutely stunning venue! Our wedding was magical. The staff was incredibly professional and the food was delicious.",
                },
                {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Rahul Kumar",
                    },
                    "reviewBody": "Best banquet hall in Patna. Great ambiance, excellent service, and reasonable pricing. Highly recommended!",
                },
            ],
            "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 25.6080,
                    "longitude": 85.1380,
                },
                "geoRadius": "50000",
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wedding & Event Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Wedding Ceremony",
                            "description": "Complete wedding ceremony arrangements with decoration, catering, and entertainment.",
                        },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Reception Party",
                            "description": "Grand reception parties with customizable packages.",
                        },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Corporate Events",
                            "description": "Professional corporate event hosting with full AV support.",
                        },
                    },
                ],
            },
        },
        // WebSite Schema
        {
            "@type": "WebSite",
            "@id": "https://albacatering.com/#website",
            "url": "https://albacatering.com",
            "name": "Alba Banquet Hall Patna",
            "description": "Patna's premier catering service for weddings and events",
            "publisher": {
                "@id": "https://albacatering.com/#organization",
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://albacatering.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
            },
            "inLanguage": "en-IN",
        },
        // WebPage Schema
        {
            "@type": "WebPage",
            "@id": "https://albacatering.com/#webpage",
            "url": "https://albacatering.com",
            "name": "Alba Banquet Hall Patna | #1 Premium Catering Service in Bihar",
            "isPartOf": {
                "@id": "https://albacatering.com/#website",
            },
            "about": {
                "@id": "https://albacatering.com/#localbusiness",
            },
            "description": "Book Patna's most trusted catering service for your wedding, reception, or corporate event. Premium food, world-class service.",
            "breadcrumb": {
                "@id": "https://albacatering.com/#breadcrumb",
            },
            "inLanguage": "en-IN",
            "potentialAction": [
                {
                    "@type": "ReadAction",
                    "target": ["https://albacatering.com"],
                },
            ],
        },
        // BreadcrumbList Schema
        {
            "@type": "BreadcrumbList",
            "@id": "https://albacatering.com/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://albacatering.com",
                },
            ],
        },
        // FAQPage Schema
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What catering services does Alba Banquet Hall offer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Alba Banquet Hall offers Wedding Catering, Corporate Catering, Buffet Catering, Dinner Catering, Snack Catering, and Personal Catering for events of all sizes.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What cuisines are available?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We offer a wide variety of cuisines including North Indian, South Indian, Chinese, Continental, Mughlai, and live counters. Custom menus are available based on your preferences.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How do I book Alba Banquet Hall for my event?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can book by calling us at +91-9234953085, sending a WhatsApp message, or filling out the contact form on our website. We recommend booking 2-4 weeks in advance for large events.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What is the location of Alba Banquet Hall?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Alba Banquet Hall is located at Alba Colony, Near Alba Masjid, Phulwari Sharif, Patna - 05, Bihar. We provide catering services across Patna and surrounding areas.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Do you provide catering for small gatherings?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we provide catering for events of all sizes - from intimate family gatherings to large weddings with 1000+ guests. Our personal catering service is perfect for small events.",
                    },
                },
            ],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-IN" className="scroll-smooth" dir="ltr">
            <head>
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://lh3.googleusercontent.com" />
                <link rel="preconnect" href="https://images.unsplash.com" />
                <link rel="preconnect" href="https://images.pexels.com" />

                {/* DNS Prefetch */}
                <link rel="dns-prefetch" href="https://api.web3forms.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

                {/* Preload critical fonts */}
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
                    as="style"
                />

                {/* Comprehensive Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />

                {/* Additional SEO Meta Tags */}
                <meta name="author" content="Alba Banquet Hall" />
                <meta name="copyright" content="Alba Banquet Hall" />
                <meta name="language" content="English" />
                <meta name="target" content="all" />
                <meta name="audience" content="all" />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="rating" content="General" />
                <meta name="revisit-after" content="7 days" />
                <meta name="subject" content="Catering Services, Wedding Catering, Event Catering in Patna Bihar" />
                <meta name="topic" content="Catering and Event Services" />
                <meta name="summary" content="Alba Banquet Hall - Patna's premier catering company for weddings, corporate events, and celebrations" />
                <meta name="Classification" content="Business" />
                <meta name="designer" content="Ignius Studios" />
                <meta name="owner" content="Alba Banquet Hall" />
                <meta name="url" content="https://albacatering.com" />
                <meta name="identifier-URL" content="https://albacatering.com" />
                <meta name="pagename" content="Alba Banquet Hall Patna" />
                <meta name="HandheldFriendly" content="True" />
                <meta name="MobileOptimized" content="320" />

                {/* Geo Tags for Local SEO */}
                <meta name="geo.region" content="IN-BR" />
                <meta name="geo.placename" content="Patna, Bihar, India" />
                <meta name="geo.position" content="25.5693995;85.0734818" />
                <meta name="ICBM" content="25.5693995, 85.0734818" />

                {/* Dublin Core Metadata */}
                <meta name="DC.title" content="Alba Banquet Hall Patna" />
                <meta name="DC.creator" content="Alba Banquet Hall" />
                <meta name="DC.subject" content="Catering Services, Wedding Catering, Event Catering" />
                <meta name="DC.description" content="Patna's premier catering service for weddings and events" />
                <meta name="DC.publisher" content="Alba Banquet Hall" />
                <meta name="DC.type" content="Service" />
                <meta name="DC.format" content="text/html" />
                <meta name="DC.language" content="en-IN" />
            </head>
            <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-champagne-50 text-navy-800 antialiased overflow-x-hidden`}>
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
