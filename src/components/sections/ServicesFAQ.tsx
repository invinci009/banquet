"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
    {
        question: "How far in advance should we book the venue and services?",
        answer: "We recommend booking at least 6-12 months in advance for peak wedding season (November-February). For off-season events, 3-6 months is usually sufficient. However, the earlier you book, the better availability you'll have for your preferred date and time."
    },
    {
        question: "Can we customize the catering menu to fit our dietary requirements?",
        answer: "Absolutely! Our chefs specialize in creating customized menus for all dietary needs including vegetarian, vegan, Jain, and specific allergen-free options. We also offer fusion menus combining different cuisines. A tasting session is included to finalize your menu."
    },
    {
        question: "What is the guest capacity for your venues?",
        answer: "Our venues can accommodate events from intimate gatherings of 50 guests to grand celebrations of 2000+ guests. We have multiple halls - The Grand Mandap (2000 pax), Royal Reception Hall (1000 pax), and Crystal Lounge (500 pax). Outdoor lawn space for 1500+ is also available."
    },
    {
        question: "Do you provide decoration themes or can we bring our own decorator?",
        answer: "We have an in-house decoration team with 100+ theme options from traditional to contemporary. However, you're welcome to bring your own decorators. We simply need coordination details to ensure smooth execution and venue guidelines adherence."
    },
    {
        question: "What is your payment structure and cancellation policy?",
        answer: "We require a 30% advance to confirm booking, 40% one month before the event, and 30% on the event day. For cancellations, bookings cancelled 3+ months prior receive 80% refund, 1-3 months prior receive 50% refund, and less than 1 month receive no refund but date change options are available."
    },
    {
        question: "Do you provide accommodation for guests?",
        answer: "Yes! We have partnered with premium hotels nearby and can arrange group bookings at special rates. We also have 10 luxury rooms within our property for the immediate family. Transportation between hotels and venue can be arranged."
    },
    {
        question: "What services are included in your wedding packages?",
        answer: "Our packages are fully customizable, but typically include venue rental, basic decoration, catering, AC & lighting, sound system, parking, and a dedicated coordinator. Premium packages add photography, DJ, elaborate décor, valet parking, and more."
    },
    {
        question: "Can we visit the venue before booking?",
        answer: "Of course! We encourage venue visits. You can book a slot through our website or call us directly. During your visit, you'll get a complete tour, meet our team, and discuss your requirements. We also offer virtual tours for those who can't visit in person."
    }
];

export default function ServicesFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-50 to-transparent" />
            <div className="absolute -left-20 top-1/3 w-64 h-64 bg-burgundy-100/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Header & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="section-subheading">Got Questions?</span>
                        <h2 className="section-heading mb-6">
                            Frequently Asked{" "}
                            <span className="text-gold-600">Questions</span>
                        </h2>
                        <p className="text-gold-800/70 text-lg mb-8">
                            Find answers to common questions about our venues, services, and
                            booking process. Can&apos;t find what you&apos;re looking for?
                            We&apos;re just a call away.
                        </p>

                        {/* Quick Contact Card */}
                        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/20 flex items-center justify-center">
                                    <MessageCircle className="w-7 h-7 text-gold-400" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold">Still have questions?</h3>
                                    <p className="text-gray-400 text-sm">We&apos;d love to hear from you</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <a href="tel:+919234953085" className="flex items-center gap-3 text-gray-300 hover:text-gold-400 transition-colors">
                                    <span className="text-gold-400">📞</span>
                                    Call Us
                                </a>
                                <a href="mailto:info@albacatering.com" className="flex items-center gap-3 text-gray-300 hover:text-gold-400 transition-colors">
                                    <span className="text-gold-400">✉️</span>
                                    info@albacatering.com
                                </a>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <span className="text-gold-400">🕐</span>
                                    10 AM - 8 PM, All Days
                                </div>
                            </div>

                            <a
                                href="/contact"
                                className="btn-primary w-full justify-center"
                            >
                                <span className="relative z-10">Send Us a Message</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div
                                    className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "border-gold-300 shadow-lg"
                                        : "border-gray-100 hover:border-gold-200"
                                        }`}
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openIndex === index
                                                ? "bg-gold-500 text-white"
                                                : "bg-gold-50 text-gold-600"
                                                }`}>
                                                <HelpCircle className="w-5 h-5" />
                                            </div>
                                            <h3 className={`font-display text-lg font-semibold transition-colors duration-300 ${openIndex === index ? "text-gold-700" : "text-navy-800"
                                                }`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex-shrink-0 ml-4 ${openIndex === index ? "text-gold-600" : "text-gray-400"
                                                }`}
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </button>

                                    {/* Answer */}
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 pt-0">
                                                    <div className="pl-14">
                                                        <p className="text-gold-700/80 leading-relaxed">
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
