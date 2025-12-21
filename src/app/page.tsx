import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function Home() {
    return (
        <main className="relative">
            <Header />
            <Hero />
            <About />
            <Features />
            <Services />
            <Events />
            <Gallery />
            <Testimonials />
            <CTA />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
