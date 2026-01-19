"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Heart, Download, Share2, Sparkles, Camera, Star } from "lucide-react";
import Image from "next/image";

const categories = [
    { id: "all", label: "All Events", icon: "" },
    { id: "venue", label: "Venue", icon: "" },
    { id: "hall", label: "Hall", icon: "" },
    { id: "entrance", label: "Entrance", icon: "" },
    { id: "decor", label: "Decorations", icon: "" },
    { id: "catering", label: "Catering", icon: "" },
];

const galleryImages = [
    {
        src: "/gallery/night-lawn-view.webp",
        alt: "Alba Banquet Hall Patna Night View - Open Lawn with Fairy Lights for Wedding Reception",
        title: "Night Lawn View at Alba Banquet",
        category: "venue",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/wedding-stage-roses.webp",
        alt: "Wedding Stage Decoration with Red Roses at Alba Banquet Hall Patna Bihar",
        title: "Rose Wedding Stage Decor",
        category: "decor",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/building-exterior.webp",
        alt: "Alba Banquet Hall Building Exterior with LED Lights - Best Wedding Venue in Patna",
        title: "Alba Banquet Building",
        category: "venue",
        span: "col-span-1 row-span-2",
    },
    {
        src: "/gallery/hall-seating.webp",
        alt: "AC Indoor Hall with 500+ Seating Capacity at Alba Banquet Hall Patna",
        title: "AC Indoor Hall Seating",
        category: "hall",
        span: "col-span-1 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/haldi-stage.webp",
        alt: "Haldi Mehendi Ceremony Stage Setup with Yellow Flower Decoration Patna",
        title: "Haldi Stage Setup",
        category: "decor",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/building-entrance.webp",
        alt: "Grand Entrance Gate of Alba Banquet Hall - Wedding Venue Bailey Road Patna",
        title: "Building Entrance",
        category: "venue",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/changing-room.webp",
        alt: "Complimentary Bride Groom Changing Room at Alba Banquet Hall Patna",
        title: "Changing Room Facility",
        category: "hall",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/entrance-decor.webp",
        alt: "Traditional Indian Wedding Entrance with Marigold Flowers at Alba Banquet Patna",
        title: "Marigold Entrance Decor",
        category: "entrance",
        span: "col-span-2 row-span-1",
    },
    {
        src: "/gallery/indoor-hall.webp",
        alt: "Fully Air Conditioned Wedding Hall with Stage at Alba Banquet Patna Bihar",
        title: "AC Indoor Wedding Hall",
        category: "hall",
        span: "col-span-1 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/floral-gate.webp",
        alt: "Colorful Floral Welcome Gate for Wedding Entry at Alba Banquet Hall",
        title: "Floral Welcome Gate",
        category: "entrance",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/mocktail-counter.webp",
        alt: "Live Mocktail Counter Setup for Wedding Catering at Alba Banquet Patna",
        title: "Mocktail Counter",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/lawn-area.webp",
        alt: "3000+ Capacity Open Lawn Area with Fairy Lights at Alba Banquet Hall Patna",
        title: "Open Lawn Area",
        category: "venue",
        span: "col-span-2 row-span-1",
    },
    {
        src: "/gallery/food-counter.webp",
        alt: "Elegant Food Counter with Premium Catering Service at Alba Banquet Hall Patna",
        title: "Food Counter Setup",
        category: "catering",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/entrance-gate.webp",
        alt: "Pink White Flower Decoration Entrance Gate for Wedding at Alba Banquet Patna",
        title: "Flower Entrance Gate",
        category: "entrance",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/stage-decor.webp",
        alt: "Luxury Wedding Stage Decoration with Flowers at Alba Banquet Hall Patna Bihar",
        title: "Luxury Stage Decor",
        category: "decor",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/building-front-lights.webp",
        alt: "Alba Banquet Hall Building Front View with LED Decoration - Wedding Venue Patna",
        title: "Building Front Night View",
        category: "venue",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/hall-stage-view.webp",
        alt: "AC Indoor Hall with Stage View and Chair Setup at Alba Banquet Patna",
        title: "Hall Stage View",
        category: "hall",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/hall-wide-view.webp",
        alt: "Wide View of Air Conditioned Indoor Hall at Alba Banquet Hall Patna Bihar",
        title: "AC Hall Panorama",
        category: "hall",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/building-night-lights.webp",
        alt: "Alba Banquet Hall Night View with Fairy Light Decoration - Best Caterers Patna",
        title: "Night Light Decoration",
        category: "venue",
        span: "col-span-1 row-span-2",
    },
    {
        src: "/gallery/buffet-service.webp",
        alt: "Live Buffet Catering Service at Wedding Event - Alba Banquet Hall Patna",
        title: "Live Buffet Service",
        category: "catering",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/catering-service.webp",
        alt: "Professional Wedding Catering Service Veg Non-Veg at Alba Banquet Patna",
        title: "Catering Service",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/reception-hall.webp",
        alt: "Grand Wedding Reception Hall with Rose Stage at Alba Banquet Hall Patna Bihar",
        title: "Reception Hall",
        category: "hall",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/buffet-staff.webp",
        alt: "Professional Catering Staff at Buffet Counter - Alba Banquet Hall Patna",
        title: "Buffet Staff",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/wedding-entrance-gate.jpg",
        alt: "Colorful Wedding Entrance Gate Decoration at Alba Banquet Hall Bailey Road Patna",
        title: "Wedding Entrance Gate",
        category: "entrance",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/decorated-corridor.jpg",
        alt: "Beautifully Decorated Wedding Corridor at Alba Banquet Hall Patna Bihar",
        title: "Decorated Corridor",
        category: "entrance",
        span: "col-span-1 row-span-2",
    },
    {
        src: "/gallery/outdoor-seating-lights.jpg",
        alt: "Outdoor Wedding Seating with Fairy Light Decoration at Alba Banquet Patna",
        title: "Outdoor Seating",
        category: "venue",
        span: "col-span-2 row-span-1",
    },
    {
        src: "/gallery/building-night-decor.jpg",
        alt: "Alba Banquet Hall Night Event Decoration - Wedding Reception Venue Patna",
        title: "Night Event Decor",
        category: "venue",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/lawn-buffet-setup.jpg",
        alt: "Open Lawn Buffet Setup for Wedding Reception at Alba Banquet Hall Patna",
        title: "Lawn Buffet Setup",
        category: "catering",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/kitchen-cooking.png",
        alt: "Live Kitchen Cooking Fresh Food for Wedding Catering at Alba Banquet Patna",
        title: "Live Kitchen",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/event-buffet-guests.jpg",
        alt: "Wedding Guests Enjoying Buffet Service at Alba Banquet Hall Patna Bihar",
        title: "Guest Buffet",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/indoor-hall-event.png",
        alt: "Indoor AC Hall Wedding Ceremony at Alba Banquet Hall Patna - 500 Capacity",
        title: "Wedding Ceremony Hall",
        category: "hall",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/wedding-stage-floral.jpg",
        alt: "Elegant Wedding Stage Red White Floral Decoration at Alba Banquet Hall Patna",
        title: "Floral Stage Decor",
        category: "decor",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/lawn-aerial-view.jpg",
        alt: "Aerial View of Decorated Open Lawn Night Event at Alba Banquet Hall Patna",
        title: "Lawn Aerial View",
        category: "venue",
        span: "col-span-2 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/wedding-stage-decorated.jpg",
        alt: "Premium Wedding Stage with Luxury Floral Decoration at Alba Banquet Patna",
        title: "Premium Stage",
        category: "decor",
        span: "col-span-1 row-span-2",
    },
    {
        src: "/gallery/outdoor-seating-night.jpg",
        alt: "Outdoor Night Seating with Colorful Lights at Alba Banquet Hall Patna Bihar",
        title: "Night Seating",
        category: "venue",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/buffet-guests-serving.jpg",
        alt: "Guests Being Served at Outdoor Buffet - Alba Banquet Hall Catering Patna",
        title: "Buffet Serving",
        category: "catering",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/buffet-queue.jpg",
        alt: "Wedding Buffet Queue at Alba Banquet Hall - Best Caterers in Patna Bihar",
        title: "Buffet Queue",
        category: "catering",
        span: "col-span-2 row-span-1",
    },
    {
        src: "/gallery/catering-staff-serving.jpg",
        alt: "Professional Catering Staff Serving Guests at Alba Banquet Hall Patna",
        title: "Staff Serving",
        category: "catering",
        span: "col-span-1 row-span-1",
        featured: true,
    },
    {
        src: "/gallery/building-night-event.jpg",
        alt: "Alba Banquet Hall Night Wedding Reception - Best Venue Bailey Road Patna",
        title: "Night Wedding Reception",
        category: "venue",
        span: "col-span-2 row-span-2",
        featured: true,
    },
    {
        src: "/gallery/alba-building-lights.png",
        alt: "Alba Banquet Hall Building with Beautiful Fairy Lights - Wedding Venue Patna",
        title: "Building Fairy Lights",
        category: "venue",
        span: "col-span-2 row-span-1",
        featured: true,
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
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, navigateImage]);

    // Scroll active thumbnail to center
    useEffect(() => {
        if (selectedImage !== null && thumbnailScrollRef.current) {
            const container = thumbnailScrollRef.current;
            const thumbnailWidth = 64; // w-16 = 64px
            const gap = 12; // gap-3 = 12px
            const scrollPosition = selectedImage * (thumbnailWidth + gap) - (container.clientWidth / 2) + (thumbnailWidth / 2);
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
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
                                    <span>{cat.label}</span>
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
                            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[220px] gap-2 sm:gap-3 md:gap-4"
                        >
                            {filteredImages.map((image, index) => {
                                // Smart Bento Grid for Limited View
                                const limitedSpans = [
                                    "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2", // Large Main
                                    "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1", // Wide Top
                                    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1", // Small Bottom
                                    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1", // Small Bottom
                                ];

                                const spanClass = limit && index < 4
                                    ? limitedSpans[index]
                                    : `col-span-1 sm:${image.span}`;

                                return (
                                    <motion.div
                                        key={`${activeCategory}-${index}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.03, duration: 0.3 }}
                                        className={`${spanClass} rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            title={image.title}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading={index < 8 ? "eager" : "lazy"}
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
                        className="fixed inset-0 z-[100] bg-black"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Top Bar with Close Button */}
                        <div className="absolute top-0 left-0 right-0 h-14 sm:h-16 bg-gradient-to-b from-black/90 to-transparent z-10 flex items-center justify-between px-2 sm:px-4">
                            <p className="text-white text-xs sm:text-sm max-w-[45%] sm:max-w-[50%] truncate">
                                {filteredImages[selectedImage]?.title || 'Gallery'}
                            </p>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <button
                                    onClick={(e) => { e.stopPropagation(); toggleLike(selectedImage, e); }}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                                    title="Like this photo"
                                >
                                    <Heart className={`w-5 h-5 ${likedImages.has(selectedImage) ? 'fill-red-500 text-red-500' : ''}`} />
                                </button>
                                <button
                                    onClick={async (e) => {
                                        e.stopPropagation();
                                        const imageTitle = filteredImages[selectedImage]?.alt || 'Alba Banquet Hall Photo';
                                        const shareText = `✨ ${imageTitle}

🏛️ Alba Banquet Hall - Best Caterers in Patna
📍 Opposite Taramandal, Bailey Road, Patna, Bihar 801503

⭐ 3000+ Capacity | 4.2★ Rating | 124+ Reviews

🍽️ Premium Catering Services:
• Veg Menu: ₹600/Person
• Non-Veg Menu: ₹900/Person

📞 Book Now: +91-8809-000-200

🌐 Visit: ${typeof window !== 'undefined' ? window.location.origin : 'https://albabanquet.com'}`;

                                        const shareData = {
                                            title: 'Alba Banquet Hall - ' + imageTitle,
                                            text: shareText,
                                            url: typeof window !== 'undefined' ? window.location.href : 'https://albabanquet.com/gallery'
                                        };

                                        try {
                                            if (navigator.share) {
                                                await navigator.share(shareData);
                                            } else {
                                                await navigator.clipboard.writeText(shareText + '\n\n' + shareData.url);
                                                alert('📋 Details copied to clipboard!');
                                            }
                                        } catch (err) {
                                            console.log('Share cancelled or failed');
                                        }
                                    }}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                                    title="Share this photo"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                                    title="Close"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Main Image - Centered */}
                        <div
                            className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 pt-16 sm:pt-20 pb-24 sm:pb-28"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={selectedImage}
                                src={filteredImages[selectedImage]?.src}
                                alt={filteredImages[selectedImage]?.alt}
                                title={filteredImages[selectedImage]?.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="max-w-full max-h-full object-contain rounded-lg"
                                style={{ maxHeight: 'calc(100vh - 160px)' }}
                            />
                        </div>

                        {/* Navigation Arrows - Touch Friendly */}
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 flex items-center justify-center text-white active:bg-black/80 z-10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 flex items-center justify-center text-white active:bg-black/80 z-10"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm bg-black/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                            {selectedImage + 1} / {filteredImages.length}
                        </div>

                        {/* Thumbnail Strip - Center Active */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/95 py-2 sm:py-3">
                            <div
                                ref={thumbnailScrollRef}
                                className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-[calc(50%-28px)] sm:px-[calc(50%-32px)]"
                                style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
                            >
                                {filteredImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setSelectedImage(idx); }}
                                        data-index={idx}
                                        aria-label={`View image ${idx + 1}`}
                                        className={`flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded overflow-hidden transition-all duration-300 ${selectedImage === idx
                                            ? 'ring-2 ring-gold-400 opacity-100 scale-105'
                                            : 'opacity-40 hover:opacity-70 scale-100'
                                            }`}
                                        style={{ scrollSnapAlign: 'center' }}
                                    >
                                        <img
                                            src={img.src}
                                            alt=""
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
