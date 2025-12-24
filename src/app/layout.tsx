import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

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
        default: "Royal Grandeur Banquet Hall Patna | #1 Luxury Wedding Venue & Marriage Hall in Bihar",
        template: "%s | Royal Grandeur Patna - Best Banquet Hall",
    },
    description: "Royal Grandeur is Patna's premier luxury banquet hall near Gandhi Maidan. Perfect for weddings, receptions, engagements & corporate events. AC halls for 50-1000+ guests with in-house catering, stunning decor, valet parking & dedicated event planners. ⭐ 4.9 Rating | 500+ Events | Book your dream venue today!",
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
    authors: [{ name: "Royal Grandeur Banquet Hall", url: "https://royalgrandeurpatna.com" }],
    creator: "Royal Grandeur",
    publisher: "Royal Grandeur Banquet Hall",
    metadataBase: new URL("https://royalgrandeurpatna.com"),
    alternates: {
        canonical: "https://royalgrandeurpatna.com",
        languages: {
            "en-IN": "https://royalgrandeurpatna.com",
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
        title: "Royal Grandeur Banquet Hall Patna | #1 Luxury Wedding & Event Venue in Bihar",
        description: "Patna's most prestigious banquet hall for weddings, receptions & events. AC halls for 50-1000+ guests | Premium Catering | Stunning Decor | Valet Parking | ⭐ 4.9 Rating",
        url: "https://royalgrandeurpatna.com",
        siteName: "Royal Grandeur Banquet Hall Patna",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Royal Grandeur Banquet Hall - Luxury Wedding Venue in Patna",
                type: "image/jpeg",
            },
            {
                url: "/logo.png",
                width: 512,
                height: 512,
                alt: "Royal Grandeur Logo",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Royal Grandeur Banquet Hall Patna | Best Wedding Venue in Bihar",
        description: "Patna's premier luxury banquet hall for weddings & events. AC halls, catering, decor & parking. ⭐ 4.9 Rating | Book now!",
        images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80"],
        creator: "@royalgrandeurpatna",
        site: "@royalgrandeurpatna",
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
    category: "Event Venue",
    classification: "Business",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    other: {
        "geo.region": "IN-BR",
        "geo.placename": "Patna",
        "geo.position": "25.6080;85.1380",
        "ICBM": "25.6080, 85.1380",
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
            "@id": "https://royalgrandeurpatna.com/#organization",
            "name": "Royal Grandeur Banquet Hall",
            "url": "https://royalgrandeurpatna.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://royalgrandeurpatna.com/logo.png",
                "width": 512,
                "height": 512,
            },
            "image": "https://royalgrandeurpatna.com/logo.png",
            "description": "Patna's premier luxury banquet hall for weddings, receptions, and corporate events.",
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
            "sameAs": [
                "https://www.facebook.com/royalgrandeurpatna",
                "https://www.instagram.com/royalgrandeurpatna",
                "https://www.youtube.com/@royalgrandeurpatna",
            ],
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-6205708606",
                    "contactType": "reservations",
                    "areaServed": ["IN"],
                    "availableLanguage": ["en", "hi"],
                },
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-6205708606",
                    "contactType": "customer service",
                    "areaServed": ["IN"],
                    "availableLanguage": ["en", "hi"],
                },
            ],
        },
        // LocalBusiness Schema (Important for Local SEO)
        {
            "@type": "LocalBusiness",
            "@id": "https://royalgrandeurpatna.com/#localbusiness",
            "name": "Royal Grandeur Banquet Hall",
            "image": [
                "https://royalgrandeurpatna.com/logo.png",
                "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
            ],
            "description": "Royal Grandeur is Patna's most prestigious banquet hall offering luxury wedding venues, reception halls, and corporate event spaces with world-class amenities.",
            "@type": ["LocalBusiness", "EventVenue", "WeddingVenue"],
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
            "url": "https://royalgrandeurpatna.com",
            "telephone": "+91-6205708606",
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
                "ratingValue": "4.9",
                "reviewCount": "347",
                "bestRating": "5",
                "worstRating": "1",
            },
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
            "@id": "https://royalgrandeurpatna.com/#website",
            "url": "https://royalgrandeurpatna.com",
            "name": "Royal Grandeur Banquet Hall Patna",
            "description": "Patna's premier luxury wedding venue and banquet hall",
            "publisher": {
                "@id": "https://royalgrandeurpatna.com/#organization",
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://royalgrandeurpatna.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
            },
            "inLanguage": "en-IN",
        },
        // WebPage Schema
        {
            "@type": "WebPage",
            "@id": "https://royalgrandeurpatna.com/#webpage",
            "url": "https://royalgrandeurpatna.com",
            "name": "Royal Grandeur Banquet Hall Patna | #1 Luxury Wedding Venue in Bihar",
            "isPartOf": {
                "@id": "https://royalgrandeurpatna.com/#website",
            },
            "about": {
                "@id": "https://royalgrandeurpatna.com/#localbusiness",
            },
            "description": "Book Patna's most prestigious banquet hall for your wedding, reception, or corporate event. Premium amenities, world-class service.",
            "breadcrumb": {
                "@id": "https://royalgrandeurpatna.com/#breadcrumb",
            },
            "inLanguage": "en-IN",
            "potentialAction": [
                {
                    "@type": "ReadAction",
                    "target": ["https://royalgrandeurpatna.com"],
                },
            ],
        },
        // BreadcrumbList Schema
        {
            "@type": "BreadcrumbList",
            "@id": "https://royalgrandeurpatna.com/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://royalgrandeurpatna.com",
                },
            ],
        },
        // FAQPage Schema
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the capacity of Royal Grandeur Banquet Hall?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Royal Grandeur offers multiple halls with capacities ranging from 50 to 1000+ guests. We have intimate spaces for small gatherings and grand ballrooms for large weddings and events.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What services are included in wedding packages?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our wedding packages include venue decoration, catering services with customizable menus, lighting and sound systems, valet parking, dedicated event coordinators, and complimentary bridal suite.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How do I book Royal Grandeur for my event?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can book by calling us at +91-6205708606, sending a WhatsApp message, or filling out the contact form on our website. We recommend booking 3-6 months in advance for peak wedding season.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What is the location of Royal Grandeur Banquet Hall?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Royal Grandeur is conveniently located near Gandhi Maidan in Patna, Bihar. We are easily accessible from Patna Junction and have ample parking space for guests.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Do you provide catering services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we have an in-house catering team that offers a wide variety of cuisines including North Indian, South Indian, Chinese, Continental, and live counters. Custom menus are available.",
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
                <meta name="author" content="Royal Grandeur Banquet Hall" />
                <meta name="copyright" content="Royal Grandeur Banquet Hall" />
                <meta name="language" content="English" />
                <meta name="target" content="all" />
                <meta name="audience" content="all" />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="rating" content="General" />
                <meta name="revisit-after" content="7 days" />
                <meta name="subject" content="Wedding Venue, Banquet Hall, Event Space in Patna Bihar" />
                <meta name="topic" content="Wedding and Event Venue Services" />
                <meta name="summary" content="Royal Grandeur - Patna's premier luxury banquet hall for weddings, receptions, and events" />
                <meta name="Classification" content="Business" />
                <meta name="designer" content="Ignius Studios" />
                <meta name="owner" content="Royal Grandeur" />
                <meta name="url" content="https://royalgrandeurpatna.com" />
                <meta name="identifier-URL" content="https://royalgrandeurpatna.com" />
                <meta name="pagename" content="Royal Grandeur Banquet Hall Patna" />
                <meta name="HandheldFriendly" content="True" />
                <meta name="MobileOptimized" content="320" />

                {/* Geo Tags for Local SEO */}
                <meta name="geo.region" content="IN-BR" />
                <meta name="geo.placename" content="Patna, Bihar, India" />
                <meta name="geo.position" content="25.6080;85.1380" />
                <meta name="ICBM" content="25.6080, 85.1380" />

                {/* Dublin Core Metadata */}
                <meta name="DC.title" content="Royal Grandeur Banquet Hall Patna" />
                <meta name="DC.creator" content="Royal Grandeur" />
                <meta name="DC.subject" content="Wedding Venue, Banquet Hall, Event Space" />
                <meta name="DC.description" content="Patna's premier luxury banquet hall for weddings and events" />
                <meta name="DC.publisher" content="Royal Grandeur" />
                <meta name="DC.type" content="Service" />
                <meta name="DC.format" content="text/html" />
                <meta name="DC.language" content="en-IN" />
            </head>
            <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-champagne-50 text-navy-800 antialiased overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
