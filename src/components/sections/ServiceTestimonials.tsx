"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Priya & Rahul Sharma",
        event: "Wedding Reception",
        date: "December 2023",
        rating: 5,
        image: "https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?w=100&h=100&fit=crop&crop=faces",
        text: "Royal Grandeur exceeded all our expectations! The decoration was absolutely stunning, and the food received rave reviews from all our guests. The team made our wedding day truly magical.",
        highlight: "Decoration & Catering"
    },
    {
        id: 2,
        name: "Amit & Sneha Verma",
        event: "Grand Wedding",
        date: "November 2023",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        text: "From the initial consultation to the final goodbye, the team was incredibly professional. Our coordinator handled everything so smoothly that we could actually enjoy our own wedding!",
        highlight: "Event Planning"
    },
    {
        id: 3,
        name: "Dr. Rajesh Gupta",
        event: "Engagement Ceremony",
        date: "October 2023",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
        text: "The photography and videography team captured every precious moment beautifully. The cinematic video they created still brings tears to our eyes. Highly recommended!",
        highlight: "Photography"
    },
    {
        id: 4,
        name: "Meera & Vikram Singh",
        event: "Wedding + Mehendi",
        date: "February 2024",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
        text: "We booked them for both our Mehendi and Wedding. The traditional setups they created were picture-perfect. The DJ kept the crowd energized throughout the night!",
        highlight: "Entertainment & Décor"
    },
    {
        id: 5,
        name: "Ankit Kumar",
        event: "Corporate Event",
        date: "January 2024",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
        text: "We hosted our annual company gala here and the team handled 500+ guests flawlessly. The AV setup, catering, and hospitality were all top-notch. Our clients were thoroughly impressed.",
        highlight: "Corporate Events"
    }
];

export default function ServiceTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextTestimonial, 6000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    const current = testimonials[currentIndex];

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-champagne-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-burgundy-200/20 rounded-full blur-3xl" />

            {/* Large Quote Icon */}
            <div className="absolute top-1/4 left-[10%] opacity-5">
                <Quote className="w-64 h-64 text-gold-500" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subheading">Client Stories</span>
                    <h2 className="section-heading mb-6">
                        What Our{" "}
                        <span className="text-gold-600">Clients Say</span>
                    </h2>
                    <p className="text-gold-800/70 text-lg">
                        Don&apos;t just take our word for it. Here&apos;s what families who
                        celebrated with us have to say about their experience.
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gold-100 p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={current.id}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="text-center"
                                >
                                    {/* Service Highlight Badge */}
                                    <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                        ⭐ {current.highlight}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="font-display text-xl md:text-2xl text-navy-800 mb-8 leading-relaxed">
                                        &ldquo;{current.text}&rdquo;
                                    </blockquote>

                                    {/* Rating */}
                                    <div className="flex items-center justify-center gap-1 mb-6">
                                        {[...Array(current.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-gold-500 fill-gold-500"
                                            />
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <img
                                            src={current.image}
                                            alt={current.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-gold-200"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-display font-bold text-navy-800">
                                                {current.name}
                                            </h4>
                                            <p className="text-gold-600 text-sm">
                                                {current.event} • {current.date}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gold-200 flex items-center justify-center text-gold-600 hover:bg-gold-50 hover:text-gold-700 transition-colors z-10"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gold-200 flex items-center justify-center text-gold-600 hover:bg-gold-50 hover:text-gold-700 transition-colors z-10"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`transition-all duration-300 ${index === currentIndex
                                        ? "w-8 h-2 bg-gold-500 rounded-full"
                                        : "w-2 h-2 bg-gold-200 rounded-full hover:bg-gold-300"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "4.9/5", label: "Google Rating" },
                        { value: "500+", label: "5-Star Reviews" },
                        { value: "98%", label: "Would Recommend" },
                        { value: "100%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 bg-white rounded-2xl shadow-md border border-gold-100"
                        >
                            <div className="font-display text-3xl font-bold text-gold-600 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-gold-700/70 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
