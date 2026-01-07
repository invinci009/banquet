"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Utensils, Users, UtensilsCrossed, Salad, Coffee, Heart, Check, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Heart,
        slug: "wedding-catering",
        title: "Wedding Catering",
        description: "Make your special day unforgettable with our exquisite wedding catering. We craft memorable dining experiences for your guests.",
        features: ["Customized Wedding Menus", "Live Food Counters", "Traditional & Modern Cuisine", "Professional Service Staff"],
    },
    {
        icon: Users,
        slug: "corporate-catering",
        title: "Corporate Catering",
        description: "Professional catering solutions for business meetings, conferences, and corporate events. Impress your clients and colleagues.",
        features: ["Business Lunch Packages", "Conference Catering", "Office Party Menus", "On-Time Delivery"],
    },
    {
        icon: UtensilsCrossed,
        slug: "buffet-catering",
        title: "Buffet Catering",
        description: "Grand buffet setups featuring an extensive variety of dishes. Perfect for large gatherings and celebrations.",
        features: ["Multi-Cuisine Spread", "Live Cooking Stations", "Elegant Presentation", "Unlimited Servings"],
    },
    {
        icon: Utensils,
        slug: "dinner-catering",
        title: "Dinner Catering",
        description: "Elegant dinner service for your special occasions. From intimate gatherings to grand celebrations.",
        features: ["Plated Service Available", "Multi-Course Dinners", "Fine Dining Experience", "Specialty Dishes"],
    },
    {
        icon: Coffee,
        slug: "snack-catering",
        title: "Snack Catering",
        description: "Delicious snacks and appetizers for tea parties, get-togethers, and casual events. Quality bites that impress.",
        features: ["Tea Party Snacks", "Appetizer Platters", "Quick Bites Menu", "Customizable Options"],
    },
    {
        icon: Salad,
        slug: "personal-catering",
        title: "Personal Catering",
        description: "Personalized catering for small family gatherings, house parties, and intimate celebrations.",
        features: ["Small Batch Cooking", "Home Delivery", "Personalized Menus", "Flexible Portions"],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gold-50 to-transparent" />
            <div className="absolute -right-40 top-1/2 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <span className="section-subheading">Our Expertise</span>
                    <h2 className="section-heading mb-6">
                        Premium <span className="text-gold-600">Catering Services</span>
                    </h2>
                    <p className="text-gold-800/70 text-lg">
                        Be a guest on your party! We offer a complete range of catering services
                        for all occasions - from intimate gatherings to grand celebrations.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative h-full rounded-3xl bg-white border border-gold-200 shadow-lg overflow-hidden hover:shadow-gold transition-all duration-500 hover:-translate-y-2 hover:border-gold-400">
                                {/* Gold Gradient Header */}
                                <div className="h-2 bg-gold-gradient" />

                                {/* Content */}
                                <div className="p-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-6 h-6 text-gold-600" />
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-gold-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gold-700/70 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.slice(0, 2).map((feature) => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-gold-gradient flex items-center justify-center">
                                                    <Check className="w-2.5 h-2.5 text-white" />
                                                </div>
                                                <span className="text-gold-800 text-sm font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 group/btn"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-gold-100 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
