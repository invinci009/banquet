"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

const DateAvailabilityChecker = dynamic(() => import("./DateAvailabilityChecker"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-64 bg-gray-50 rounded-2xl animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading Calendar...</div>
        </div>
    )
});

export default function AvailabilitySection() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-champagne-50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-burgundy-100/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 px-4 py-2 rounded-full mb-6"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Calendar className="w-4 h-4 text-gold-600" />
                        <span className="text-gold-700 font-medium text-sm">Real-Time Availability</span>
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
                        Check <span className="text-gold-600">Date Availability</span>
                    </h2>
                    <p className="text-gold-700/70 text-lg max-w-2xl mx-auto">
                        See our live availability calendar and find the perfect date for your celebration
                    </p>
                </motion.div>

                {/* Calendar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-lg mx-auto"
                >
                    <DateAvailabilityChecker />
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-navy-900 font-bold rounded-xl shadow-gold hover:shadow-gold-lg transition-all group"
                    >
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Book Your Date Now
                    </Link>
                    <p className="text-sm text-gray-500 mt-3">
                        Select a date above or contact us for custom arrangements
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
