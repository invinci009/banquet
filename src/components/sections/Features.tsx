"use client";

import { motion } from "framer-motion";
import { MapPin, Users, UtensilsCrossed, Car, Wifi, Music, Camera, Flower2 } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Phulwari Sharif Location",
        description: "Conveniently located in Alba Colony, Phulwari Sharif. Easy to find using Google Maps for all your guests.",
    },
    {
        icon: Users,
        title: "Capacity: 115 - 3000",
        description: "From intimate gatherings to grand weddings, our versatile venue can accommodate any guest count.",
    },
    {
        icon: UtensilsCrossed,
        title: "In-house Catering",
        description: "Expert chefs crafting authentic Bihari and North Indian cuisines. Outside caterers also welcome.",
    },
    {
        icon: Car,
        title: "Dedicated Parking",
        description: "Dedicated parking space available for your guests to ensure a hassle-free arrival experience.",
    },
    {
        icon: Wifi,
        title: "AC Halls",
        description: "Fully air-conditioned halls to keep your guests comfortable in all seasons.",
    },
    {
        icon: Music,
        title: "Late Music Allowed",
        description: "Celebrate into the night! Overnight weddings and late music are permitted at our venue.",
    },
    {
        icon: Camera,
        title: "Changing Rooms",
        description: "2 complimentary AC changing rooms for bride and groom to prepare in comfort.",
    },
    {
        icon: Flower2,
        title: "Outdoor Lawn",
        description: "Sprawling lawn for outdoor events and traditional ceremonies like hawan and baarat.",
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subheading">Why Alba Banquet?</span>
                    <h2 className="section-heading mb-6">
                        More Than Just a <span className="text-gold-600">Venue</span>
                    </h2>
                    <p className="text-gold-800/80 text-lg max-w-2xl mx-auto">
                        We don&apos;t just provide space; we provide an experience. Here&apos;s how we make your event seamless.
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
                            <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gold-100">
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-gold-50 flex items-center justify-center mb-4 text-gold-600">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-gold-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Simplistic Hover Line */}
                                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
