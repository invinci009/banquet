"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Heart, Download, Share2, Sparkles, Camera, Star } from "lucide-react";
import Image from "next/image";

const categories = [
    { id: "all", label: "All Events", icon: "✨" },
    { id: "wedding", label: "Weddings", icon: "💍" },
    { id: "reception", label: "Receptions", icon: "🎊" },
    { id: "decor", label: "Decorations", icon: "🌸" },
    { id: "catering", label: "Catering", icon: "🍽️" },
    { id: "venue", label: "Venues", icon: "🏛️" },
];

const galleryImages = [
    {
        src: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Grand Banquet Hall with Crystal Chandeliers",
        category: "venue",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Elegant Wedding Stage with Floral Decor",
        category: "decor",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Luxurious Banquet Seating Arrangement",
        category: "venue",
        span: "col-span-1 row-span-2",
    },
    {
        src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Traditional Wedding Mandap Decoration",
        category: "wedding",
        span: "col-span-1 row-span-1",
        featured: true,
    },
    {
        src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Royal Wedding Table Setup with Gold Accents",
        category: "decor",
        span: "col-span-2 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Gourmet Indian Cuisine Buffet Display",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Evening Reception with Fairy Lights",
        category: "reception",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Bride and Groom Wedding Ceremony",
        category: "wedding",
        span: "col-span-1 row-span-2",
        featured: true,
    },
    {
        src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Premium Wedding Feast Presentation",
        category: "catering",
        span: "col-span-2 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Couple First Dance at Reception",
        category: "reception",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Floral Stage Backdrop with LED Lighting",
        category: "decor",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Grand Reception Hall Night Setup",
        category: "venue",
        span: "col-span-2 row-span-2",
        featured: true,
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");
    const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

    const filteredImages = activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

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
                            className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[220px] gap-3 sm:gap-4"
                        >
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={`${activeCategory}-${index}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    className={`${image.span} rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer`}
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
                            ))}
                        </motion.div>
                    </AnimatePresence>


                </div>
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
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4 scrollbar-hide"
                        >
                            {filteredImages.slice(0, 8).map((img, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setSelectedImage(idx); }}
                                    whileHover={{ scale: 1.1 }}
                                    className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all ${selectedImage === idx
                                        ? 'ring-2 ring-gold-400 ring-offset-2 ring-offset-navy-900'
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
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
