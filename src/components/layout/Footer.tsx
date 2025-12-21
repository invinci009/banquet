"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Sparkles,
    Phone,
    Mail,
    MapPin,
    Clock,
    Instagram,
    Facebook,
    Youtube,
    ArrowUp,
    Heart,
} from "lucide-react";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Venues", href: "#venues" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

const services = [
    "Wedding Celebrations",
    "Corporate Events",
    "Birthday Parties",
    "Anniversary Functions",
    "Engagement Ceremonies",
    "Reception Parties",
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="relative bg-gradient-to-b from-gold-900 to-gold-950 text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="font-display text-xl font-bold text-white">
                                    Royal Grandeur
                                </span>
                                <span className="block text-xs text-gold-300 uppercase tracking-widest">
                                    Banquet Hall
                                </span>
                            </div>
                        </Link>
                        <p className="text-gold-200/70 text-sm leading-relaxed mb-6">
                            Creating timeless memories in the heart of Patna since 2010.
                            The most trusted venue for weddings, celebrations, and corporate events.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Youtube, href: "#" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300 hover:bg-gold-500 hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="font-display text-lg font-semibold text-white mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 group-hover:bg-gold-400 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="font-display text-lg font-semibold text-white mb-6">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-gold-200/70 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="font-display text-lg font-semibold text-white mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gold-200/70 text-sm">
                                    123 Exhibition Road, Near Gandhi Maidan,<br />
                                    Patna, Bihar 800001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                                <a
                                    href="tel:+916205708606"
                                    className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm"
                                >
                                    +91 62057 08606
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@royalgrandeur.com"
                                    className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm"
                                >
                                    info@royalgrandeur.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                                <span className="text-gold-200/70 text-sm">
                                    Open Daily: 9:00 AM - 10:00 PM
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-gold-500/20 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gold-300/60 text-sm flex items-center gap-1 flex-wrap justify-center">
                        © 2024 Royal Grandeur Banquet Hall. Made with{" "}
                        <Heart className="w-4 h-4 text-red-400 fill-red-400" />{" "}
                        by <a href="https://ignius-olive.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 font-medium">Ignius Studios</a>
                    </p>
                    <div className="flex gap-6 text-sm text-gold-300/60">
                        <Link href="#" className="hover:text-gold-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-gold-300 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gold-gradient text-white rounded-full shadow-gold flex items-center justify-center hover:shadow-gold-lg transition-all duration-300 z-40"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
