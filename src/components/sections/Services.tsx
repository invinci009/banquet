"use client";

import { motion } from "framer-motion";
import { Utensils, Flower, CalendarCheck, Check, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Utensils,
        title: "Premium Catering",
        description: "Indulge in a gastronomic journey with our diverse menu options. Our expert chefs ensure hygiene, taste, and presentation are world-class.",
        features: ["Live Food Stations", "Customized Menus", "Multi-Cuisine Options", "Trained Service Staff"],
        gradient: "from-amber-500 to-orange-600",
        lightGradient: "from-amber-50 to-orange-50",
    },
    {
        icon: Flower,
        title: "Exquisite Decoration",
        description: "Transform our venue to match your vision. Our decorators specialize in floral arrangements, lighting, and thematic stage setups.",
        features: ["Floral & Drapery", "Theme Concepts", "Stage Design", "Ambient Lighting"],
        gradient: "from-purple-500 to-pink-600",
        lightGradient: "from-purple-50 to-pink-50",
    },
    {
        icon: CalendarCheck,
        title: "Event Planning",
        description: "Our experienced planners manage every detail, from vendor coordination to guest hospitality, ensuring your event runs smoothly.",
        features: ["End-to-End Management", "Logistics Support", "Vendor Coordination", "Day-of Management"],
        gradient: "from-blue-500 to-cyan-600",
        lightGradient: "from-blue-50 to-cyan-50",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-champagne-50 to-transparent" />
            <div className="absolute -right-40 top-1/2 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subheading">Our Expertise</span>
                    <h2 className="section-heading mb-6">
                        Comprehensive <span className="text-gold-600">Event Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We bring together the best professionals in the industry to offer you
                        a seamless, stress-free event experience. From concept to execution, we handle it all.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative h-full rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                {/* Gradient Header */}
                                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

                                {/* Content */}
                                <div className="p-8">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.lightGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-8 h-8 bg-gradient-to-r ${service.gradient} bg-clip-text`} style={{ color: service.gradient.includes('amber') ? '#d97706' : service.gradient.includes('purple') ? '#9333ea' : '#3b82f6' }} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-2xl font-bold text-navy-800 mb-4">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-navy-700 text-sm font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button className="flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 group/btn">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Hover Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.lightGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
