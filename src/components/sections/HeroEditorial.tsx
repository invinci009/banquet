"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const slides = [
    {
        image: "/gallery/hero-building-night.png",
        title: "Alba Banquet Hall",
        subtitle: "Phulwari Sharif's Premier Celebration Venue"
    },
    {
        image: "/gallery/hero-stage-red.png",
        title: "Grand Celebrations",
        subtitle: "Exquisite Decor & Royal Ambiance"
    },
    {
        image: "/gallery/hero-hall-interior.png",
        title: "Spacious Interiors",
        subtitle: "Luxury Comfort for Every Guest"
    },
    {
        image: "/gallery/hero-building-wide.png",
        title: "Memorable Events",
        subtitle: "Creating Stories That Last Forever"
    }
];

export default function HeroEditorial() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-navy-900 text-white">
            {/* Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10" />
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="max-w-4xl pt-20">
                    {/* Animated Text */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-[1px] w-12 bg-gold-400" />
                                <span className="text-gold-400 font-medium tracking-widest uppercase text-sm">
                                    {slides[currentSlide].subtitle}
                                </span>
                            </div>

                            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-white/90 mb-8">
                                {slides[currentSlide].title}
                            </h1>
                        </motion.div>
                    </AnimatePresence>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed mb-12 font-light"
                    >
                        Phulwari Sharif's finest banquet hall.
                        Experience 12 years of perfection in every detail.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 text-white"
                        >
                            <div className="w-14 h-14 rounded-full border border-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                            <span className="font-display text-xl tracking-wide group-hover:text-gold-400 transition-colors">
                                Plan Your Event
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-16 h-1 rounded-full transition-all duration-500 ${currentSlide === index ? "bg-gold-400 w-24" : "bg-white/20 hover:bg-white/40"
                            }`}
                    />
                ))}
            </div>

            {/* Current Slide Number */}
            <div className="absolute top-32 right-12 z-20 font-display text-8xl font-bold text-white/5 hidden lg:block select-none">
                0{currentSlide + 1}
            </div>
        </section>
    );
}
