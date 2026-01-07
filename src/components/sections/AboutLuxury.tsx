"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const stats = [
    { label: "Years of Excellence", value: "12+" },
    { label: "Events Hosted", value: "1500+" },
    { label: "Happy Guests", value: "50k+" },
];

export default function AboutLuxury() {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Visual Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl">
                            <Image
                                src="/gallery/about-stage.png"
                                alt="Alba Banquet Hall Grand Stage"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Simple Border Frame Effect */}
                            <div className="absolute inset-4 border border-white/20 z-10" />
                        </div>

                        <div className="absolute -left-8 top-12 hidden xl:block">
                            <span className="writing-vertical-rl text-gold-900/10 font-display text-8xl font-bold tracking-widest select-none">
                                EST. 2012
                            </span>
                        </div>
                    </motion.div>

                    {/* Content Side (Right) */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                                Phulwari Sharif, Patna
                            </span>

                            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 leading-tight mb-8">
                                A Legacy of <br />
                                <span className="italic font-serif text-gold-600">Timeless Elegance</span>
                            </h2>

                            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                                <p>
                                    Since 2012, <strong>Alba Banquet Hall</strong> has been the trusted backdrop for thousands of Patna's most cherished memories. We typically host weddings, but our passion lies in crafting <em>experiences</em>.
                                </p>
                                <p>
                                    Located in the heart of Phulwari Sharif, our venue blends traditional hospitality with modern luxury. Whether it is an intimate engagement (Ring Ceremony) or a grand reception, we ensure every detail reflects your unique story.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-8">
                                {stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="font-display text-3xl sm:text-4xl text-navy-900 mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
