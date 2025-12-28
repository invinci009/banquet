"use client";

import { motion } from "framer-motion";
import {
    Shield,
    Clock,
    Sparkles,
    Heart,
    Award,
    Users,
    ThumbsUp,
    Headphones
} from "lucide-react";

const reasons = [
    {
        icon: Shield,
        title: "Trusted by 1500+ Families",
        description: "Our reputation speaks for itself. We've been the trusted choice for weddings and celebrations across Bihar.",
        stat: "1500+",
        statLabel: "Events"
    },
    {
        icon: Clock,
        title: "On-Time, Every Time",
        description: "Punctuality is our promise. Every aspect of your event will be executed precisely as planned.",
        stat: "100%",
        statLabel: "Punctuality"
    },
    {
        icon: Sparkles,
        title: "Premium Quality",
        description: "We never compromise on quality. From decor to cuisine, expect nothing but the finest.",
        stat: "4.9★",
        statLabel: "Rating"
    },
    {
        icon: Heart,
        title: "Personalized Service",
        description: "Every celebration is unique. We customize every detail to match your vision and preferences.",
        stat: "100%",
        statLabel: "Custom"
    },
    {
        icon: Award,
        title: "12+ Years Experience",
        description: "Our seasoned team brings expertise and creative insights from over a decade of celebrations.",
        stat: "12+",
        statLabel: "Years"
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "From planners to chefs, photographers to decorators - our team comprises industry professionals.",
        stat: "50+",
        statLabel: "Experts"
    },
    {
        icon: ThumbsUp,
        title: "Transparent Pricing",
        description: "No hidden costs. We provide detailed quotes upfront so you can plan your budget confidently.",
        stat: "0",
        statLabel: "Hidden Fees"
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Your dedicated coordinator is available round the clock to address any concerns or last-minute changes.",
        stat: "24/7",
        statLabel: "Available"
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pattern-dots opacity-10" />
            <motion.div
                className="absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-80 h-80 bg-burgundy-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-gold-400 uppercase tracking-[0.2em] font-semibold text-sm mb-4 block">
                        The Alba Banquet Difference
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Why Families{" "}
                        <span className="text-gold-400">Trust Us</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        We don&apos;t just organize events; we create experiences that
                        become cherished memories for generations.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors duration-300">
                                    <reason.icon className="w-7 h-7 text-gold-400" />
                                </div>

                                {/* Stat */}
                                <div className="mb-3">
                                    <span className="font-display text-3xl font-bold text-white">
                                        {reason.stat}
                                    </span>
                                    <span className="text-gray-400 text-sm ml-2">
                                        {reason.statLabel}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-lg font-bold text-white mb-2">
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {reason.description}
                                </p>

                                {/* Hover Line */}
                                <motion.div
                                    className="mt-4 h-0.5 bg-gold-gradient rounded-full"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "30%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-sm mb-6">Trusted & Verified By</p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {["WeddingWire", "WedMeGood", "ShaadiSaga", "Google Reviews"].map((badge, i) => (
                            <motion.div
                                key={badge}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300"
                            >
                                ⭐ {badge}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
