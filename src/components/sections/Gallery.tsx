"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMOmsdP-QJAaW36RKBASM-Qa_UcbdwPWOdiFbrki3XIk9Ouh1hYkh_8ju3g1KWXtt5rR49JWfZHoGPPFjI-y-kA7dhfOk-YUhk5JI2cyUwbGxvw0m_ozABFGqcnxoD5wkWWF8I65z8MmdNfDSbp-tIK_Q1wUsWuoLAEGSYkjKcjUO4tTRBttQDfom4JDGpH5-dlu2OLFS4caZw0oLr-SsQHznsl0NbYioJUG6tCOL5sgKM3KzZeyZo1UsG-vfB0BqqpV2p01y4Hj_v",
        alt: "Grand entrance with red carpet",
        span: "col-span-2 row-span-2",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOb8DrVNfipQjr4TNr83MR7XFIlDUkgxbmT3GUJluM64CF5Y-OCI1dXtwHUiB42qc3XnpAHK6HbYg5GYMTGkOifFf5LnTYB1uv1ULJcZKU6hSMBNMPZUjHUP1PBr5xKVnwJm7wQjx6TnoJgeuSXDf6iAkfKhbznxgF5raI1roXotYBZiYA7CnNb-f2ClZOP5nvJ4f9EHB61SRGqzB_7BdAuTj-hQamKkPjjPqiNbEZy6WBi-7MEQys4gA170LjqkIbmFVuEVkuoJRW",
        alt: "Delicious buffet spread",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf2agsq7LJT2p2CZotOG3XroHvJYBxcLX9Y3ko_DrYN5kau_PtEnBcWQsPRbeltKxe9KigCvV-Xva8xDNxdWe8ht4FtMeFK7qtPlZ2fT4d55UH4e__8kYUICzXTqzazrp9sjuMlsZ82qDK1v3QL_MtFDid2fLw-chMmXd-FhQ_VQM1qQoun3zpdsTLAXAmaqFgXXTDXtJ-W4YwETXFoNym3HVeVgS3wxzjtstBvnxyQno42qgl_UVBBK6uBw-1gAxxbwvOcCL9Iq1Q",
        alt: "Floral table centerpiece",
        span: "col-span-1 row-span-1",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8EulTIN23bHW59L3zbBOximTZqRcu_pBZ1O8XTe4yf3aAGPsOlDYnX84NYPBNToSFKVcW2ZTCP6GSPnH2rfXk1TUa2jkZmboz4bdJ6Jyd01I7qVVw6KbXBFW2AKLk-SiXGfvu8gLU1ctKaRRYUeVC-tiaD1tzEVeWCQS1R2Yw4KQms4lX1otdBI34m2mSVm95mO7oz8PWjLjwgH18QRKVU77Y4IZ_uhAI__-7Felrb94untetCtbnjCggJAVLhL106FRjNGOYKRji",
        alt: "Banquet hall ready for reception",
        span: "col-span-2 row-span-1",
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
                        <span className="section-subheading">Gallery</span>
                        <h2 className="section-heading mb-6">
                            A Glimpse <span className="text-gold-600">Inside</span>
                        </h2>
                        <p className="text-gold-700/70 text-lg">
                            Explore the beauty and sophistication of our venues through our lens.
                            Every corner tells a story of elegance.
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
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${image.src}")` }}
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
                                <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold-400 rounded-2xl transition-colors duration-300" />
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
