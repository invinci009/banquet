"use client";

import { motion } from "framer-motion";
import { MapPin, Users, UtensilsCrossed, Car, Wifi, Music, Camera, Flower2 } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Prime Location",
        description: "Centrally located in Patna with excellent connectivity and easy access for all your guests.",
    },
    {
        icon: Users,
        title: "500+ Capacity",
        description: "Spacious halls accommodating large weddings, corporate conferences, and grand celebrations.",
    },
    {
        icon: UtensilsCrossed,
        title: "Premium Catering",
        description: "Exquisite multi-cuisine menus crafted by expert chefs to delight every palate.",
    },
    {
        icon: Car,
        title: "Valet Parking",
        description: "Hassle-free parking experience with complimentary valet service for your events.",
    },
    {
        icon: Wifi,
        title: "High-Speed WiFi",
        description: "Complimentary high-speed internet for your corporate events and live streaming needs.",
    },
    {
        icon: Music,
        title: "Premium Sound",
        description: "State-of-the-art audio-visual equipment for concerts, DJ nights, and presentations.",
    },
    {
        icon: Camera,
        title: "Photo Zones",
        description: "Instagram-worthy photo corners with stunning backdrops for memorable pictures.",
    },
    {
        icon: Flower2,
        title: "Floral Decor",
        description: "Breathtaking floral arrangements and thematic decorations by expert designers.",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-gradient-to-b from-gold-50 to-white relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 pattern-lines" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subheading">Why Choose Us</span>
                    <h2 className="section-heading mb-6">
                        Exceptional <span className="text-gold-600">Amenities</span>
                    </h2>
                    <p className="text-gold-800/70 text-lg">
                        Every detail is thoughtfully curated to ensure your celebration is nothing
                        short of extraordinary. Discover what makes us the preferred choice.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="bg-white/90 backdrop-blur-md border border-gold-200/50 rounded-2xl p-6 h-full shadow-lg hover:shadow-gold transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/50">
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-gold-600" />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-gold-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gold-700/70 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold-400 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
