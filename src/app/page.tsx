import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Royal Grandeur Banquet Hall Patna | Best Wedding & Event Venue in Bihar",
    description: "Royal Grandeur Banquet Hall in Patna offers luxury wedding venues, corporate events & parties. Multiple halls for 50-800 guests with catering, decor & parking. Book now!",
    alternates: {
        canonical: "https://royalgrandeurpatna.com",
    },
};

export default function Home() {
    return <HomeClient />;
}
