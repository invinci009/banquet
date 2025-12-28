"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar, Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="https://images-pw.pixieset.com/page/YLq0O6/SD_AllWedding-338_websize-a89308b0-1500.jpg"
                    alt="Alba Banquet Hall Patna luxury wedding venue with crystal chandeliers and floral decor"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-105"
                />
            </div>

            {/* Dark Gradient Overlays - neutral, no gold tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Decorative Gold Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" />



            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-20 lg:pt-0">
                {/* Badge - hidden on very small screens */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hidden sm:inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/40 rounded-full px-5 py-2.5 mb-8"
                >
                    <Star className="w-4 h-4 text-gold-300 fill-gold-300" />
                    <span className="text-gold-100 text-sm font-medium">
                        4.9★ Rated on JustDial | Trusted Since 2012
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                >
                    Alba Banquet Hall
                    <br />
                    <span className="text-gold-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2">
                        Patna&apos;s Premier Luxury Wedding & Event Venue
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl text-gold-100/80 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    We host everything from intimate family gatherings to grand weddings.
                    Located in Phulwari Sharif, we provide a beautiful setting for your special day.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Link href="/contact" className="btn-primary group">
                        <span className="relative z-10 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Schedule a Visit
                        </span>
                    </Link>
                    <Link href="#virtual-tour" className="inline-flex items-center justify-center px-6 py-4 bg-gold-500/20 backdrop-blur-sm border border-gold-400/50 text-gold-100 font-medium rounded-lg transition-all duration-300 hover:bg-gold-500/30 hover:border-gold-300">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Virtual Tour
                    </Link>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { number: "3000+", label: "Guest Capacity" },
                        { number: "4.2★", label: "JustDial Rating" },
                        { number: "124+", label: "Reviews" },
                        { number: "10+", label: "Years Experience" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gold-300 mb-1">
                                {stat.number}
                            </div>
                            <div className="text-gold-200/70 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-gold-300/70"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
