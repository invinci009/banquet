import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Royal Grandeur Banquet Hall | Premium Wedding & Event Venue in Patna",
        template: "%s | Royal Grandeur Banquet Hall",
    },
    description: "Experience luxury and elegance at Royal Grandeur Banquet Hall. Patna's premier destination for weddings, receptions, corporate events & celebrations. 15+ years of excellence, 5000+ events hosted.",
    keywords: ["banquet hall patna", "wedding venue patna", "marriage hall patna", "party hall patna", "corporate event venue", "reception hall", "engagement venue", "birthday party venue", "royal grandeur", "best banquet hall bihar"],
    authors: [{ name: "Royal Grandeur Banquet Hall" }],
    creator: "Royal Grandeur",
    publisher: "Royal Grandeur Banquet Hall",
    metadataBase: new URL("https://royalgrandeur.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Royal Grandeur Banquet Hall | Premium Wedding & Event Venue",
        description: "Patna's premier destination for weddings, receptions, corporate events & unforgettable celebrations. 15+ years of excellence.",
        url: "https://royalgrandeur.vercel.app",
        siteName: "Royal Grandeur Banquet Hall",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Royal Grandeur Banquet Hall - Premium Event Venue",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Royal Grandeur Banquet Hall | Premium Wedding Venue",
        description: "Where Dreams Meet Elegance - Premium Event Venue in Patna",
        images: ["/og-image.jpg"],
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
    verification: {
        google: "your-google-verification-code",
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
                            name: "Royal Grandeur Banquet Hall",
                            description: "Premium wedding and event venue in Patna, Bihar",
                            url: "https://royalgrandeur.vercel.app",
                            telephone: "+91-6205708606",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Near Patna Junction",
                                addressLocality: "Patna",
                                addressRegion: "Bihar",
                                postalCode: "800001",
                                addressCountry: "IN",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: "25.6093",
                                longitude: "85.1376",
                            },
                            openingHours: "Mo-Su 09:00-22:00",
                            priceRange: "₹₹₹",
                            image: "https://royalgrandeur.vercel.app/og-image.jpg",
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
