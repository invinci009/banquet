"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Gold Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-600 via-gold-500 to-gold-700" />

            {/* Decorative Patterns */}
            <div className="absolute inset-0 pattern-dots opacity-20" />

            {/* Floating Shapes */}
            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-24 h-24 border-2 border-white/20 rounded-full"
            />
            <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-32 h-32 border-2 border-white/15 rotate-45"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Sparkle Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-8"
                >
                    <Sparkles className="w-8 h-8 text-gold-600" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                    Ready to Plan Your
                    <span className="text-gold-100"> Dream Event?</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
                >
                    Contact us today to check availability or schedule a personal tour
                    of our magnificent facilities. Your perfect celebration awaits.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-700 font-bold rounded-lg shadow-lg hover:bg-gold-50 hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book a Visit
                    </button>
                    <a
                        href="tel:+916205708606"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-gold-800/30 backdrop-blur-sm border border-white/30 rounded-lg text-white font-semibold hover:bg-gold-800/50 transition-all duration-300 w-full sm:w-auto"
                    >
                        <Phone className="w-5 h-5" />
                        Call +91 62057 08606
                    </a>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 flex items-center justify-center gap-2 text-white/80 text-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Open for bookings — Limited dates available for 2024-25
                </motion.div>
            </div>
        </section>
    );
}
