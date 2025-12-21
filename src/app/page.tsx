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
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import FloatingParticles from "@/components/shared/FloatingParticles";
import InitialLoader from "@/components/shared/InitialLoader";

export default function Home() {
    return (
        <InitialLoader>
            <main className="relative">
                <FloatingParticles />
                <Header />
                <Hero />
                <About />
                <WeddingJourney />
                <VenueShowcase />
                <Features />
                <Services />
                <WeddingPackages />
                <Events />
                <Gallery />
                <Testimonials />
                <Contact />
                <CTA />
                <Footer />
                <WhatsAppButton />
            </main>
        </InitialLoader>
    );
}
