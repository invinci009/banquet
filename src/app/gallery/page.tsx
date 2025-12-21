"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function GalleryPage() {
    return (
        <main className="relative">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-20" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 mb-6">
                            <Camera className="w-8 h-8 text-gold-400" />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Our <span className="text-gold-400">Gallery</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            A glimpse into the magical celebrations we&apos;ve hosted at Royal Grandeur.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Gallery />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
