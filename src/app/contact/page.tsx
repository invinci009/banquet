import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Book Your Event",
    description: "Get in touch with Royal Grandeur Banquet Hall, Patna. Call us for booking inquiries, schedule a venue tour, or request a quote for your wedding or event.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Royal Grandeur Banquet Hall",
        description: "Ready to plan your event? Contact us today. Visit our venue in Patna or call us for bookings and inquiries.",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
