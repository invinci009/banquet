"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, CalendarCheck, Gem } from "lucide-react";

const highlights = [
    {
        icon: Award,
        title: "Award Winning",
        description: "Recognized as the best banquet hall in Bihar",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Professional staff dedicated to your celebration",
    },
    {
        icon: CalendarCheck,
        title: "Seamless Planning",
        description: "End-to-end event management services",
    },
    {
        icon: Gem,
        title: "Premium Quality",
        description: "Finest amenities and elegant decor",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-champagne-100/50 to-transparent" />
            <div className="absolute -left-40 top-1/2 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            {/* Main Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <div
                                    className="aspect-[4/5] bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMOmsdP-QJAaW36RKBASM-Qa_UcbdwPWOdiFbrki3XIk9Ouh1hYkh_8ju3g1KWXtt5rR49JWfZHoGPPFjI-y-kA7dhfOk-YUhk5JI2cyUwbGxvw0m_ozABFGqcnxoD5wkWWF8I65z8MmdNfDSbp-tIK_Q1wUsWuoLAEGSYkjKcjUO4tTRBttQDfom4JDGpH5-dlu2OLFS4caZw0oLr-SsQHznsl0NbYioJUG6tCOL5sgKM3KzZeyZo1UsG-vfB0BqqpV2p01y4Hj_v")`,
                                    }}
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-gold p-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center">
                                        <span className="text-2xl font-bold text-navy-900">15+</span>
                                    </div>
                                    <div>
                                        <p className="text-navy-800 font-semibold">Years of</p>
                                        <p className="text-gold-600 font-bold">Excellence</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Decorative Frame */}
                        <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-gold-300 rounded-2xl" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-subheading">Welcome to Royal Grandeur</span>
                        <h2 className="section-heading mb-6">
                            Creating Timeless Memories
                            <span className="text-gold-600"> Since 2010</span>
                        </h2>

                        <div className="luxury-divider justify-start my-8">
                            <Gem className="w-6 h-6 text-gold-500" />
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Royal Grandeur Banquet Hall stands as Patna&apos;s premier venue for
                            celebrations that deserve nothing less than perfection. Our magnificent
                            halls, adorned with crystal chandeliers and elegant décor, provide the
                            ideal backdrop for your most precious moments.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-10">
                            From intimate gatherings to grand receptions, our dedicated team of
                            professionals ensures every detail is meticulously crafted to exceed
                            your expectations. We blend traditional hospitality with modern luxury
                            to create experiences that linger in hearts forever.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-gold-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-navy-800 text-sm">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
