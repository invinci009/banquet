"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-navy-900 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pattern-dots opacity-20" />

            {/* Glowing Orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-burgundy-700/10 rounded-full blur-3xl" />

            <div className="relative text-center px-4 max-w-xl">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold-lg mb-8"
                >
                    <Sparkles className="w-10 h-10 text-navy-900" />
                </motion.div>

                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1 className="font-display text-8xl md:text-9xl font-bold text-gold-500 mb-4">
                        404
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let us guide you back to planning your dream celebration.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex items-center justify-center gap-4"
                >
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
                    <span className="text-gold-500/50 text-sm">Alba Banquet</span>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
                </motion.div>
            </div>
        </div>
    );
}
