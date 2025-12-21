import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
    title: "Gallery | Wedding & Event Photos",
    description: "View our photo gallery showcasing real weddings, receptions, and events hosted at Royal Grandeur. See our stunning halls and decorations.",
    alternates: {
        canonical: "/gallery",
    },
    openGraph: {
        title: "Photo Gallery - Royal Grandeur Banquet Hall",
        description: "Browse through our collection of beautiful moments. From grand weddings to intimate gatherings, see why we are Patna's favorite venue.",
        images: ["/gallery-og.jpg"],
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
