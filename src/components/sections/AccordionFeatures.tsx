"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Utensils, Users, MapPin, Music } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Grand Halls",
        subtitle: "Capacity for 3000+ Guests",
        image: "/gallery/hall-wide-view.webp",
        icon: Users,
    },
    {
        id: 2,
        title: "Fine Dining",
        subtitle: "Exquisite Culinary Experience",
        image: "/gallery/buffet-guests-serving.jpg",
        icon: Utensils,
    },
    {
        id: 3,
        title: "Prime Location",
        subtitle: "Heart of Phulwari Sharif",
        image: "/gallery/building-entrance.webp",
        icon: MapPin,
    },
    {
        id: 4,
        title: "Entertainment",
        subtitle: "DJ & Live Performance",
        image: "/gallery/wedding-stage-decorated.jpg",
        icon: Music,
    },
];

export default function AccordionFeatures() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="py-20 lg:py-32 bg-navy-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-gold-400 font-medium tracking-widest uppercase text-sm block mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Experience the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                                Extraordinary
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Desktop Accordion */}
                <div className="hidden lg:flex h-[500px] gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1] ${activeFeature === index ? "flex-[3]" : "flex-[1]"
                                }`}
                            onHoverStart={() => setActiveFeature(index)}
                            onClick={() => setActiveFeature(index)}
                        >
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className={`object-cover transition-transform duration-1000 ${activeFeature === index ? "scale-100" : "scale-110 grayscale brightness-50"
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-navy-900/90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                                <div className={`flex items-center gap-4 mb-2 ${activeFeature !== index && "justify-center"}`}>
                                    <div className={`w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center transition-all ${activeFeature !== index && "bg-transparent border border-white/30"
                                        }`}>
                                        <feature.icon className={`w-6 h-6 ${activeFeature === index ? "text-navy-900" : "text-white"}`} />
                                    </div>
                                    {activeFeature === index && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-gold-300 font-medium tracking-wide uppercase text-sm"
                                        >
                                            {feature.subtitle}
                                        </motion.span>
                                    )}
                                </div>

                                {activeFeature === index ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <h3 className="text-3xl font-display font-bold text-white mb-4">{feature.title}</h3>
                                        <div className="flex items-center gap-2 text-white/80 group">
                                            <span className="text-sm">Explore More</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="text-center pb-4">
                                        <h3 className="text-xl font-display font-bold text-white/50 vertical-rl transform -rotate-180 hidden">
                                            {feature.title}
                                        </h3>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Stack (Cards) */}
                <div className="lg:hidden space-y-4">
                    {features.map((feature, index) => (
                        <div key={feature.id} className="relative h-64 rounded-2xl overflow-hidden group">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <feature.icon className="w-5 h-5 text-gold-400" />
                                    <h3 className="text-xl font-display font-bold text-white">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-gray-300">{feature.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
