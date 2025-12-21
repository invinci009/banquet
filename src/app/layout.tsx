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

export const metadata: Metadata = {
    title: {
        default: "Royal Grandeur Banquet Hall Patna | Luxury Wedding Venue & Marriage Hall in Bihar",
        template: "%s | Royal Grandeur Patna",
    },
    description: "Top banquet hall in Patna near Gandhi Maidan for grand weddings, receptions & events. AC halls for 50-800 guests, catering, decor & parking. Book your dream venue today!",
    keywords: ["Banquet Hall Patna", "Wedding Venue Patna", "Marriage Hall Patna", "Best Banquet in Patna", "Luxury Wedding Hall Bihar", "Event Venue Patna", "Royal Grandeur Patna", "Corporate Event Venue Patna", "Party Hall Patna"],
    authors: [{ name: "Royal Grandeur" }],
    creator: "Royal Grandeur",
    publisher: "Royal Grandeur",
    metadataBase: new URL("https://royalgrandeurpatna.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Royal Grandeur Banquet Hall Patna | Luxury Wedding Venue & Marriage Hall in Bihar",
        description: "Top banquet hall in Patna near Gandhi Maidan for grand weddings, receptions & events. AC halls for 50-800 guests, catering, decor & parking. Book your dream venue today!",
        url: "https://royalgrandeurpatna.com",
        siteName: "Royal Grandeur Banquet Hall",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519167758481-83f5a5d4aa0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
                width: 1200,
                height: 630,
                alt: "Royal Grandeur Luxury Banquet Hall Patna",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Royal Grandeur Banquet Hall Patna",
        description: "Top banquet hall in Patna near Gandhi Maidan for grand weddings, receptions & events.",
        images: ["https://images.unsplash.com/photo-1519167758481-83f5a5d4aa0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Event Venue",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#D4AF37" },
        { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://lh3.googleusercontent.com" />

                {/* DNS Prefetch */}
                <link rel="dns-prefetch" href="https://api.web3forms.com" />

                {/* Preload critical fonts */}
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
                    as="style"
                />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EventVenue",
                            "name": "Royal Grandeur Banquet Hall",
                            "image": [
                                "https://images.unsplash.com/photo-1519167758481-83f5a5d4aa0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
                                "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                            ],
                            "description": "Top banquet hall in Patna near Gandhi Maidan for grand weddings, receptions & events. AC halls for 50-800 guests, catering, decor & parking.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "123 Exhibition Road, Near Gandhi Maidan",
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
                            "telephone": "+916205708606",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    "opens": "09:00",
                                    "closes": "21:00",
                                },
                            ],
                            "menu": "https://royalgrandeurpatna.com/services",
                            "acceptsReservations": "True",
                            "priceRange": "₹₹₹",
                            "paymentAccepted": "Cash, Credit Card, UPI",
                        }),
                    }}
                />
            </head>
            <body className="min-h-screen bg-champagne-50 text-navy-800 antialiased overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
