import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Services | Wedding, Reception & Event Services in Patna",
    description: "Comprehensive event services at Royal Grandeur. From wedding planning and catering to decoration and photography, we handle it all for your perfect day.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Services - Royal Grandeur Banquet Hall",
        description: "Explore our premium event services: Full-service specialized catering, bespoke decoration, event planning, photography, and entertainment.",
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
