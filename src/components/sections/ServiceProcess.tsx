"use client";

import { motion } from "framer-motion";
import {
    Phone,
    CalendarCheck,
    Palette,
    FileCheck,
    PartyPopper,
    ChevronRight
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Phone,
        title: "Initial Consultation",
        description: "Share your vision with us. We'll discuss your requirements, preferences, and budget to understand exactly what you're looking for.",
        duration: "30 mins"
    },
    {
        number: "02",
        icon: CalendarCheck,
        title: "Venue Visit & Date Lock",
        description: "Visit our stunning venues, experience the ambiance firsthand, and lock your preferred date to secure your celebration.",
        duration: "1-2 hours"
    },
    {
        number: "03",
        icon: Palette,
        title: "Customization & Planning",
        description: "Work with our expert planners to customize every detail - from décor themes and menus to entertainment and photography.",
        duration: "1-2 weeks"
    },
    {
        number: "04",
        icon: FileCheck,
        title: "Finalization & Contract",
        description: "Review the complete plan, finalize the budget, and sign the contract. Your dedicated coordinator is now assigned.",
        duration: "1 day"
    },
    {
        number: "05",
        icon: PartyPopper,
        title: "Your Perfect Event",
        description: "Sit back and enjoy while we bring your dream celebration to life. Every detail executed to perfection.",
        duration: "D-Day"
    }
];

export default function ServiceProcess() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-champagne-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-burgundy-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subheading">How It Works</span>
                    <h2 className="section-heading mb-6">
                        Your Journey to a{" "}
                        <span className="text-gold-600">Perfect Event</span>
                    </h2>
                    <p className="text-gold-800/70 text-lg">
                        From your first call to the grand celebration, we make the
                        entire process seamless, stress-free, and enjoyable.
                    </p>
                </motion.div>

                {/* Process Timeline */}
                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 -translate-y-1/2 rounded-full" />

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="relative group"
                            >
                                {/* Arrow between steps - Mobile/Tablet */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2">
                                        <ChevronRight className="w-6 h-6 text-gold-400 rotate-90" />
                                    </div>
                                )}

                                <div className="text-center bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-gold-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300">
                                    {/* Step Number & Icon */}
                                    <div className="relative inline-flex flex-col items-center mb-5">
                                        {/* Icon Circle */}
                                        <div className="relative w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="w-7 h-7 text-navy-900" />

                                            {/* Subtle glow on hover */}
                                            <div className="absolute inset-0 rounded-full bg-gold-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
                                        </div>

                                        {/* Step Number Badge */}
                                        <div className="absolute -bottom-2.5 px-3 py-1 bg-navy-800 text-gold-400 text-[10px] font-bold rounded-full shadow-md border border-gold-500/40">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-4">
                                        <h3 className="font-display text-lg font-bold text-navy-800 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gold-700/70 text-sm leading-relaxed mb-4">
                                            {step.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-gold-gradient text-navy-900 rounded-full font-semibold shadow-sm">
                                            ⏱️ {step.duration}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-gold-700/70 mb-6">
                        Ready to begin your journey? Let&apos;s create something magical together.
                    </p>
                    <a
                        href="/contact"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span className="relative z-10">Start Your Journey</span>
                        <ChevronRight className="w-5 h-5 relative z-10" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
