"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, CalendarCheck, Gem } from "lucide-react";

const highlights = [
    {
        icon: Award,
        title: "Trusted Venue",
        description: "Chosen by families across Patna for over a decade",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Professional staff dedicated to your celebration",
    },
    {
        icon: CalendarCheck,
        title: "Seamless Planning",
        description: "End-to-end event management services",
    },
    {
        icon: Gem,
        title: "Premium Quality",
        description: "Finest amenities and elegant decor",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-50/50 to-transparent" />
            <div className="absolute -left-40 top-1/2 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            {/* Main Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/gallery/building-entrance.webp"
                                    alt="Alba Banquet Hall Grand Entrance"
                                    width={600}
                                    height={750}
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-gold p-6 border border-gold-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">12+</span>
                                    </div>
                                    <div>
                                        <p className="text-gold-800 font-semibold">Years of</p>
                                        <p className="text-gold-600 font-bold">Excellence</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Decorative Frame */}
                        <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-gold-300 rounded-2xl" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-subheading">Welcome to Alba Banquet</span>
                        <h2 className="section-heading mb-6">
                            Creating Timeless Memories
                            <span className="text-gold-600"> Since 2012</span>
                        </h2>

                        <div className="luxury-divider justify-start my-8">
                            <Gem className="w-6 h-6 text-gold-500" />
                        </div>

                        <p className="text-gold-800/70 text-lg leading-relaxed mb-6">
                            Located in Phulwari Sharif, Alba Banquet Hall is a premier venue for
                            your most important celebrations. Our spacious halls, beautiful décor,
                            and modern amenities provide the perfect backdrop for your events.
                        </p>

                        <p className="text-gold-700/70 leading-relaxed mb-10">
                            From small gatherings to large receptions, our experienced team
                            ensures every detail is taken care of. We combine traditional hospitality
                            with modern concepts to create memorable experiences for you and your guests.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-gold-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gold-800 text-sm">
                                            {item.title}
                                        </h4>
                                        <p className="text-gold-600/70 text-xs mt-0.5">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
