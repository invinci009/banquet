"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, BadgeCheck } from "lucide-react";

const reviews = [
    {
        name: "Ali Imran",
        rating: 5,
        date: "Local Guide",
        text: "Located in a beautiful surrounding, the hall was very impressive. Space, facilities, decoration, everything screams high quality. I was a guest there and was mighty impressed with the amenities. Have heard the cost is affordable too. Overall I would highly recommend the hall for functions.",
        avatar: "AI",
        verified: true,
    },
    {
        name: "Azra Aftab",
        rating: 5,
        date: "Via Google",
        text: "Visited this hall for my relatives wedding, liked the ambience. Newly build marriage hall. Very spacious with dedicated parking. There are very few halls in the area with such a large open space. The best thing I liked was that there are separate halls for ladies and gents.",
        avatar: "AA",
        verified: true,
    },
    {
        name: "Zurqua Fatima",
        rating: 5,
        date: "Via Google",
        text: "Booked for my brother's wedding. Very reasonable charges for such huge halls and open ground. Highly recommended for people residing in or near Alba colony, Federal colony, Haroon Colony, etc.",
        avatar: "ZF",
        verified: true,
    },
    {
        name: "Himanshu Goel",
        rating: 5,
        date: "Local Guide",
        text: "This place is just marvellous. It is really spacious and a good venue for any kind of event. If you are thinking about choosing a banquet hall for marriage or parties, this is the right choice.",
        avatar: "HG",
        verified: true,
    },
    {
        name: "Ankit Anand",
        rating: 4,
        date: "Via Google",
        text: "Place is best for marriage and birthday party and meetings. Big place that good for big arrangement. Staff behaviour is good. So you can consider it for party and big meetings.",
        avatar: "AA",
        verified: false,
    },
];

// Duplicate reviews for seamless loop
const duplicatedReviews = [...reviews, ...reviews];

export default function GoogleReviews() {
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-champagne-50 to-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 pattern-dots opacity-5" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    {/* Google Rating Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 bg-white border border-gold-200 px-6 py-3 rounded-2xl shadow-lg mb-6"
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-2">
                                <span className="text-navy-900 font-bold text-2xl">4.2</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-gold-400 text-gold-400' : 'fill-gold-200 text-gold-200'}`} />
                                    ))}
                                </div>
                            </div>
                            <span className="text-gray-500 text-xs">Based on 20+ reviews</span>
                        </div>
                    </motion.div>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-3">
                        What Our <span className="text-gold-600">Guests Say</span>
                    </h2>
                    <p className="text-gray-600 text-base max-w-xl mx-auto">
                        Real experiences from families who celebrated their special moments with us
                    </p>
                </motion.div>

                {/* Auto-scrolling Reviews Marquee */}
                <div className="relative">
                    {/* Gradient fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-champagne-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-champagne-50 to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 py-4"
                        animate={{ x: [0, -50 * reviews.length * 6] }}
                        transition={{
                            x: {
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedReviews.map((review, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-[320px] sm:w-[380px]"
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="h-full bg-white rounded-2xl border border-gold-100 p-6 shadow-lg hover:shadow-xl hover:border-gold-300 transition-all duration-300">
                                    {/* Quote icon */}
                                    <Quote className="w-8 h-8 text-gold-300 mb-3" />

                                    {/* Review text */}
                                    <p className="text-gray-700 leading-relaxed mb-5 text-sm line-clamp-4">
                                        &ldquo;{review.text}&rdquo;
                                    </p>

                                    {/* Reviewer info */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gold-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                {review.avatar}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1.5">
                                                    <h4 className="text-navy-800 font-semibold text-sm">{review.name}</h4>
                                                    {review.verified && (
                                                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                                                    )}
                                                </div>
                                                <p className="text-gray-400 text-xs">{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA to Google */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <a
                        href="https://www.google.com/maps/place/Alba+Banquet+Hall/@25.5693995,85.0709069,799m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f2a82fc8a27df1:0x5a02aaa304f08eba!8m2!3d25.5693995!4d85.0734818!16s%2Fg%2F11ggs8yxvb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors group"
                    >
                        <span>See all reviews on Google Maps</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
