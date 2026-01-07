"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";

const faqs = [
    {
        question: "What is the capacity of Alba Banquet Hall?",
        answer: "Our venue can accommodate 115 to 3,000 guests effortlessly. We have intimate spaces for small gatherings and a sprawling lawn for large weddings and grand celebrations.",
    },
    {
        question: "Do you provide catering services?",
        answer: "Yes! We offer in-house catering with a wide variety of cuisines including North Indian, Bihari, Chinese, and Continental options. Outside caterers are also allowed if you prefer your own.",
    },
    {
        question: "What decoration packages do you offer?",
        answer: "We provide in-house decoration services and also allow outside decorators. Our team works with top decorators in Patna to bring your vision to life with floral arrangements, LED lighting, mandap setups, and more.",
    },
    {
        question: "Is parking available at the venue?",
        answer: "Yes, we have dedicated parking space available for vehicles. The venue provides convenient parking for your guests to ensure a hassle-free experience.",
    },
    {
        question: "What is your booking policy?",
        answer: "We require a booking amount of ₹10,000 to confirm your date. F&B taxes of 18% apply. We accept cash, bank transfers, and UPI payments.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 pattern-dots opacity-5" />
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 0% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 100% 100%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 0% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute inset-0"
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
                    >
                        <HelpCircle className="w-4 h-4 text-gold-400" />
                        <span className="text-gold-300 font-medium text-sm">Have Questions?</span>
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                        Frequently Asked <span className="text-gold-400">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-xl mx-auto">
                        Everything you need to know about hosting your event at Alba Banquet Hall
                    </p>
                </motion.div>

                {/* FAQ Grid - Split layout for desktop */}
                <div className="grid lg:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index === faqs.length - 1 && faqs.length % 2 !== 0 ? "lg:col-span-2 lg:max-w-[calc(50%-0.5rem)]" : ""}
                        >
                            <div
                                className={`relative bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden group ${openIndex === index
                                        ? "border-gold-500/50 shadow-lg shadow-gold-500/10"
                                        : "border-white/10 hover:border-gold-500/30"
                                    }`}
                            >
                                {/* Gradient accent line */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 to-gold-600 transition-opacity duration-300 ${openIndex === index ? "opacity-100" : "opacity-0"
                                    }`} />

                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center gap-4 p-5 text-left"
                                >
                                    {/* Number badge */}
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${openIndex === index
                                            ? "bg-gold-gradient text-navy-900"
                                            : "bg-white/10 text-gold-400"
                                        }`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <span className="flex-1 font-medium text-white text-sm sm:text-base pr-2">
                                        {faq.question}
                                    </span>

                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                                                ? "bg-gold-500 text-navy-900"
                                                : "bg-white/10 text-gold-400"
                                            }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-5 pb-5 pl-[4.25rem]">
                                                <p className="text-gray-300 leading-relaxed text-sm">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 flex justify-center"
                >
                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-6 py-3 rounded-full font-semibold shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Still have questions? Contact Us</span>
                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
