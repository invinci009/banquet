import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Royal Grandeur - Patna's premier banquet hall with 15+ years of excellence. Our journey, values, and commitment to creating unforgettable celebrations.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Royal Grandeur Banquet Hall",
        description: "15+ years of creating magical celebrations in Patna. Discover our story, values, and what makes us Bihar's most trusted event venue.",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
