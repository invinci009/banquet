"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

// Lazy load all below-the-fold components for faster LCP
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const WeddingJourney = dynamic(() => import("@/components/sections/WeddingJourney"), { ssr: false });
const VideoShowcase = dynamic(() => import("@/components/sections/VideoShowcase"), { ssr: false });
const Features = dynamic(() => import("@/components/sections/Features"), { ssr: true });
const CateringPromo = dynamic(() => import("@/components/sections/CateringPromo"), { ssr: true });
const AvailabilitySection = dynamic(() => import("@/components/sections/AvailabilitySection"), { ssr: false });

const Gallery = dynamic(() => import("@/components/sections/Gallery"), { ssr: false });

const InstagramFeed = dynamic(() => import("@/components/sections/InstagramFeed"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/sections/GoogleReviews"), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: false });

// Lazy load non-critical UI elements
const WhatsAppButton = dynamic(() => import("@/components/shared/WhatsAppButton"), { ssr: false });
const FloatingBookButton = dynamic(() => import("@/components/shared/FloatingBookButton"), { ssr: false });
const FloatingParticles = dynamic(() => import("@/components/shared/FloatingParticles"), { ssr: false });
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
                <CateringPromo />
                <AvailabilitySection />


                <Gallery limit={4} showFilter={false} />
                <InstagramFeed />

                <GoogleReviews />
                <FAQ />
                <CTA />
                <Footer />
                <WhatsAppButton />
                <FloatingBookButton />
            </main>
        </InitialLoader>
    );
}
