"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

const reviews = [
    {
        name: "Priya Sharma",
        rating: 5,
        date: "2 weeks ago",
        text: "Absolutely stunning venue! Our wedding was magical. The staff went above and beyond to make our day perfect. The decoration was breathtaking and food was delicious!",
        avatar: "PS",
    },
    {
        name: "Rahul Verma",
        rating: 5,
        date: "1 month ago",
        text: "Best banquet hall in Patna! Hosted my daughter's reception here and it was flawless. The coordination team is very professional and responsive.",
        avatar: "RV",
    },
    {
        name: "Anjali Singh",
        rating: 5,
        date: "3 weeks ago",
        text: "We celebrated our 25th anniversary here. The ambiance, service, and attention to detail exceeded our expectations. Highly recommend!",
        avatar: "AS",
    },
    {
        name: "Vikram Patel",
        rating: 5,
        date: "2 months ago",
        text: "Organized our company annual event at Royal Grandeur. The team handled everything professionally. Great AV setup and excellent catering.",
        avatar: "VP",
    },
    {
        name: "Meera Gupta",
        rating: 5,
        date: "1 month ago",
        text: "Dream venue for our engagement ceremony! The mandap decoration was exactly what we wanted. Thank you team for making it special.",
        avatar: "MG",
    },
];

export default function GoogleReviews() {
    return (
        <section className="py-16 lg:py-24 bg-navy-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pattern-dots opacity-10" />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* Google Rating Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl mb-6"
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <div className="flex items-center gap-1">
                            <span className="text-white font-bold text-xl">4.9</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                                ))}
                            </div>
                        </div>
                        <span className="text-gray-400 text-sm">250+ Reviews</span>
                    </motion.div>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        What Our <span className="text-gold-400">Guests Say</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real experiences from families who celebrated their special moments with us
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-all"
                        >
                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-gold-500/30 mb-4" />

                            {/* Review text */}
                            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            {/* Reviewer info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-navy-900 font-bold text-sm">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm">{review.name}</h4>
                                        <p className="text-gray-500 text-xs">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA to Google */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <a
                        href="https://g.page/r/royalgrandeurpatna/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
                    >
                        <MapPin className="w-4 h-4" />
                        See all reviews on Google Maps
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
