"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/sections/ServicesHero";
import EnhancedServices from "@/components/sections/EnhancedServices";
import CateringPromo from "@/components/sections/CateringPromo";
import ServiceProcess from "@/components/sections/ServiceProcess";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceTestimonials from "@/components/sections/ServiceTestimonials";
import ServicesFAQ from "@/components/sections/ServicesFAQ";
import CTA from "@/components/sections/CTA";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function ServicesClient() {
    return (
        <main className="relative">
            <Header />

            {/* Hero Section with Stats */}
            <ServicesHero />

            {/* Catering Promotional Banner */}
            <CateringPromo />

            {/* Comprehensive Services Grid */}
            <EnhancedServices />

            {/* Service Process Timeline */}
            <ServiceProcess />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Service Testimonials Carousel */}
            <ServiceTestimonials />

            {/* FAQ Section */}
            <ServicesFAQ />

            {/* Call to Action */}
            <CTA />

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
