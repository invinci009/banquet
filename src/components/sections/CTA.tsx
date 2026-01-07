"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Sparkles, Clock, ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-16 lg:py-20 relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "linear-gradient(135deg, #722F37 0%, #1a1a2e 50%, #0f0f1a 100%)",
                            "linear-gradient(135deg, #0f0f1a 0%, #722F37 50%, #1a1a2e 100%)",
                            "linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 50%, #722F37 100%)",
                            "linear-gradient(135deg, #722F37 0%, #1a1a2e 50%, #0f0f1a 100%)",
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 pattern-dots opacity-5" />
            </div>

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                    scale: [1.1, 1, 1.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-10 w-40 h-40 bg-burgundy-500/20 rounded-full blur-3xl"
            />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Urgency Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 px-4 py-2 rounded-full mb-6"
                >
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-green-400"
                    />
                    <Clock className="w-4 h-4 text-gold-400" />
                    <span className="text-gold-300 text-sm font-medium">Limited dates available for 2026</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                >
                    Ready to Plan Your
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
                        Dream Event?
                    </span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-white/70 max-w-xl mx-auto mb-8"
                >
                    Contact us today to check availability or schedule a personal tour
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden w-full sm:w-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full text-navy-900 font-bold shadow-lg shadow-gold-500/30"
                        >
                            <Calendar className="w-5 h-5" />
                            <span>Book a Visit</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 bg-gold-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity -z-10"
                        />
                    </Link>

                    <motion.a
                        href="tel:+919234953085"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 hover:border-gold-500/50 transition-all duration-300 w-full sm:w-auto"
                    >
                        <Phone className="w-5 h-5" />
                        <span>+91 92349 53085</span>
                    </motion.a>
                </motion.div>

                {/* Decorative sparkles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex items-center justify-center gap-1"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-gold-400/50" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
