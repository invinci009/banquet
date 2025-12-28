import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | Alba Banquet Hall Patna",
    description: "Learn about Alba Banquet Hall - Patna's premier venue in Phulwari Sharif with 10+ years of excellence. Our journey, values, and commitment to creating unforgettable celebrations.",
    alternates: {
        canonical: "https://albacatering.com/about",
    },
    openGraph: {
        title: "About Alba Banquet Hall",
        description: "10+ years of creating magical celebrations in Patna. Discover our story, values, and what makes us Bihar's most trusted event venue.",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
