"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import WeddingJourney from "@/components/sections/WeddingJourney";
import VenueShowcase from "@/components/sections/VenueShowcase";
import Services from "@/components/sections/Services";
import WeddingPackages from "@/components/sections/WeddingPackages";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import GoogleReviews from "@/components/sections/GoogleReviews";
import TrustBadges from "@/components/sections/TrustBadges";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import FloatingBookButton from "@/components/shared/FloatingBookButton";
import FloatingParticles from "@/components/shared/FloatingParticles";
import InitialLoader from "@/components/shared/InitialLoader";

export default function HomeClient() {
    return (
        <InitialLoader>
            <main className="relative">
                <FloatingParticles />
                <Header />
                <Hero />
                <TrustBadges />
                <About />
                <WeddingJourney />
                <VenueShowcase />
                <Features />
                <Services />
                <WeddingPackages />
                <Events />
                <Gallery />
                <Testimonials />
                <GoogleReviews />
                <FAQ />
                <Contact />
                <CTA />
                <Footer />
                <WhatsAppButton />
                <FloatingBookButton />
            </main>
        </InitialLoader>
    );
}
