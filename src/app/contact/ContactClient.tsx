"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Phone, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
    return (
        <main className="relative">
            <Header />

            {/* Premium Hero Banner */}
            <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-navy-900 overflow-hidden min-h-[60vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
                        alt="Elegant wedding venue"
                        className="w-full h-full object-cover"
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
                        className="absolute top-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gold-500/15 rounded-full blur-3xl"
                        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-10 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-burgundy-500/10 rounded-full blur-3xl"
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
                            <Sparkles className="w-3 h-3 text-gold-400" />
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
                            <span className="text-gold-300 font-medium text-sm">We&apos;re Here to Help</span>
                        </motion.div>

                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient shadow-gold mb-6"
                        >
                            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-navy-900" />
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
                        >
                            Get In <span className="text-gold-400">Touch</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
                        >
                            Ready to create unforgettable memories? Our expert team is here to make your dream celebration a reality.
                        </motion.p>

                        {/* Quick Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                        >
                            <a
                                href="tel:+916205708606"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold-gradient text-navy-900 font-semibold rounded-xl shadow-gold hover:shadow-gold-lg transition-all hover:scale-105"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us Now
                            </a>
                            <a
                                href="https://wa.me/916205708606?text=Hi!%20I%27m%20interested%20in%20booking%20Royal%20Grandeur."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp
                            </a>
                            <Link
                                href="/gallery"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                View Gallery
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

            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
