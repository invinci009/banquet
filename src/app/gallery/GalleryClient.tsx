"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { motion } from "framer-motion";
import { Camera, Sparkles, Play, Images, Star } from "lucide-react";
import Link from "next/link";

export default function GalleryClient() {
    return (
        <main className="relative">
            <Header />

            {/* Premium Hero Banner */}
            <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-navy-900 overflow-hidden min-h-[60vh] flex items-center">
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0">
                    <img
                        src="/gallery/building-exterior.webp"
                        alt="Alba Banquet Hall Building"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/50" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 pattern-dots opacity-10" />

                    {/* Animated Rings */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="w-full h-full border border-gold-400 rounded-full" />
                        <div className="absolute inset-12 border border-gold-300 rounded-full" />
                        <div className="absolute inset-24 border border-gold-200 rounded-full" />
                    </motion.div>

                    {/* Floating Orbs */}
                    <motion.div
                        className="absolute top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-gold-500/15 rounded-full blur-3xl"
                        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-10 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-burgundy-500/10 rounded-full blur-3xl"
                        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Floating Sparkles */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute hidden sm:block"
                            style={{
                                top: `${15 + Math.random() * 70}%`,
                                left: `${5 + Math.random() * 90}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
                        </motion.div>
                    ))}
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Premium Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles className="w-4 h-4 text-gold-400" />
                            </motion.div>
                            <span className="text-gold-300 font-medium text-sm">Capturing Magical Moments</span>
                        </motion.div>

                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient shadow-gold mb-6"
                        >
                            <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-navy-900" />
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
                        >
                            Our <span className="text-gold-400">Gallery</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
                        >
                            A visual journey through thousands of magical celebrations hosted at Alba Banquet Hall. Every image tells a story of love, joy, and unforgettable moments.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex items-center justify-center gap-6 sm:gap-10 mb-8"
                        >
                            <div className="text-center">
                                <div className="font-display text-2xl sm:text-3xl font-bold text-gold-400">3000+</div>
                                <div className="text-gray-400 text-xs sm:text-sm">Capacity</div>
                            </div>
                            <div className="w-px h-10 bg-gold-500/30" />
                            <div className="text-center">
                                <div className="font-display text-2xl sm:text-3xl font-bold text-gold-400">124+</div>
                                <div className="text-gray-400 text-xs sm:text-sm">Reviews</div>
                            </div>
                            <div className="w-px h-10 bg-gold-500/30" />
                            <div className="text-center">
                                <div className="font-display text-2xl sm:text-3xl font-bold text-gold-400">4.2★</div>
                                <div className="text-gray-400 text-xs sm:text-sm">Rating</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                        >
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold-gradient text-navy-900 font-semibold rounded-xl shadow-gold hover:shadow-gold-lg transition-all hover:scale-105"
                            >
                                <Images className="w-5 h-5" />
                                Book a Tour
                            </Link>
                            <Link
                                href="/#virtual-tour"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                            >
                                <Play className="w-5 h-5" />
                                Watch Video Tour
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                className="w-1.5 h-3 bg-gold-400 rounded-full"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Gallery />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
