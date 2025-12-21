"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="relative">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-20" />
                <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 mb-6">
                            <Crown className="w-8 h-8 text-gold-400" />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            About <span className="text-gold-400">Us</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Discover the legacy of Royal Grandeur - Patna&apos;s premier destination for celebrations since 2010.
                        </p>
                    </motion.div>
                </div>
            </section>

            <About />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
