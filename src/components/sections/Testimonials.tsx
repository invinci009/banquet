"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Priya & Rohan Sharma",
        role: "Wedding, Dec 2024",
        image: "https://images.unsplash.com/photo-1623366302587-bdbd9a1f4c41?auto=format&fit=crop&w=150&q=80",
        quote: "Outstanding venue! Our wedding in December was flawless. The hall decoration near the stage was breathtaking, and the food live counters were a huge hit with our guests.",
        rating: 5,
    },
    {
        name: "Vikram Malhotra",
        role: "Tech Summit, Patna",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
        quote: "We hosted our annual dealer meet here. The location near Gandhi Maidan made it easy for everyone to reach. Professional staff and excellent AC quality.",
        rating: 5,
    },
    {
        name: "Anjali Devi",
        role: "Daughter's Ring Ceremony",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        quote: "A hidden gem for luxury events. The garden area was perfect for the evening party. Highly recommended for anyone looking for class and elegance.",
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
                    <span className="section-subheading">Real Stories</span>
                    <h2 className="section-heading mb-6">
                        Memories Created <span className="text-gold-600">Here</span>
                    </h2>
                    <p className="text-gold-800/80 text-lg">
                        The true measure of our success is the happiness of the families we serve.
                        Read their experiences.
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
