"use client";

import { motion } from "framer-motion";
import { MapPin, Users, UtensilsCrossed, Car, Snowflake, Music, Shirt, TreePine } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Prime Location",
        description: "Phulwari Sharif, easy Google Maps access",
    },
    {
        icon: Users,
        title: "115 - 3000 Guests",
        description: "From intimate to grand celebrations",
    },
    {
        icon: UtensilsCrossed,
        title: "In-house Catering",
        description: "Bihari & North Indian cuisines",
    },
    {
        icon: Car,
        title: "Dedicated Parking",
        description: "Hassle-free arrival for guests",
    },
    {
        icon: Snowflake,
        title: "AC Halls",
        description: "Comfortable in all seasons",
    },
    {
        icon: Music,
        title: "Late Music Allowed",
        description: "Overnight weddings permitted",
    },
    {
        icon: Shirt,
        title: "Changing Rooms",
        description: "2 AC rooms for bride & groom",
    },
    {
        icon: TreePine,
        title: "Outdoor Lawn",
        description: "For hawan, baarat & ceremonies",
    },
];

export default function Features() {
    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold-50/50 to-white" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Compact Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-10"
                >
                    <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
                        Why Alba Banquet?
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800">
                        Everything You Need, <span className="text-gold-600">All in One Place</span>
                    </h2>
                </motion.div>

                {/* Features Grid - Sleek layout with more breathing room */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group"
                        >
                            <div className="relative bg-white rounded-xl p-4 lg:p-5 border border-gold-100 hover:border-gold-300 shadow-sm hover:shadow-lg transition-all duration-300 text-center h-full">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.4 }}
                                    className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-shadow"
                                >
                                    <feature.icon className="w-6 h-6 text-white" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="font-semibold text-navy-800 text-sm lg:text-base mb-1">
                                    {feature.title}
                                </h3>

                                {/* Description - Hidden on mobile, visible on hover/desktop */}
                                <p className="text-gray-500 text-xs lg:text-sm leading-snug">
                                    {feature.description}
                                </p>

                                {/* Subtle gradient border on hover */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-600/0 group-hover:from-gold-400/5 group-hover:to-gold-600/5 transition-all duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
