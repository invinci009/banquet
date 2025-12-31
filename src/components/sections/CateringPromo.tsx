"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, ArrowRight, Check } from "lucide-react";

const highlights = [
    "Wedding Catering",
    "Corporate Events",
    "Buffet Service",
    "Dinner Parties",
    "Snack Catering",
    "Personal Catering"
];

export default function CateringPromo() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gold-50 via-white to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />
            <div className="absolute -right-40 bottom-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 font-semibold text-sm mb-4">
                        <Sparkles className="w-4 h-4" />
                        Alba Catering Services
                    </span>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-gold-900 mb-4">
                        Be a Guest on{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-500">
                            Your Party!
                        </span>
                    </h2>
                    <p className="text-gold-700/80 text-lg max-w-2xl mx-auto">
                        पार्टी हो या फंक्शन, स्वाद हमेशा नंबर वन!
                    </p>
                </motion.div>

                {/* Image and Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Rotated Image Container - using aspect ratio container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-3/5 flex-shrink-0"
                    >
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-3xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-500" />

                            {/* Image with proper rotation handling */}
                            <div className="relative bg-white rounded-2xl shadow-2xl border border-gold-200/50 overflow-hidden p-4">
                                <div
                                    className="relative w-full overflow-hidden rounded-xl"
                                    style={{
                                        aspectRatio: '4/3'
                                    }}
                                >
                                    <Image
                                        src="/gallery/catering-promo.png"
                                        alt="Alba Catering Services - Premium Catering in Patna"
                                        fill
                                        className="object-contain -rotate-90 scale-[1.35]"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ scale: 0, rotate: -10 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                                className="absolute -top-3 -right-3 bg-gradient-to-br from-gold-500 to-gold-600 text-white px-4 py-2 rounded-xl shadow-lg z-10"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="font-bold text-sm">Premium</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-2/5"
                    >
                        <h3 className="font-display text-2xl font-bold text-gold-900 mb-4">
                            Complete Catering Solutions
                        </h3>

                        <p className="text-gold-700/80 leading-relaxed mb-6">
                            Let us handle the food while you enjoy your special moments.
                            From intimate gatherings to grand celebrations, we deliver excellence in every dish.
                        </p>

                        {/* Service Highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.08 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gold-800 font-medium text-sm">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="tel:+919234953085"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-full shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/35 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Us</span>
                            </Link>

                            <Link
                                href="#services-grid"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gold-300 text-gold-700 font-bold rounded-full hover:bg-gold-50 hover:border-gold-400 transition-all duration-300 group"
                            >
                                <span>View Services</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
