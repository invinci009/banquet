import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Royal Grandeur Banquet Hall | Premium Wedding & Event Venue in Patna",
    description: "Experience luxury at Royal Grandeur Banquet Hall - Patna's #1 wedding & event venue. 15+ years excellence, 5000+ events, 4 luxurious halls. Book your dream celebration today!",
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    return <HomeClient />;
}
