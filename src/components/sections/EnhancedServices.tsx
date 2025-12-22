"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
    ChevronRight,
    ArrowRight
} from "lucide-react";
import { services, iconMap } from "@/data/services";

export default function EnhancedServices() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="services-grid" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gold-50/50 to-transparent" />
            <div className="absolute -right-40 top-1/4 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />
            <div className="absolute -left-40 bottom-1/4 w-80 h-80 bg-burgundy-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subheading">Comprehensive Solutions</span>
                    <h2 className="section-heading mb-6">
                        Everything You Need for a{" "}
                        <span className="text-gold-600">Perfect Event</span>
                    </h2>
                    <p className="text-gold-800/70 text-lg">
                        We offer a complete suite of premium services to make your celebration
                        truly extraordinary. Each service is customizable to match your vision.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative"
                        >
                            <div
                                className="h-full rounded-3xl bg-white border-2 border-gold-200 hover:border-gold-400 shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-gold"
                            >
                                {/* Image Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        animate={{
                                            scale: hoveredId === service.id ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />

                                    {/* Highlight Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1.5 bg-gold-gradient text-navy-900 text-xs font-bold rounded-full shadow-lg">
                                            {service.highlight}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {(() => {
                                                const IconComponent = iconMap[service.iconName];
                                                return <IconComponent className="w-7 h-7 text-navy-900" />;
                                            })()}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-navy-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gold-600 text-sm font-medium mb-3">
                                        {service.shortDesc}
                                    </p>
                                    <p className="text-gold-700/70 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {service.description}
                                    </p>

                                    {/* Features Preview */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.features.slice(0, 3).map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs px-3 py-1 bg-gold-50 text-gold-700 rounded-full border border-gold-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {service.features.length > 3 && (
                                            <span className="text-xs px-3 py-1 bg-champagne-100 text-gold-600 rounded-full">
                                                +{service.features.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 group/btn"
                                    >
                                        Explore Service
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Animated Border */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-gold-gradient"
                                    initial={{ width: "0%" }}
                                    animate={{ width: hoveredId === service.id ? "100%" : "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-gold-700/70 mb-6">
                        Can&apos;t find what you&apos;re looking for? We offer custom services tailored to your needs.
                    </p>
                    <a
                        href="/contact"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span className="relative z-10">Request Custom Service</span>
                        <ArrowRight className="w-5 h-5 relative z-10" />
                    </a>
                </motion.div>
            </div>
        </section >
    );
}
