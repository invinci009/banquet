"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Amit Kumar",
        role: "Wedding Event",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB3k8Z59SbIDh2BG59DRD057bAlOdolCevbw6KGrlZMjmHBRAfzvJhtmQlpVvFMdBiuDG_J82qbGNYxOPQt-p48HpzOrgi70a8lOOKlSZvmne3uvqREMp9CiWpExv24LfneJe7vXu3Wpfw__ZoYD0pZiDyM-yoXK3fAjOvegMd4s1xpMDEJZI-LWHzdT4S-_f_zkEgwoQ_L_bO5B4tkLQA4g8r6bEpFYyV_SAqwEJPD2qjB3vlJRhz422Hh41VJ_4gIXuoGZGBqccn",
        quote: "The team at Royal Grandeur made my daughter's wedding absolutely magical. The food was the talk of the town! Every detail was perfect.",
        rating: 5,
    },
    {
        name: "Priya Singh",
        role: "Corporate Meet",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJUP-UHtZKn23_0I4lq2k1jN2hQuZewp7BSN_V4kmpxQiKXFlm1QtCNxNauu9KHJTVqKU1g9lBKVCjDNs-zPjV3Lm0QssHPUh9eDLzTFrZfZ0mYvxpLyGWIULRSeq2xSbj4It9rU66P5K73k1k-FtRYhhaC4pZozLT91FpdTdz2INzVPVqsoQFwGsFf2Zb5ej8ELm9Tnt6sIly--zuW_dQcY5hx8NWM9QA7gKMPgXknFwXTuW_I-_hI9fhwVXMk97HHdv5eDxdd1bg",
        quote: "Excellent venue for corporate seminars. The AV setup was flawless and the staff was extremely professional throughout.",
        rating: 5,
    },
    {
        name: "Rahul Verma",
        role: "Anniversary Party",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJIooBQed3DDl-739xuUrlBN1nNnLcxLQj2EHcNrrRm8veG0FP65gmgjnDem6RefzYMW0c3VnyyiaPIZFhQnEg0P4jyRTmF41E8QJr33BPupCkeqWJ1x92Kz2YpI9BwfStDfZfTXrOL5fnb_S3JdxAA9Wphcu4PAHCYGGVtKeqAOlYpb_7dhQJuH68miRL3tdeJCtl9kda0kQf4jxKkXQtGPBjBuhvmFLkeZOdAXcEE8FFb4I4K6NuM7dAnNbwrP0k2jAMj4cv65wa",
        quote: "A hidden gem in Patna. We hosted our anniversary party here and the decoration was exactly as we imagined.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-b from-gold-50 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gold-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold-300/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subheading">Testimonials</span>
                    <h2 className="section-heading mb-6">
                        What Our <span className="text-gold-600">Guests Say</span>
                    </h2>
                    <p className="text-gold-700/70 text-lg">
                        Don&apos;t just take our word for it. Hear from the families and
                        organizations who trusted us with their special moments.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-gold transition-all duration-500 hover:-translate-y-2 border border-gold-100 hover:border-gold-300">
                                {/* Quote Icon */}
                                <div className="absolute -top-4 left-8">
                                    <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                                        <Quote className="w-5 h-5 text-gold-900" />
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4 pt-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-gold-500 fill-gold-500"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gold-700/80 leading-relaxed mb-6 italic">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gold-100">
                                    <div
                                        className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-gold-300"
                                        style={{ backgroundImage: `url("${testimonial.image}")` }}
                                    />
                                    <div>
                                        <p className="font-display font-semibold text-gold-800">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-gold-600">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Hover Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
