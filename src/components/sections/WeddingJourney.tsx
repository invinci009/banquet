"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Music, Utensils, Crown } from "lucide-react";

const journeySteps = [
    {
        icon: Heart,
        title: "Engagement Ceremony",
        description: "Begin your journey with an intimate engagement ceremony. Our elegant spaces set the perfect stage for your 'yes' moment.",
        features: ["Intimate Setting", "Ring Ceremony Setup", "Family Gathering"],
    },
    {
        icon: Music,
        title: "Sangeet Night",
        description: "Dance the night away with your loved ones. Our grand hall transforms into a vibrant celebration of music and joy.",
        features: ["DJ & Live Music", "Dance Floor", "Themed Lighting"],
    },
    {
        icon: Sparkles,
        title: "Mehendi & Haldi",
        description: "Celebrate these colorful traditions in our beautifully decorated outdoor and indoor spaces.",
        features: ["Traditional Décor", "Outdoor Lawn", "Photo Corners"],
    },
    {
        icon: Crown,
        title: "Grand Wedding",
        description: "Your dream wedding deserves nothing less than perfection. From the mandap to the varmala, every moment is magical.",
        features: ["Grand Mandap", "Phoolon Ki Chadar", "Royal Entrance"],
    },
    {
        icon: Utensils,
        title: "Wedding Reception",
        description: "Celebrate your union with a lavish reception. Gourmet cuisine, elegant décor, and memories that last forever.",
        features: ["Multi-Cuisine Buffet", "Cake Ceremony", "First Dance Floor"],
    },
];

export default function WeddingJourney() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    // Smooth spring animation for the progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform for line height
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-champagne-50 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 text-gold-200 opacity-20">
                <Heart className="w-32 h-32 fill-current" />
            </div>
            <div className="absolute bottom-20 right-10 text-gold-200 opacity-20">
                <Heart className="w-24 h-24 fill-current" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 bg-burgundy-50 text-burgundy-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Heart className="w-4 h-4 fill-burgundy-500" />
                        Your Complete Wedding Journey
                    </div>
                    <h2 className="section-heading mb-6">
                        From <span className="text-gold-600">&ldquo;Yes&rdquo;</span> to{" "}
                        <span className="text-burgundy-600">&ldquo;I Do&rdquo;</span>
                    </h2>
                    <p className="text-gold-800/70 text-lg">
                        We host every chapter of your love story. From the first celebration to the
                        grand finale, experience seamless transitions and unforgettable moments.
                    </p>
                </motion.div>

                {/* Journey Timeline */}
                <div ref={containerRef} className="relative">
                    {/* Background Track Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-100 via-gold-200 to-gold-100 hidden lg:block -translate-x-1/2 rounded-full" />

                    {/* Animated Progress Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 top-0 w-1.5 bg-gradient-to-b from-gold-400 via-burgundy-500 to-gold-500 hidden lg:block -translate-x-1/2 rounded-full z-10 shadow-lg"
                    >
                        {/* Sparkle particles along the line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold-300 rounded-full blur-sm animate-pulse" />
                    </motion.div>

                    {/* Animated Marker */}
                    <motion.div
                        style={{ top: lineHeight }}
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20 pointer-events-none"
                    >
                        {/* Outer Glow Ring */}
                        <div className="absolute -inset-6 rounded-full bg-gold-400/20 animate-ping" style={{ animationDuration: '2s' }} />

                        {/* Middle Glow */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gold-400/40 to-burgundy-400/40 blur-md animate-pulse" />

                        {/* Inner Glow */}
                        <div className="absolute -inset-2 rounded-full bg-gold-300/50 blur-sm" />

                        {/* Main Marker Ball */}
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-burgundy-500 shadow-2xl border-4 border-white flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
                        </div>

                        {/* Trailing Sparkles */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-1 h-1 bg-gold-300 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                            <div className="w-0.5 h-0.5 bg-gold-200 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                        </div>
                    </motion.div>

                    {/* Journey Steps */}
                    <div className="space-y-20 lg:space-y-32">
                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative lg:grid lg:grid-cols-2 lg:gap-20 items-center"
                            >
                                {/* Content Card */}
                                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-24" : "lg:col-start-2 lg:pl-24"}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-3xl p-8 shadow-xl border border-gold-100 hover:shadow-gold hover:border-gold-300 transition-all duration-500"
                                    >
                                        {/* Step Header */}
                                        <div className={`flex items-center gap-4 mb-5 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-burgundy-500 flex items-center justify-center shadow-gold"
                                            >
                                                <step.icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                            <div className={`${index % 2 === 0 ? "lg:text-right" : ""}`}>
                                                <span className="text-xs font-bold text-burgundy-500 uppercase tracking-widest">
                                                    Step {index + 1}
                                                </span>
                                                <h3 className="font-display text-2xl font-bold text-gold-900">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-gold-700/80 mb-6 leading-relaxed text-lg ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                                            {step.description}
                                        </p>

                                        {/* Features Tags */}
                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                                            {step.features.map((feature, i) => (
                                                <motion.span
                                                    key={feature}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="px-4 py-1.5 bg-gradient-to-r from-gold-50 to-champagne-100 text-gold-700 text-sm font-medium rounded-full border border-gold-200 hover:border-gold-400 transition-colors"
                                                >
                                                    {feature}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Timeline Node */}
                                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="w-5 h-5 rounded-full bg-white border-4 border-gold-400 shadow-lg"
                                    />
                                </div>

                                {/* Empty column for alternating */}
                                {index % 2 === 0 ? <div className="hidden lg:block" /> : null}
                            </motion.div>
                        ))}
                    </div>

                    {/* End Marker */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex flex-col items-center mt-16"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy-500 to-burgundy-600 flex items-center justify-center shadow-lg">
                            <Heart className="w-6 h-6 text-white fill-white" />
                        </div>
                        <div className="mt-3 px-4 py-2 bg-burgundy-50 rounded-full">
                            <span className="text-sm font-semibold text-burgundy-600">Happily Ever After ❤️</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
