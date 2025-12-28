"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
    {
        question: "What is the capacity of Alba Banquet Hall?",
        answer: "Our venue can accommodate 115 to 3,000 guests effortlessly. We have intimate spaces for small gatherings and a sprawling lawn for large weddings and grand celebrations.",
    },
    {
        question: "What types of events can be hosted here?",
        answer: "Alba Banquet Hall is ideal for Weddings, Receptions, Engagement ceremonies, Sangeet, Mehndi ceremonies, Baby Showers, Birthday parties, Corporate events, and other celebrations.",
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
        question: "Are there changing rooms available?",
        answer: "Yes, we provide 2 complimentary air-conditioned changing rooms for the bride and groom to prepare for their special day in comfort.",
    },
    {
        question: "Is non-veg food and hawan allowed?",
        answer: "Yes, non-vegetarian food is allowed at the venue. Hawan and traditional ceremonies are permitted. Baarat and overnight weddings are also allowed.",
    },
    {
        question: "What is your booking policy?",
        answer: "We require a booking amount of ₹10,000 to confirm your date. F&B taxes of 18% apply. We accept cash, bank transfers, and UPI payments.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-champagne-50 to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gold-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 px-4 py-2 rounded-full mb-4"
                    >
                        <HelpCircle className="w-4 h-4 text-gold-600" />
                        <span className="text-gold-700 font-medium text-sm">Have Questions?</span>
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
                        Frequently Asked <span className="text-gold-600">Questions</span>
                    </h2>
                    <p className="text-gold-700/70 text-lg max-w-2xl mx-auto">
                        Everything you need to know about hosting your event at Alba Banquet Hall
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div
                                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? "border-gold-400 shadow-gold"
                                    : "border-gray-100 hover:border-gold-200 shadow-lg"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                                >
                                    <span className="font-semibold text-navy-800 pr-4 text-sm sm:text-base">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                                            ? "bg-gold-500 text-white"
                                            : "bg-gold-100 text-gold-600"
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
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                                                <div className="pt-4 border-t border-gold-100">
                                                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                                        {faq.answer}
                                                    </p>
                                                </div>
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
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-4 rounded-2xl">
                        <Sparkles className="w-5 h-5 text-gold-400" />
                        <span className="text-sm sm:text-base">Still have questions?</span>
                        <a href="/contact" className="font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-2">
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
