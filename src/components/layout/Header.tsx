"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Sparkles } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-gold group-hover:shadow-gold-lg transition-shadow duration-300">
                                    <Image
                                        src="/logo.png"
                                        alt="Alba Banquet Hall Logo"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain"
                                        priority
                                    />
                                </div>
                                <div className="absolute -inset-1 bg-gold-gradient rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={`font-display text-lg sm:text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-gold-700" : "text-white"
                                        }`}
                                >
                                    Alba Banquet Hall
                                </span>
                                <span
                                    className={`hidden sm:block text-xs uppercase tracking-[0.2em] ${isScrolled ? "text-gold-500" : "text-gold-300"
                                        }`}
                                >
                                    Banquet Hall in Phulwari Sharif
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors group ${isScrolled
                                        ? "text-gold-800 hover:text-gold-600"
                                        : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:+919234953085"
                                className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-gold-700" : "text-white/90"
                                    }`}
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Us</span>
                            </a>
                            <Link href="/contact" className="btn-primary text-sm py-3 px-6">
                                <span className="relative z-10">Book Now</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled
                                ? "text-gold-700 hover:bg-gold-100"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.nav
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="absolute top-20 right-4 left-4 bg-navy-900/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gold-500/30"
                        >
                            <div className="p-6 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block py-3 px-4 text-gold-100 font-medium hover:bg-gold-500/10 hover:text-gold-400 rounded-lg transition-colors border border-transparent hover:border-gold-500/20"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-4 border-t border-gold-500/20 space-y-3"
                                >
                                    <a
                                        href="tel:+919234953085"
                                        className="w-full py-3 flex items-center justify-center gap-2 text-gold-300 font-medium hover:bg-gold-500/10 rounded-lg transition-colors border border-gold-500/20"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Us
                                    </a>
                                    <Link href="/contact" className="w-full btn-primary py-4 block text-center" onClick={() => setIsMobileMenuOpen(false)}>
                                        <span className="relative z-10">Book Now</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
