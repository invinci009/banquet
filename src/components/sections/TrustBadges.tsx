"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Star, Users, Clock } from "lucide-react";

const badges = [
    {
        icon: Shield,
        title: "Verified Venue",
        description: "Licensed & Insured",
        color: "from-emerald-400 to-teal-500",
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Best Venue 2023",
        color: "from-amber-400 to-orange-500",
    },
    {
        icon: Star,
        title: "5-Star Rated",
        description: "4.9/5 on Google",
        color: "from-gold-400 to-gold-600",
    },
    {
        icon: Users,
        title: "5000+ Events",
        description: "Successfully Hosted",
        color: "from-violet-400 to-purple-500",
    },
    {
        icon: Clock,
        title: "15+ Years",
        description: "Of Excellence",
        color: "from-rose-400 to-pink-500",
    },
    {
        icon: CheckCircle,
        title: "100% Safe",
        description: "Fire & Safety Certified",
        color: "from-blue-400 to-cyan-500",
    },
];

export default function TrustBadges() {
    return (
        <section className="py-12 lg:py-16 bg-champagne-50 border-y border-gold-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-navy-800 font-display text-xl font-bold">
                        Why Families Trust Us
                    </h3>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={badge.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="group bg-white rounded-xl p-4 shadow-sm border border-gold-100 hover:shadow-lg hover:border-gold-300 transition-all text-center"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-md`}
                            >
                                <badge.icon className="w-5 h-5 text-white" />
                            </motion.div>
                            <h4 className="font-bold text-navy-800 text-sm mb-0.5">{badge.title}</h4>
                            <p className="text-gray-500 text-xs">{badge.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
