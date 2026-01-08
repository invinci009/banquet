"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle: string;
    image: string;
    description?: string;
    overlayOpacity?: number;
}

export default function PageHeroLuxury({
    title,
    subtitle,
    image,
    description,
    overlayOpacity = 0.6
}: PageHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-navy-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div
                    className="absolute inset-0 bg-navy-900 transition-opacity duration-700"
                    style={{ opacity: overlayOpacity }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[1px] w-8 sm:w-12 bg-gold-400" />
                        <span className="text-gold-400 font-medium tracking-widest uppercase text-xs sm:text-sm">
                            {subtitle}
                        </span>
                        <div className="h-[1px] w-8 sm:w-12 bg-gold-400" />
                    </div>

                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-gray-200 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
