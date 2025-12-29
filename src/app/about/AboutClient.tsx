"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, Heart, Star, Users, Award, Calendar, Sparkles, ArrowRight, Phone, Quote, MapPin, Shield, Utensils } from "lucide-react";
import Image from "next/image";

export default function AboutClient() {
    return (
        <main className="bg-white">
            <Header />

            {/* ==================== HERO ==================== */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-navy-900" />

                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/gallery/building-front-lights.webp"
                        alt="Alba Banquet Hall"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/50" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />

                    {/* Floating Sparkles */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gold-400 rounded-full"
                            style={{
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 20}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                            >
                                <Sparkles className="w-4 h-4 text-gold-400" />
                                <span className="text-gold-300 text-sm font-medium">Since 2012 • Phulwari Sharif</span>
                            </motion.div>

                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                                Where Every
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                                    Celebration
                                </span>
                                <br />
                                Becomes a Legacy
                            </h1>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                For over a decade, we've been the canvas for Patna's most treasured moments — weddings, receptions, and celebrations that become lifelong memories.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-full transition-all shadow-gold hover:shadow-gold-lg"
                                >
                                    Plan Your Event
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+919234953085"
                                    className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-gold-400 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-full transition-all"
                                >
                                    <Phone className="w-5 h-5" /> Call Us
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 pt-10 border-t border-white/10"
                            >
                                {[
                                    { value: "12+", label: "Years" },
                                    { value: "1500+", label: "Events" },
                                    { value: "4.9★", label: "Rating" },
                                ].map((item, i) => (
                                    <div key={i} className="text-center">
                                        <div className="font-display text-2xl font-bold text-gold-400">{item.value}</div>
                                        <div className="text-gray-400 text-sm">{item.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Image with Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            {/* Gold Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 via-gold-500/10 to-gold-400/20 rounded-3xl blur-sm" />
                            <div className="absolute -inset-px bg-gradient-to-br from-gold-400/40 to-gold-600/20 rounded-3xl" />

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/gallery/building-exterior.webp"
                                    alt="Alba Banquet Hall Exterior"
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-[500px]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gold-100"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                                        <Crown className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-navy-900 font-bold text-sm">Premium Venue</p>
                                        <p className="text-gray-500 text-xs">Trusted by Families</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/50"
                >
                    <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-2 bg-gold-400 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </section>


            {/* ==================== TRUST STATS ==================== */}
            <section className="py-10 md:py-16 bg-navy-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                        {[
                            { icon: Calendar, value: "12+", label: "Years of Excellence" },
                            { icon: Heart, value: "1500+", label: "Events Hosted" },
                            { icon: Users, value: "50K+", label: "Happy Guests" },
                            { icon: Star, value: "4.9", label: "Google Rating" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-gold-400 mx-auto mb-2 md:mb-3" />
                                <div className="font-display text-2xl md:text-4xl font-bold text-white">{stat.value}</div>
                                <p className="text-gray-400 text-xs md:text-sm mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== WHO WE ARE ==================== */}
            <section className="py-12 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Image Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/gallery/stage-decor.webp" alt="Stage Decor at Alba Banquet Hall" width={300} height={200} sizes="(max-width: 768px) 45vw, 300px" loading="lazy" className="object-cover w-full h-[150px] md:h-[200px]" />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/gallery/reception-hall.webp" alt="Reception Hall" width={300} height={180} sizes="(max-width: 768px) 45vw, 300px" loading="lazy" className="object-cover w-full h-[130px] md:h-[180px]" />
                                </div>
                            </div>
                            <div className="pt-4 md:pt-8">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/gallery/building-night-lights.webp" alt="Alba Banquet Hall at Night" width={300} height={350} sizes="(max-width: 768px) 45vw, 300px" loading="lazy" className="object-cover w-full h-[250px] md:h-[350px]" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
                                Patna's Most Trusted <br />Celebration Destination
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    <strong className="text-navy-900">Alba Banquet Hall</strong> is more than a venue — it's where families come together to celebrate life's most precious moments. Located in the heart of Phulwari Sharif, we've been privileged to host weddings, receptions, and milestone events for thousands of families across Bihar.
                                </p>
                                <p>
                                    Our philosophy is simple: treat every guest like family, and every event like our own. From our award-winning catering to our stunning décor, every detail is crafted with love and precision.
                                </p>
                            </div>

                            {/* USPs */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { icon: MapPin, text: "Prime Location" },
                                    { icon: Utensils, text: "In-House Catering" },
                                    { icon: Shield, text: "Trusted by 1500+ Families" },
                                    { icon: Award, text: "Award-Winning Service" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-navy-800">
                                        <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center">
                                            <item.icon className="w-4 h-4 text-gold-600" />
                                        </div>
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================== FOUNDER'S MESSAGE ==================== */}
            <section className="py-12 lg:py-28 bg-champagne-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-400/30 rounded-full" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Quote className="w-12 h-12 text-gold-400 mx-auto mb-6" />
                        <h2 className="font-display text-xl md:text-3xl lg:text-4xl text-navy-900 leading-relaxed mb-6 md:mb-8">
                            "When we started Alba in 2012, we had one dream — to give every family in Patna a venue where their celebrations feel <span className="text-gold-600">truly royal</span>. Today, seeing thousands of happy faces walk through our doors, I can say that dream has become our reality."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gold-200 flex items-center justify-center">
                                <Crown className="w-8 h-8 text-gold-600" />
                            </div>
                            <div className="text-left">
                                <p className="font-display text-lg font-bold text-navy-900">The Alba Family</p>
                                <p className="text-gold-700 text-sm">Founders, Alba Banquet Hall</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==================== WHY CHOOSE US ==================== */}
            <section className="py-12 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-14">
                        <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest">Our Promise</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mt-3">Why Families Trust Alba</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                        {[
                            {
                                icon: Crown,
                                title: "Royal Hospitality",
                                desc: "Every guest is treated like royalty. Our dedicated team ensures your event is flawless from start to finish.",
                                color: "from-amber-100 to-gold-200"
                            },
                            {
                                icon: Heart,
                                title: "Personal Touch",
                                desc: "We understand the emotions behind every celebration. Your joy is our priority, and we plan every detail around it.",
                                color: "from-rose-100 to-pink-200"
                            },
                            {
                                icon: Sparkles,
                                title: "Premium Quality",
                                desc: "From our gourmet cuisine to elegant décor, we never compromise. Only the best for your special day.",
                                color: "from-violet-100 to-purple-200"
                            },
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-gold-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center mb-5`}>
                                    <val.icon className="w-7 h-7 text-navy-800" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-navy-900 mb-3">{val.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== CTA ==================== */}
            <section className="relative py-16 md:py-24 bg-navy-900 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/gallery/hall-seating.webp" alt="Hall Seating" fill sizes="100vw" loading="lazy" className="object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-10 h-10 text-gold-400 mx-auto mb-6" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Start Planning <br />Your Special Day?
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                            Let's turn your vision into reality. Schedule a visit to experience Alba Banquet Hall in person.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-full transition-all flex items-center gap-2 shadow-gold"
                            >
                                Schedule a Visit
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+919234953085"
                                className="px-8 py-4 border-2 border-white/20 hover:border-gold-400 text-white font-semibold rounded-full transition-all"
                            >
                                Call +91 92349 53085
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
