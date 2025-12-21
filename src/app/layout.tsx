import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Royal Grandeur Banquet Hall | Where Dreams Meet Elegance",
    description: "Experience luxury and elegance at Royal Grandeur Banquet Hall. The premier destination for weddings, corporate gatherings, and unforgettable celebrations in Patna.",
    keywords: ["banquet hall", "wedding venue", "patna banquet", "event venue", "corporate events", "wedding hall", "celebration venue"],
    authors: [{ name: "Royal Grandeur Banquet Hall" }],
    openGraph: {
        title: "Royal Grandeur Banquet Hall | Where Dreams Meet Elegance",
        description: "The premier destination for weddings, corporate gatherings, and unforgettable celebrations.",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Royal Grandeur Banquet Hall",
        description: "Where Dreams Meet Elegance - Premium Event Venue in Patna",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="min-h-screen bg-champagne-50 text-navy-800 antialiased overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
