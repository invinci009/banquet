"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Utensils, Users, MapPin, Music, Crown, Sparkles } from "lucide-react";

const features = [
    {
        id: "grandeur",
        title: "Grand Halls",
        desc: "Luxurious spaces for 3000+ guests",
        image: "/gallery/feature-halls.png",
        icon: Users,
    },
    {
        id: "culinary",
        title: "Gourmet Catering",
        desc: "World-class culinary experiences",
        image: "/gallery/feature-catering.jpg",
        icon: Utensils,
    },
    {
        id: "ambiance",
        title: "Royal Ambiance",
        desc: "Decor that mesmerizes",
        image: "/gallery/feature-ambiance.png",
        icon: Crown,
    },
    {
        id: "location",
        title: "Prime Location",
        desc: "Phulwari Sharif's landmark",
        image: "/gallery/feature-location.png",
        icon: MapPin,
    },
];

export default function FeaturesInteractive() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
                        Why We Lead
                    </span>
                    <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-navy-900">
                        The Gold <span className="text-gold-500">Standard</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 h-[600px] lg:h-[500px]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className="relative rounded-2xl overflow-hidden cursor-pointer group"
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            animate={{
                                flex: hoveredIndex === index ? 2 : 1,
                                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.7 : 1
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            layout
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-end p-6 z-10 text-white">
                                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors">
                                    <feature.icon className="w-6 h-6 text-white group-hover:text-navy-900" />
                                </div>

                                <h3 className="font-display text-2xl font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-white tracking-wide">
                                    {feature.title}
                                </h3>

                                <p className={`text-sm text-gray-300 transition-all duration-300 ${hoveredIndex === index ? "opacity-100 max-h-20" : "opacity-0 max-h-0 lg:opacity-100 lg:max-h-20"
                                    }`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
