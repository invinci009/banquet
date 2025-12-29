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
    ExternalLink,
} from "lucide-react";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/contact" },
];

const services = [
    { name: "Wedding Catering", slug: "wedding-catering" },
    { name: "Corporate Catering", slug: "corporate-catering" },
    { name: "Buffet Catering", slug: "buffet-catering" },
    { name: "Dinner Catering", slug: "dinner-catering" },
    { name: "Snack Catering", slug: "snack-catering" },
    { name: "Personal Catering", slug: "personal-catering" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="relative bg-navy-800 text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-burgundy-700/5 rounded-full blur-3xl" />

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
                            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                                <Sparkles className="w-6 h-6 text-navy-900" />
                            </div>
                            <div>
                                <span className="font-display text-xl font-bold text-white">
                                    Alba Banquet
                                </span>
                                <span className="block text-xs text-gold-400 uppercase tracking-widest">
                                    Hall
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Be a Guest on Your Party! पार्टी हो या फंक्शन, स्वाद हमेशा नंबर वन!
                            Patna's premier banquet hall for weddings, celebrations, and events.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/albabanquethall", label: "Facebook" },
                                { icon: Instagram, href: "https://www.instagram.com/albabanquethall", label: "Instagram" },
                                { icon: Youtube, href: "https://www.youtube.com/@albabanquethall", label: "YouTube" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Find Us On Section */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Find Us On</p>
                            <div className="flex flex-wrap gap-2">
                                <a
                                    href="https://www.justdial.com/Patna/Alba-Banquet-Hall-Alba-Colony-Phulwarisharif/0612PX612-X612-181113174509-G2J3_BZDET"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/50 px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-gold-400 transition-all"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    JustDial
                                </a>
                                <a
                                    href="https://www.wedmegood.com/wedding-venues/Alba-Banquet-Hall-1252513"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/50 px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-gold-400 transition-all"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    WedMeGood
                                </a>
                                <a
                                    href="https://weddingz.in/patna/alba-banquet-hall-phulwari-sharif/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/50 px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-gold-400 transition-all"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    Weddingz
                                </a>
                                <a
                                    href="https://www.google.com/maps/place/Alba+Banquet+Hall/@25.5693995,85.0709069,799m"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/50 px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-gold-400 transition-all"
                                >
                                    <MapPin className="w-3 h-3" />
                                    Google Maps
                                </a>
                            </div>
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
                                        className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                <li key={service.name}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {service.name}
                                    </Link>
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
                                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    <a
                                        href="https://www.google.com/maps/place/Alba+Banquet+Hall/@25.5693995,85.0709069,799m"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gold-400 transition-colors"
                                    >
                                        Alba Colony, Near Alba Masjid,<br />
                                        Phulwari Sharif, Patna - 05
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a
                                    href="tel:+919234953085"
                                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                                >
                                    +91 92349 53085
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a
                                    href="mailto:albabanquethall123@gmail.com"
                                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                                >
                                    albabanquethall123@gmail.com
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
                        © {new Date().getFullYear()} Alba Banquet Hall. Made with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" style={{ animation: 'heartbeat 1s ease-in-out infinite' }} />{" "}
                        by <a
                            href="https://ignius-olive.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold bg-gradient-to-r from-gold-400 via-rose-400 to-gold-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient hover:opacity-80 transition-opacity"
                        >
                            Ignius Studios
                        </a>
                    </p>
                    <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                        <a href="tel:+919234953085" className="hover:text-gold-400 transition-colors">
                            +91 92349 53085
                        </a>
                        <Link href="/contact" className="hover:text-gold-400 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top Button - positioned above WhatsApp button on mobile */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gold-500 text-navy-900 rounded-full shadow-gold flex items-center justify-center hover:bg-gold-400 hover:shadow-gold-lg transition-all duration-300 z-40"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </footer>
    );
}
