"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Star, ChevronDown } from "lucide-react";

export default function HeroVideo() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-navy-900 text-white">
            {/* Video Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/20 to-navy-900 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-80"
                    poster="/gallery/building-night-lights.webp"
                >
                    <source src="/gallery/video.mp4" type="video/mp4" />
                    <source src="/gallery/video.webm" type="video/webm" />
                </video>
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                        <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                        <span className="text-xs sm:text-sm font-medium tracking-wide text-gold-200">
                            Patna's Premier Luxury Venue
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] sm:leading-tight mb-6">
                        Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Timeless</span>
                        <br />
                        Memories Begin
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10 font-light">
                        Experience the art of celebration at Alba Banquet Hall.
                        From intimate gatherings to grand royal weddings in the heart of Patna.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-gold-500 text-navy-900 font-bold text-lg rounded-full overflow-hidden transition-transform active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Book Your Date
                                <Calendar className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/services"
                            className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            Explore Venues
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-white/50"
            >
                <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    );
}
