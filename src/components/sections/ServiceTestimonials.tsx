"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Ali Imran",
        event: "Wedding Function",
        date: "Google Review",
        rating: 5,
        avatar: "AI",
        text: "Located in a beautiful surrounding, the hall was very impressive. Space, facilities, decoration, everything screams high quality. I was a guest there and was mighty impressed with the amenities. Have heard the cost is affordable too. Overall I would highly recommend the hall for functions.",
        highlight: "Impressive Facilities"
    },
    {
        id: 2,
        name: "Azra Aftab",
        event: "Relatives Wedding",
        date: "Google Review",
        rating: 5,
        avatar: "AA",
        text: "Visited this hall for my relatives wedding, liked the ambience. Newly build marriage hall. Very spacious with dedicated parking. There are very few halls in the area with such a large open space. The best thing I liked was that there are separate halls for ladies and gents.",
        highlight: "Spacious Venue"
    },
    {
        id: 3,
        name: "Zurqua Fatima",
        event: "Brother's Wedding",
        date: "Google Review",
        rating: 5,
        avatar: "ZF",
        text: "Booked for my brother's wedding. Very reasonable charges for such huge halls and open ground. Highly recommended for people residing in or near Alba colony, Federal colony, Haroon Colony, etc.",
        highlight: "Affordable Pricing"
    },
    {
        id: 4,
        name: "Himanshu Goel",
        event: "Wedding & Events",
        date: "Google Review",
        rating: 5,
        avatar: "HG",
        text: "This place is just marvellous. It is really spacious and a good venue for any kind of event. If you are thinking about choosing a banquet hall for marriage or parties, this is the right choice.",
        highlight: "Marvellous Venue"
    },
    {
        id: 5,
        name: "Ankit Anand",
        event: "Marriage & Meetings",
        date: "Google Review",
        rating: 4,
        avatar: "AA",
        text: "Place is best for marriage and birthday party and meetings. Big place that good for big arrangement. Staff behaviour is good. So you can consider it for party and big meetings.",
        highlight: "Great for Celebrations"
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
                                        <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center text-navy-900 font-bold text-lg">
                                            {current.avatar}
                                        </div>
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
                        { value: "4.8/5", label: "Google Rating" },
                        { value: "20+", label: "5-Star Reviews" },
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
