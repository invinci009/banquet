"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import WeddingJourney from "@/components/sections/WeddingJourney";
import Services from "@/components/sections/Services";

// Lazy load heavy below-the-fold components
const VideoShowcase = dynamic(() => import("@/components/sections/VideoShowcase"));
const Events = dynamic(() => import("@/components/sections/Events"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const GoogleReviews = dynamic(() => import("@/components/sections/GoogleReviews"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const CTA = dynamic(() => import("@/components/sections/CTA"));

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

                <About />
                <WeddingJourney />
                <VideoShowcase />
                <Features />
                <Services />

                <Events />
                <Gallery limit={4} showFilter={false} />
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
