"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Heart, Download, Share2, Sparkles, Camera, Star, Play, Pause } from "lucide-react";
import Image from "next/image";

// ... (lines 8-164 remain unchanged, handled by matching context or assuming file hasn't shifted much)

// We need to re-declare the imports if we're replacing the top, but `replace_file_content` works on range. 
// I'll target the import line specifically first to add useEffect.

// Actually I'll just use MultiReplace to do it cleanly.


// (Removed duplicate imports)

const categories = [
    { id: "all", label: "All Events", icon: "✨" },
    { id: "venue", label: "Venue", icon: "🏛️" },
    { id: "hall", label: "Hall", icon: "�" },
    { id: "entrance", label: "Entrance", icon: "�" },
    { id: "decor", label: "Decorations", icon: "🌸" },
    { id: "catering", label: "Catering", icon: "🍽️" },
];

const galleryImages = [
    {
        src: "/gallery/night-lawn-view.webp",
        alt: "Alba Banquet Hall Night View with Fairy Lights and Lawn",
        category: "venue",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/wedding-stage-roses.webp",
        alt: "Beautiful Wedding Stage with Red Rose Decorations",
        category: "decor",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/building-exterior.webp",
        alt: "Alba Banquet Hall Building with Fairy Light Decoration",
        category: "venue",
        span: "col-span-1 row-span-2",
    },
    {
        src: "/gallery/hall-seating.webp",
        alt: "AC Indoor Hall with Seating and Stage View",
        category: "hall",
        span: "col-span-1 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/haldi-stage.webp",
        alt: "Haldi/Mehendi Stage Setup with Yellow Decor",
        category: "decor",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/building-entrance.webp",
        alt: "Grand Building Entrance with Arch Design",
        category: "venue",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/changing-room.webp",
        alt: "Complimentary Changing Room for Bride/Groom",
        category: "hall",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/entrance-decor.webp",
        alt: "Traditional Red & Gold Marigold Entrance Decor",
        category: "entrance",
        span: "col-span-2 row-span-1",
    },
    {
        src: "/gallery/indoor-hall.webp",
        alt: "AC Indoor Hall with Stage and Seating",
        category: "hall",
        span: "col-span-1 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/floral-gate.webp",
        alt: "Colorful Floral Welcome Gate",
        category: "entrance",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/mocktail-counter.webp",
        alt: "Premium Mocktail Counter Setup",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/lawn-area.webp",
        alt: "Spacious Open Lawn with Fairy Lights",
        category: "venue",
        span: "col-span-2 row-span-1",
    },
    {
        src: "/gallery/food-counter.webp",
        alt: "Elegant Food Counter with Hanging Lamps",
        category: "catering",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/entrance-gate.webp",
        alt: "Pink & White Entrance Gate with Flowers",
        category: "entrance",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/stage-decor.webp",
        alt: "Wedding Stage with Floral Decorations",
        category: "decor",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/building-front-lights.webp",
        alt: "Building Front with Beautiful LED Lights and Green Lawn",
        category: "venue",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/hall-stage-view.webp",
        alt: "AC Hall with Stage and Maroon Chair Setup",
        category: "hall",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/hall-wide-view.webp",
        alt: "Wide View of AC Hall with Seating Arrangement",
        category: "hall",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/building-night-lights.webp",
        alt: "Stunning Night View with Fairy Light Decoration",
        category: "venue",
        span: "col-span-1 row-span-2",
    },
    {
        src: "/gallery/buffet-service.webp",
        alt: "Live Buffet Service at Wedding Event",
        category: "catering",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/catering-service.webp",
        alt: "Professional Catering Service with Elegant Lamps",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/reception-hall.webp",
        alt: "Grand Reception Hall with Red Rose Stage Decoration",
        category: "hall",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/buffet-staff.webp",
        alt: "Professional Catering Staff at Buffet Counter",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
];

interface GalleryProps {
    limit?: number;
    showFilter?: boolean;
}

export default function Gallery({ limit, showFilter = true }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");
    const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailScrollRef = useRef<HTMLDivElement>(null);

    const allFilteredImages = activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const filteredImages = limit ? allFilteredImages.slice(0, limit) : allFilteredImages;

    const toggleLike = useCallback((index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setLikedImages(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    }, []);

    const navigateImage = useCallback((direction: 'prev' | 'next') => {
        if (selectedImage === null) return;
        const currentIndex = filteredImages.findIndex((_, i) => i === selectedImage);
        if (direction === 'prev') {
            setSelectedImage(currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1);
        } else {
            setSelectedImage(currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0);
        }
    }, [selectedImage, filteredImages]);

    // Auto-advance for slideshow
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && selectedImage !== null) {
            interval = setInterval(() => {
                navigateImage('next');
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, selectedImage, navigateImage]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            switch (e.key) {
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    navigateImage('prev');
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    navigateImage('next');
                    break;
                case 'Escape':
                    setSelectedImage(null);
                    setIsPlaying(false);
                    break;
                case ' ': // Spacebar to toggle play/pause
                    e.preventDefault();
                    setIsPlaying(prev => !prev);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, navigateImage]);

    // Scroll active thumbnail into view
    useEffect(() => {
        if (selectedImage !== null && thumbnailScrollRef.current) {
            const activeThumbnail = thumbnailScrollRef.current.children[selectedImage] as HTMLElement;
            if (activeThumbnail) {
                activeThumbnail.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [selectedImage]);

    return (
        <>
            <section id="gallery" className="py-16 lg:py-28 bg-gradient-to-b from-white via-champagne-50/50 to-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-burgundy-200/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-10 lg:mb-14"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 px-4 py-2 rounded-full mb-6"
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Camera className="w-4 h-4 text-gold-600" />
                            <span className="text-gold-700 font-medium text-sm">Visual Stories</span>
                        </motion.div>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
                            A Glimpse of <span className="text-gold-600">Royal Celebrations</span>
                        </h2>
                        <p className="text-gold-700/70 text-lg">
                            Every event tells a story. Explore the magical moments we&apos;ve created for thousands of happy families.
                        </p>
                    </motion.div>

                    {/* Category Filter Pills */}
                    {showFilter && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 lg:mb-14"
                        >
                            {categories.map((cat) => (
                                <motion.button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.id
                                        ? 'bg-gold-gradient text-navy-900 shadow-gold'
                                        : 'bg-white text-gold-700 border-2 border-gold-200 hover:border-gold-400 hover:bg-gold-50'
                                        }`}
                                >
                                    <span>{cat.icon}</span>
                                    <span className="hidden sm:inline">{cat.label}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-6 sm:gap-10 mb-10 text-center"
                    >
                        <div>
                            <div className="font-display text-2xl sm:text-3xl font-bold text-gold-600">500+</div>
                            <div className="text-gray-500 text-xs sm:text-sm">Events Captured</div>
                        </div>
                        <div className="w-px h-10 bg-gold-200" />
                        <div>
                            <div className="font-display text-2xl sm:text-3xl font-bold text-gold-600">50K+</div>
                            <div className="text-gray-500 text-xs sm:text-sm">Happy Moments</div>
                        </div>
                        <div className="w-px h-10 bg-gold-200" />
                        <div>
                            <div className="font-display text-2xl sm:text-3xl font-bold text-gold-600">4.9</div>
                            <div className="text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-1">
                                <Star className="w-3 h-3 fill-gold-500 text-gold-500" /> Rating
                            </div>
                        </div>
                    </motion.div>

                    {/* Gallery Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[200px] md:auto-rows-[220px] gap-3 sm:gap-4"
                        >
                            {filteredImages.map((image, index) => {
                                // Smart Bento Grid for Limited View
                                const limitedSpans = [
                                    "sm:col-span-2 sm:row-span-2", // Large Main
                                    "sm:col-span-2 sm:row-span-1", // Wide Top
                                    "sm:col-span-1 sm:row-span-1", // Small Bottom
                                    "sm:col-span-1 sm:row-span-1", // Small Bottom
                                ];

                                const spanClass = limit && index < 4
                                    ? limitedSpans[index]
                                    : `sm:${image.span}`;

                                return (
                                    <motion.div
                                        key={`${activeCategory}-${index}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05, duration: 0.4 }}
                                        className={`${spanClass} rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                                        {/* Featured Badge */}
                                        {image.featured && (
                                            <div className="absolute top-3 left-3 px-2 py-1 bg-gold-gradient rounded-full flex items-center gap-1 shadow-lg">
                                                <Sparkles className="w-3 h-3 text-navy-900" />
                                                <span className="text-xs font-bold text-navy-900">Featured</span>
                                            </div>
                                        )}

                                        {/* Like Button */}
                                        <motion.button
                                            onClick={(e) => toggleLike(index, e)}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                                        >
                                            <Heart
                                                className={`w-4 h-4 transition-colors ${likedImages.has(index)
                                                    ? 'fill-red-500 text-red-500'
                                                    : 'text-gray-600'
                                                    }`}
                                            />
                                        </motion.button>

                                        {/* Bottom Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">{image.alt}</p>
                                        </div>

                                        {/* Center Zoom Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileHover={{ scale: 1.1 }}
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold"
                                            >
                                                <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-navy-900" />
                                            </motion.div>
                                        </div>

                                        {/* Gold Border on Hover */}
                                        <div className="absolute inset-0 border-3 sm:border-4 border-transparent group-hover:border-gold-400 rounded-2xl sm:rounded-3xl transition-colors duration-300 pointer-events-none" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>


                </div>

                {limit && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center mt-12"
                    >
                        <a
                            href="/gallery"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-gold-400 rounded-full font-semibold hover:bg-navy-800 transition-colors shadow-lg hover:shadow-xl group"
                        >
                            View Complete Gallery
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                )}
            </section>

            {/* Premium Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-navy-900/98 backdrop-blur-xl flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        {/* Navigation Arrows */}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-5xl max-h-[80vh] mx-4 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={filteredImages[selectedImage]?.src}
                                alt={filteredImages[selectedImage]?.alt}
                                className="max-w-full max-h-[80vh] object-contain"
                            />

                            {/* Bottom Info Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 via-navy-900/60 to-transparent p-4 sm:p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium text-sm sm:text-base mb-1">
                                            {filteredImages[selectedImage]?.alt}
                                        </p>
                                        <p className="text-gray-400 text-xs sm:text-sm">
                                            {selectedImage + 1} of {filteredImages.length} photos
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                            title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                                        >
                                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => toggleLike(selectedImage, e)}
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                        >
                                            <Heart
                                                className={`w-5 h-5 ${likedImages.has(selectedImage)
                                                    ? 'fill-red-500 text-red-500'
                                                    : ''
                                                    }`}
                                            />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                        >
                                            <Share2 className="w-5 h-5" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Thumbnail Strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[90vw] flex justify-center"
                        >
                            <div
                                ref={thumbnailScrollRef}
                                className="flex gap-2 overflow-x-auto pb-2 px-4 scrollbar-hide max-w-full"
                            >
                                {filteredImages.map((img, idx) => (
                                    <motion.button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setSelectedImage(idx); }}
                                        whileHover={{ scale: 1.1 }}
                                        className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all ${selectedImage === idx
                                            ? 'ring-2 ring-gold-400 ring-offset-2 ring-offset-navy-900 scale-110'
                                            : 'opacity-50 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
