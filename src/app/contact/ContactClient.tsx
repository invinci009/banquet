"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactClient() {
    return (
        <main className="relative">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden min-h-[50vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
                        alt="Corporate event venue"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/75 to-navy-900/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/40" />
                </div>

                <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 backdrop-blur-sm mb-6">
                            <MapPin className="w-8 h-8 text-gold-400" />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Contact <span className="text-gold-400">Us</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Get in touch with us to plan your dream celebration at Royal Grandeur.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
