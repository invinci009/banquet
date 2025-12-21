"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Music, Camera, Utensils, Car, Users, Crown } from "lucide-react";

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
        offset: ["start center", "end center"]
    });

    // Transform scroll progress to line height
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-24 lg:py-32 bg-gradient-to-b from-champagne-50 to-white relative overflow-hidden">
            {/* Decorative Hearts */}
            <div className="absolute top-20 left-10 text-gold-200 opacity-20">
                <Heart className="w-32 h-32 fill-current" />
            </div>
            <div className="absolute bottom-20 right-10 text-gold-200 opacity-20">
                <Heart className="w-24 h-24 fill-current" />
            </div>
            <div className="absolute top-1/2 right-20 text-burgundy-200 opacity-10">
                <Sparkles className="w-40 h-40" />
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

                {/* Journey Timeline with Scroll Progress */}
                <div className="relative">
                    {/* Static Timeline Track - Desktop Only */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold-100 hidden lg:block -translate-x-1/2 rounded-full" />

                    {/* Animated Progress Line - Desktop Only */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-gold-400 via-burgundy-500 to-gold-400 hidden lg:block -translate-x-1/2 rounded-full z-10"
                    />

                    {/* Animated Marker Ball - Desktop Only */}
                    <motion.div
                        style={{ top: lineHeight }}
                        className="absolute left-1/2 -translate-x-1/2 hidden lg:flex z-20"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-3 bg-gold-400 rounded-full blur-xl opacity-50 animate-pulse" />
                            {/* Main Ball */}
                            <div className="relative w-8 h-8 rounded-full bg-gold-gradient shadow-gold-lg border-4 border-white flex items-center justify-center">
                                <Heart className="w-3 h-3 text-white fill-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Journey Steps */}
                    <div className="space-y-16 lg:space-y-24">
                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center`}
                            >
                                {/* Content */}
                                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-20" : "lg:col-start-2 lg:pl-20"}`}>
                                    <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gold-100 hover:shadow-gold hover:border-gold-200 transition-all duration-500 ${index % 2 === 0 ? "lg:ml-auto" : ""}`}>
                                        {/* Step Badge & Icon */}
                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-burgundy-500 flex items-center justify-center shadow-lg">
                                                <step.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className={`${index % 2 === 0 ? "lg:text-right" : ""}`}>
                                                <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">
                                                    Step {index + 1}
                                                </span>
                                                <h3 className="font-display text-xl font-bold text-gold-900">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-gold-700/70 mb-5 leading-relaxed ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                                            {step.description}
                                        </p>

                                        {/* Features */}
                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                                            {step.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 bg-gold-50 text-gold-700 text-xs font-medium rounded-full border border-gold-200"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Step Indicator Node - Desktop Only */}
                                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-4 h-4 rounded-full bg-white border-4 border-gold-300 shadow-lg" />
                                </div>

                                {/* Empty space for alternating layout */}
                                {index % 2 === 0 ? <div className="hidden lg:block" /> : null}
                            </motion.div>
                        ))}
                    </div>

                    {/* End Marker */}
                    <div className="hidden lg:flex justify-center mt-12">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-burgundy-500 flex items-center justify-center">
                                <Heart className="w-3 h-3 text-white fill-white" />
                            </div>
                            <span className="text-sm font-medium text-burgundy-600">Happily Ever After</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
