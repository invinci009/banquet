"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Sparkles,
    Heart,
    ArrowUp,
} from "lucide-react";

const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Venue Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

const services = [
    "Wedding Celebrations",
    "Corporate Events",
    "Birthday Parties",
    "Anniversary Functions",
    "Reception Ceremonies",
    "Engagement Parties",
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-navy-800 text-white overflow-hidden" id="contact">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pattern-dots opacity-30" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy-700/10 rounded-full blur-3xl" />

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-navy-900" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold">Royal Grandeur</h3>
                                <p className="text-gold-400 text-xs uppercase tracking-[0.2em]">
                                    Banquet Hall
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Creating unforgettable moments since 2010. Where luxury meets tradition,
                            and every celebration becomes a cherished memory.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-display font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-gray-400 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-display font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    123 Exhibition Road, Near Gandhi Maidan,<br />
                                    Patna, Bihar 800001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a
                                    href="tel:+916205708606"
                                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                                >
                                    +91 62057 08606
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a
                                    href="mailto:info@royalgrandeur.com"
                                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                                >
                                    info@royalgrandeur.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
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
                    className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-500 text-sm flex items-center gap-1 flex-wrap justify-center">
                        © 2024 Royal Grandeur Banquet Hall. Made with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
                        by <a href="https://ignius-olive.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 font-medium">Ignius Studios</a>
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-gold-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-gold-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gold-500 text-navy-900 rounded-full shadow-gold flex items-center justify-center hover:bg-gold-400 hover:shadow-gold-lg transition-all duration-300 z-40"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
