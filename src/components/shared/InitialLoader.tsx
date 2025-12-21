"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function InitialLoader({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        // Check if this is the first visit in this session
        const hasVisited = sessionStorage.getItem("hasVisitedRoyalGrandeur");

        if (!hasVisited) {
            setShowLoader(true);
            sessionStorage.setItem("hasVisitedRoyalGrandeur", "true");

            // Show loader for 2 seconds on first visit
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            // Already visited, skip loader
            setIsLoading(false);
            setShowLoader(false);
        }
    }, []);

    // If not first visit, render children immediately
    if (!showLoader) {
        return <>{children}</>;
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-navy-900 flex items-center justify-center z-[100]"
                    >
                        <div className="absolute inset-0 pattern-dots opacity-20" />
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-burgundy-700/20 rounded-full blur-3xl animate-pulse" />

                        <div className="relative text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold-lg"
                                >
                                    <Sparkles className="w-10 h-10 text-navy-900" />
                                </motion.div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="font-display text-3xl font-bold text-white mb-2"
                            >
                                Royal Grandeur
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gold-400 text-sm uppercase tracking-widest mb-8"
                            >
                                Banquet Hall
                            </motion.p>

                            <div className="flex items-center justify-center gap-2">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-3 h-3 rounded-full bg-gold-500"
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
}
