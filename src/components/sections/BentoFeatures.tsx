"use client";

import { motion } from "framer-motion";
import { Users, Utensils, MapPin, Music, Snowflake, Shield } from "lucide-react";
import Image from "next/image";

export default function BentoFeatures() {
    return (
        <section className="py-20 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 md:mb-24 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-600 font-semibold tracking-widest uppercase text-sm"
                    >
                        Why Choose Alba
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900"
                    >
                        Designed for <br />
                        <span className="text-gold-500">Unforgettable</span> Moments
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 auto-rows-[200px] md:auto-rows-[250px]">

                    {/* Card 1: Large Capacity (Big Square) */}
                    <div className="md:col-span-3 lg:col-span-4 row-span-2 relative group overflow-hidden rounded-3xl bg-navy-900 border border-navy-800">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <Image
                            src="/gallery/hall-wide-view.webp"
                            alt="Large Capacity Hall"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20">
                            <div className="bg-gold-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-navy-900" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">3000+ Guests</h3>
                            <p className="text-gray-300 text-sm">Spacious halls & lawns for grand weddings.</p>
                        </div>
                    </div>

                    {/* Card 2: Catering (Wide) */}
                    <div className="md:col-span-3 lg:col-span-8 relative group overflow-hidden rounded-3xl bg-cream-100 border border-gold-100">
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/40 to-transparent z-10" />
                        <Image
                            src="/gallery/buffet-guests-serving.jpg"
                            alt="Premium Catering"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-10 z-20 max-w-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <Utensils className="w-6 h-6 text-gold-400" />
                                <span className="text-gold-400 font-bold uppercase tracking-wider text-sm">Gourmet Catering</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white mb-4">A Culinary Journey</h3>
                            <p className="text-gray-300">From authentic Bihari cuisine to international delicacies, our chefs craft menus that delight every palate.</p>
                        </div>
                    </div>

                    {/* Card 3: Location (Small) */}
                    <div className="md:col-span-2 lg:col-span-4 relative group overflow-hidden rounded-3xl bg-gold-50 p-6 flex flex-col justify-between hover:bg-gold-100 transition-colors border border-gold-200">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center mb-4">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900">Prime Location</h3>
                        </div>
                        <p className="text-navy-700 text-sm">Heart of Phulwari Sharif. Easy access & dedicated parking.</p>
                    </div>

                    {/* Card 4: AC (Small) */}
                    <div className="md:col-span-2 lg:col-span-4 relative group overflow-hidden rounded-3xl bg-white p-6 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition-all">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                <Snowflake className="w-5 h-5 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900">Fully AC Halls</h3>
                        </div>
                        <p className="text-gray-500 text-sm">Climate controlled comfort for all seasons.</p>
                    </div>

                    {/* Card 5: Trust (Small) */}
                    <div className="md:col-span-2 lg:col-span-4 relative group overflow-hidden rounded-3xl bg-navy-900 p-6 flex flex-col justify-between border border-navy-800">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                                <Shield className="w-5 h-5 text-gold-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Trust</h3>
                        </div>
                        <p className="text-gray-400 text-sm">12+ Years of Excellence. 1500+ Happy Families.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
