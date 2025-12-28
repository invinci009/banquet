"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import Link from "next/link";

export default function FloatingBookButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 400px
            if (window.scrollY > 400 && !isDismissed) {
                setIsVisible(true);
            } else if (window.scrollY <= 400) {
                setIsVisible(false);
                setIsDismissed(false); // Reset dismiss when back at top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDismissed]);

    return (
        <AnimatePresence>
            {isVisible && !isDismissed && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="hidden sm:block fixed bottom-24 left-6 z-40"
                >
                    <div className="relative pt-3 pr-3">
                        {/* Main button */}
                        <Link
                            href="/contact"
                            className="relative group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-2xl shadow-gold-lg hover:shadow-gold transition-all hover:scale-105 overflow-hidden"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Calendar className="w-5 h-5" />
                            </motion.div>
                            <span className="relative z-10">Book Your Event</span>

                            {/* Pulse ring */}
                            <span className="absolute inset-0 rounded-2xl animate-ping bg-gold-400/30" style={{ animationDuration: "2s" }} />
                        </Link>

                        {/* Dismiss button - positioned outside the link */}
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="absolute top-0 right-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-lg z-50"
                            aria-label="Dismiss"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
