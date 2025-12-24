"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Crown, Gem, Sparkles, Star, ArrowRight } from "lucide-react";

const packages = [
    {
        name: "Silver",
        tagline: "Perfect Start",
        icon: Star,
        color: "from-gray-400 to-gray-500",
        borderColor: "border-gray-200",
        popular: false,
        features: [
            "Hall Rental (6 Hours)",
            "Basic Decoration",
            "Veg Buffet (300 pax)",
            "AC & Lighting",
            "Basic Sound System",
            "50 Parking Spots",
        ],
        notIncluded: ["DJ & Live Music", "Photography", "Valet Service"],
    },
    {
        name: "Gold",
        tagline: "Most Popular",
        icon: Crown,
        color: "from-gold-500 to-gold-600",
        borderColor: "border-gold-300",
        popular: true,
        features: [
            "Hall Rental (10 Hours)",
            "Premium Floral Décor",
            "Multi-Cuisine (500 pax)",
            "Premium AC & Chandeliers",
            "DJ + Sound System",
            "100 Valet Parking",
            "Photo Booth Setup",
            "Dedicated Coordinator",
        ],
        notIncluded: ["Live Band"],
    },
    {
        name: "Diamond",
        tagline: "Ultimate Luxury",
        icon: Gem,
        color: "from-purple-500 to-purple-600",
        borderColor: "border-purple-200",
        popular: false,
        features: [
            "Full Day Rental",
            "Royal Theme Décor",
            "Unlimited Gourmet Menu",
            "All Venues Access",
            "Live Band + DJ",
            "Unlimited Valet",
            "Professional Photography",
            "Bridal Suite Access",
            "Fireworks Display",
            "Honeymoon Suite Night",
        ],
        notIncluded: [],
    },
];

export default function WeddingPackages() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-champagne-50 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-burgundy-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Tailored For You
                    </div>
                    <h2 className="section-heading mb-6">
                        Wedding <span className="text-gold-600">Packages</span>
                    </h2>
                    <p className="text-gold-800/70 text-lg">
                        Choose from our carefully curated packages designed to match every
                        budget and dream. All packages are fully customizable.
                    </p>
                </motion.div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={`relative group ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="px-4 py-1.5 bg-gold-gradient text-navy-900 text-xs font-bold rounded-full shadow-gold">
                                        ⭐ MOST POPULAR
                                    </span>
                                </div>
                            )}

                            <div className={`h-full bg-white rounded-3xl p-8 border-2 ${pkg.borderColor} ${pkg.popular ? "shadow-gold" : "shadow-lg"} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 shadow-lg`}>
                                    <pkg.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Name & Tagline */}
                                <h3 className="font-display text-2xl font-bold text-gold-900 mb-1">
                                    {pkg.name}
                                </h3>
                                <p className="text-gold-600 text-sm font-medium mb-6 pb-6 border-b border-gold-100">
                                    {pkg.tagline}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gold-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="/contact"
                                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${pkg.popular
                                        ? "bg-gold-gradient text-navy-900 hover:shadow-gold"
                                        : "bg-gold-50 text-gold-700 hover:bg-gold-100"
                                        }`}
                                >
                                    Get Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Package Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center text-gold-600/70 text-sm mt-12"
                >
                    * All packages are customizable. Contact us for a personalized quote based on your requirements.
                </motion.p>
            </div>
        </section>
    );
}
