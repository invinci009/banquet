"use client";

import { motion } from "framer-motion";
import { Play, Pause, Sparkles, Eye, Clock, Film, Volume2, VolumeX, Maximize } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoShowcase() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <section id="virtual-tour" className="py-20 lg:py-28 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-burgundy-500/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 pattern-dots opacity-5" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 px-4 py-2 rounded-full mb-6"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Film className="w-4 h-4 text-gold-400" />
                        <span className="text-gold-300 font-medium text-sm">Virtual Tour</span>
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Experience <span className="text-gold-400">Alba Banquet Hall</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Take a virtual tour of our venue and see why families trust us for their special celebrations.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-500/20 rounded-3xl blur-xl" />

                    <div className="relative bg-navy-800 rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl">
                        {/* Video Player Area */}
                        <div className="relative aspect-video overflow-hidden">
                            {/* Video Element with WebM (optimized) and MP4 fallback */}
                            <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                    willChange: 'transform',
                                    backfaceVisibility: 'hidden',
                                    transform: 'translateZ(0)',
                                }}
                                muted={isMuted}
                                loop
                                playsInline
                                preload="metadata"
                                poster="/gallery/reception-hall.webp"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            >
                                <source src="/gallery/video.webm" type="video/webm" />
                                <source src="/gallery/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Overlay when not playing */}
                            {!isPlaying && (
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-navy-900/20" />
                            )}

                            {/* Play/Pause Button Overlay */}
                            <div
                                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                                onClick={togglePlay}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group cursor-pointer"
                                >
                                    {/* Pulsing Ring - only when not playing */}
                                    {!isPlaying && (
                                        <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold-500/30 animate-ping" />
                                    )}

                                    {/* Play/Pause Button */}
                                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-all">
                                        {isPlaying ? (
                                            <Pause className="w-10 h-10 sm:w-12 sm:h-12 text-navy-900" fill="currentColor" />
                                        ) : (
                                            <Play className="w-10 h-10 sm:w-12 sm:h-12 text-navy-900 ml-1" fill="currentColor" />
                                        )}
                                    </div>
                                </motion.button>

                                {!isPlaying && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-6 text-white/80 text-lg font-medium"
                                    >
                                        Click to Play Virtual Tour
                                    </motion.p>
                                )}
                            </div>

                            {/* Video Controls */}
                            <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-900/90 to-transparent flex items-center justify-between transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                    >
                                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                    >
                                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                    </button>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <Maximize className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 bg-navy-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <Sparkles className="w-4 h-4 text-gold-400" />
                                <span className="text-white text-sm font-medium">Alba Banquet Hall</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Below Video */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
                >
                    {[
                        { icon: Eye, value: "3000+", label: "Guest Capacity" },
                        { icon: Sparkles, value: "AC Halls", label: "Climate Controlled" },
                        { icon: Clock, value: "24/7", label: "Event Support" },
                        { icon: Film, value: "2", label: "Changing Rooms" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 mb-3">
                                <stat.icon className="w-5 h-5 text-gold-400" />
                            </div>
                            <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-gray-500 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
