"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crown, Heart, Star, Users, Award, Calendar, Sparkles, ChefHat, Music, Camera, Shield, Clock, ArrowRight } from "lucide-react";
import { useRef } from "react";

const stats = [
    { number: "15+", label: "Years of Excellence", icon: Calendar },
    { number: "5000+", label: "Events Hosted", icon: Heart },
    { number: "50+", label: "Expert Staff", icon: Users },
    { number: "100%", label: "Client Satisfaction", icon: Star },
];

const timeline = [
    { year: "2010", title: "The Beginning", description: "Royal Grandeur was established with a vision to create unforgettable celebrations." },
    { year: "2014", title: "First Expansion", description: "Expanded our venue with a second grand hall to accommodate growing demand." },
    { year: "2018", title: "Award Winning", description: "Recognized as Bihar's Premier Wedding Venue by the Hospitality Excellence Awards." },
    { year: "2022", title: "Modern Renovation", description: "Complete renovation with state-of-the-art facilities and contemporary elegance." },
    { year: "2024", title: "Continuing Legacy", description: "Celebrating thousands of successful events and countless happy memories." },
];

const values = [
    { icon: Crown, title: "Excellence", description: "We strive for perfection in every detail.", color: "from-amber-400 to-orange-500" },
    { icon: Heart, title: "Passion", description: "Our love for celebrations drives everything we do.", color: "from-rose-400 to-pink-500" },
    { icon: Shield, title: "Trust", description: "Building lasting relationships through dedication.", color: "from-emerald-400 to-teal-500" },
    { icon: Star, title: "Innovation", description: "Evolving with trends while honoring traditions.", color: "from-violet-400 to-purple-500" },
];

const services = [
    { icon: ChefHat, title: "Gourmet Cuisine" },
    { icon: Music, title: "Entertainment" },
    { icon: Camera, title: "Photography" },
    { icon: Sparkles, title: "Decoration" },
    { icon: Clock, title: "Planning" },
    { icon: Award, title: "Premium Service" },
];

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <main ref={containerRef} className="relative bg-white overflow-hidden">
            <Header />

            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute top-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <motion.div style={{ y: y2 }} className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-burgundy-700/5 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden">
                {/* Animated Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 pattern-dots opacity-20" />
                    {/* Floating Particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gold-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 1, 0.2],
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

                {/* Gradient Orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-gold-500/20 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-burgundy-700/20 to-transparent rounded-full blur-3xl"
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
                    {/* Animated Crown */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        className="relative inline-block mb-8"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-24 h-24 rounded-full border-2 border-dashed border-gold-400/30"
                        />
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-gold-lg">
                            <Crown className="w-12 h-12 text-navy-900" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Where Dreams Become
                            <br />
                            <span className="relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                                    Reality
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                />
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        For over 15 years, Royal Grandeur has been Patna&apos;s most trusted destination
                        for weddings, celebrations, and unforgettable moments.
                    </motion.p>

                    {/* Animated Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-gold-500/50 transition-colors">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                                    </motion.div>
                                    <div className="font-display text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-6 h-10 rounded-full border-2 border-gold-400/50 flex items-start justify-center p-2"
                        >
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-3 bg-gold-400 rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 lg:py-32 bg-gradient-to-b from-champagne-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block text-gold-600 font-medium text-sm uppercase tracking-widest bg-gold-100 px-4 py-2 rounded-full mb-4"
                        >
                            Our Journey
                        </motion.span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800">
                            A Legacy of <span className="text-gold-600">Excellence</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Animated Timeline Line */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400 via-gold-500 to-gold-400 origin-top hidden md:block"
                        />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                                    >
                                        <span className="inline-block text-gold-500 font-display text-3xl font-bold bg-gold-50 px-4 py-1 rounded-lg">{item.year}</span>
                                        <h3 className="text-navy-800 font-bold text-2xl mt-4">{item.title}</h3>
                                        <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
                                    </motion.div>
                                </div>

                                {/* Animated Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                    className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
                                >
                                    <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                </motion.div>

                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -right-1/2 w-full h-full border border-gold-500/10 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-gold-500/10 rounded-full"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block text-gold-400 font-medium text-sm uppercase tracking-widest bg-gold-500/10 px-4 py-2 rounded-full mb-4">
                            What Drives Us
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                            Our Core Values
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl blur-xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-gold-500/50 transition-all h-full">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <value.icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-white font-bold text-xl mb-3">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-champagne-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block text-gold-600 font-medium text-sm uppercase tracking-widest bg-gold-100 px-4 py-2 rounded-full mb-4">
                            Complete Solutions
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800">
                            Everything Under One Roof
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, type: "spring" }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gold-300 transition-all text-center"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mb-4 group-hover:from-gold-400 group-hover:to-gold-600 transition-all"
                                >
                                    <service.icon className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                                </motion.div>
                                <h3 className="text-navy-800 font-bold text-sm">{service.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-20" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

                {/* Animated Rings */}
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/20 rounded-full"
                />
                <motion.div
                    animate={{ scale: [1.5, 1, 1.5], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold-500/20 rounded-full"
                />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block mb-8"
                        >
                            <Sparkles className="w-12 h-12 text-gold-400" />
                        </motion.div>

                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Create Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Perfect Celebration</span>?
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                            Let us help you plan an event that will be remembered for generations.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-900 font-bold rounded-xl transition-all flex items-center gap-2 shadow-gold"
                            >
                                Schedule a Tour
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="tel:+916205708606"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/30 hover:border-gold-400 hover:bg-gold-400/10 text-white font-semibold rounded-xl transition-all"
                            >
                                Call Us Now
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
