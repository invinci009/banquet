"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Star, Award, Users, Calendar } from "lucide-react";
import { useRef } from "react";

const stats = [
    { icon: Calendar, value: "1500+", label: "Events Catered" },
    { icon: Users, value: "50K+", label: "Happy Guests" },
    { icon: Star, value: "4.9", label: "Rating" },
    { icon: Award, value: "12+", label: "Years Experience" },
];

export default function ServicesHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative pt-32 pb-24 lg:pb-32 bg-navy-900 overflow-hidden min-h-[85vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/gallery/catering-service.webp"
                    alt="Premium Catering Service"
                    className="w-full h-full object-cover opacity-70"
                />
                {/* Gradient Overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 pattern-dots opacity-10" />
                <motion.div
                    style={{ y }}
                    className="absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                    className="absolute bottom-20 left-20 w-80 h-80 bg-burgundy-700/10 rounded-full blur-3xl"
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-full h-full border border-gold-500/30 rounded-full" />
                    <div className="absolute inset-10 border border-gold-500/20 rounded-full" />
                    <div className="absolute inset-20 border border-gold-500/10 rounded-full" />
                </motion.div>

                {/* Floating Sparkles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gold-400 rounded-full"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 80}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Sparkles className="w-5 h-5 text-gold-400" />
                        <span className="text-gold-300 font-medium">Be a Guest on Your Party!</span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Premium{" "}
                        <span className="relative">
                            <span className="text-gold-400">Catering Services</span>
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        From intimate family gatherings to grand weddings, we bring you
                        <span className="text-gold-400 font-medium"> authentic taste</span>,
                        <span className="text-gold-400 font-medium"> elegant presentation</span>, and
                        <span className="text-gold-400 font-medium"> reliable service</span>.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a
                            href="/contact"
                            className="btn-primary group"
                        >
                            <span className="relative z-10">Get Free Consultation</span>
                        </a>
                        <a
                            href="tel:+919234953085"
                            className="btn-secondary"
                        >
                            Call Us
                        </a>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300">
                                <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                                <div className="font-display text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>

                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gold-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-3 bg-gold-400 rounded-full"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
