"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const galleryImages = [
    {
        src: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Grand Banquet Hall Interior with Crystal Chandeliers",
        span: "col-span-2 row-span-2",
    },
    {
        src: "https://images.pexels.com/photos/169191/pexels-photo-169191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Luxury Wedding Stage Decoration with Floral Backdrop",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        alt: "Elegant Event Hall Seating Arrangement",
        span: "col-span-1 row-span-2",
    },
    {
        src: "https://images.pexels.com/photos/2659878/pexels-photo-2659878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Traditional Indian Wedding Mandap Setup",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1606216794076-2b3e3c7b667f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        alt: "Royal Wedding Decor Details",
        span: "col-span-2 row-span-1",
    },
    {
        src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Premium Dining Experience Setup",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1590524385516-13ff798cbbe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        alt: "Outdoor Garden Terrace for Evening Parties",
        span: "col-span-1 row-span-1",
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section id="gallery" className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="section-subheading">Our Gallery</span>
                        <h2 className="section-heading mb-6">
                            A Glimpse of <span className="text-gold-600">Royal Celebrations</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Witness the elegance and grandeur we bring to every event. From floral mandaps to gourmet catering.
                        </p>
                    </motion.div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`${image.span} rounded-2xl overflow-hidden relative group cursor-pointer`}
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gold-900/0 group-hover:bg-gold-900/40 transition-colors duration-300" />

                                {/* Zoom Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg">
                                        <ZoomIn className="w-6 h-6 text-gold-900" />
                                    </div>
                                </div>

                                {/* Gold Border on Hover */}
                                <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold-400 rounded-2xl transition-colors duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-gold-900/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-200 hover:bg-gold-500/30 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="relative max-w-5xl max-h-[80vh] rounded-2xl overflow-hidden"
                    >
                        <img
                            src={selectedImage}
                            alt="Gallery preview"
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
