"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";

const slides = [
    {
        id: "landmark",
        image: "/gallery/hero-building-wide.png",
        title: "Alba Banquet Hall",
        subtitle: "The Crown Jewel of Phulwari Sharif",
        description: "An architectural masterpiece designed for those who demand extraordinary. Begin your forever in a venue that shines as bright as your love."
    },
    {
        id: "stage",
        image: "/gallery/hero-stage-red.png",
        title: "Royal Stage",
        subtitle: "Where You Are The Star",
        description: "Our signature floral stage design, crafted with premium red roses and golden accents, provides the perfect backdrop for your most cherished moments."
    },
    {
        id: "hall",
        image: "/gallery/hero-hall-interior.png",
        title: "Grand Interiors",
        subtitle: "Luxury for 3000+ Guests",
        description: "Experience the vastness of our fully air-conditioned halls, featuring crystal chandeliers and royal seating that ensures every guest feels honored."
    },
    {
        image: "/gallery/hero-building-night.png",
        title: "Memorable Events",
        subtitle: "Stories That Last Forever",
        description: "From intimate gatherings to massive celebrations, we create the perfect atmosphere for every story."
    }
];

export default function HeroCinematic() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    return (
        <section className="relative h-screen w-full bg-navy-950 overflow-hidden">

            {/* 1. Main Background Layer */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ scale: 1.1, opacity: 1 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Cinematic Gradients - Enhanced for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-navy-950/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/70 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-black/30" /> {/* Overall Dimmer for bright images */}

                    {/* Grain Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* 2. Content Layer */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-3xl pt-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                        >
                            {/* Subtitle Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/50">
                                    <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                                </span>
                                <span className="text-gold-300 tracking-widest uppercase text-sm font-medium">
                                    {slides[currentSlide].subtitle}
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-[0.95] drop-shadow-2xl">
                                {slides[currentSlide].title}
                            </h1>

                            {/* Description */}
                            <p className="text-lg sm:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl mb-12 border-l-4 border-gold-500 pl-6">
                                {slides[currentSlide].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-gold-500 text-navy-950 font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Journey
                                <ArrowRight className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/#virtual-tour"
                            className="flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            <span>Watch Video</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* 3. Interactive Thumbnails (Bottom Right) */}
            <div className="absolute bottom-8 right-4 sm:right-8 z-30 flex gap-4 overflow-x-auto pb-2 sm:pb-0 max-w-full px-4 sm:px-0 scrollbar-hide">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            setIsAutoPlaying(false); // Pause auto-rotation on interaction
                        }}
                        className={`relative w-20 h-14 sm:w-32 sm:h-20 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 group ${currentSlide === index
                            ? "ring-2 ring-gold-400 ring-offset-2 ring-offset-navy-950 scale-105 opacity-100"
                            : "opacity-50 hover:opacity-80 hover:scale-105"
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="128px"
                        />
                        {/* Progress overlay for active slide */}
                        {currentSlide === index && isAutoPlaying && (
                            <div className="absolute bottom-0 left-0 h-1 bg-gold-400 w-full z-10">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    className="h-full w-full bg-gold-400"
                                />
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Decoration: Social/Contact vertically on left */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-8 hidden lg:flex">
                <div className="w-px h-24 bg-gold-500/30 mx-auto" />
                <span className="writing-vertical-rl text-xs text-gold-400 tracking-[0.3em] font-medium uppercase rotate-180">
                    Est. 2012 • Phulwari Sharif
                </span>
                <div className="w-px h-24 bg-gold-500/30 mx-auto" />
            </div>

        </section>
    );
}
