"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroClip() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center">

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5" />

            {/* Main Content */}
            <div className="relative z-10 text-center w-full max-w-[90vw]">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-gold-600 font-medium tracking-[0.3em] uppercase mb-4 sm:mb-8">
                        Est. 2012 • Phulwari Sharif
                    </h2>

                    {/* VIDEO CLIPPED TEXT */}
                    <div className="relative font-display font-black text-[15vw] leading-none tracking-tighter select-none">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 block pt-4 pb-8">
                            ALBA
                        </span>

                        {/* Video Layer masked by text */}
                        <div className="absolute inset-0 z-20 mix-blend-screen pointer-events-none">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                            >
                                <source src="/gallery/video.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Overlay text to cut out the video shape (Inverse Mask Trick) 
                             Actually, standard CSS bg-clip-text with video is hard. 
                             Better approach: Text is transparent, Background is white, Video is behind everything. 
                        */}
                    </div>
                </motion.div>

                {/* Since bg-clip-text video is tricky with just Tailwind, let's do the "Video Behind Text" method */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] sm:h-[60vh] -z-10 pointer-events-none overflow-hidden rounded-full opacity-0 animate-fade-in delay-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-20 blur-sm scale-110"
                    >
                        <source src="/gallery/video.mp4" type="video/mp4" />
                    </video>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-8 text-lg sm:text-2xl text-navy-800 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    A venue where <span className="text-gold-600 font-serif italic">royalty</span> meets <span className="text-gold-600 font-serif italic">celebration</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link href="/contact" className="group relative px-8 py-3 bg-navy-900 text-white rounded-full overflow-hidden">
                        <span className="relative z-10 font-medium tracking-wide group-hover:tracking-widest transition-all duration-300">Start Planning</span>
                        <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                    <Link href="/gallery" className="text-navy-900 font-medium hover:text-gold-600 transition-colors tracking-wide border-b border-transparent hover:border-gold-600 pb-1">
                        View Gallery
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-400"
            >
                <ArrowDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    );
}
