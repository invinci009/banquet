"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Instagram posts data - can be updated manually or via API
const instagramPosts = [
    {
        id: 1,
        image: "/gallery/wedding-stage-roses.webp",
        likes: 234,
        comments: 18,
        caption: "Beautiful wedding setup ✨",
    },
    {
        id: 2,
        image: "/gallery/stage-decor.webp",
        likes: 189,
        comments: 12,
        caption: "Elegant stage decor 🌸",
    },
    {
        id: 3,
        image: "/gallery/floral-gate.webp",
        likes: 312,
        comments: 24,
        caption: "Grand entrance goals 🌺",
    },
    {
        id: 4,
        image: "/gallery/buffet-service.webp",
        likes: 156,
        comments: 8,
        caption: "Feast fit for royalty 🍽️",
    },
    {
        id: 5,
        image: "/gallery/night-lawn-view.webp",
        likes: 276,
        comments: 19,
        caption: "Magical evening ambiance ✨",
    },
    {
        id: 6,
        image: "/gallery/haldi-stage.webp",
        likes: 198,
        comments: 15,
        caption: "Haldi ceremony vibes 💛",
    },
];

const INSTAGRAM_HANDLE = "albabanquethall";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

export default function InstagramFeed() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-champagne-50 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-5 py-2.5 rounded-full mb-6 hover:opacity-90 transition-opacity"
                    >
                        <Instagram className="w-5 h-5" />
                        <span className="font-medium">@{INSTAGRAM_HANDLE}</span>
                    </motion.a>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                        Follow Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Journey</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        See behind-the-scenes moments and real celebrations from our venue
                    </p>
                </motion.div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {instagramPosts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={post.image}
                                alt={post.caption}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="flex items-center gap-6 text-white">
                                    <div className="flex items-center gap-1.5">
                                        <Heart className="w-5 h-5 fill-white" />
                                        <span className="font-semibold">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MessageCircle className="w-5 h-5 fill-white" />
                                        <span className="font-semibold">{post.comments}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Instagram Icon */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Instagram className="w-6 h-6 text-white drop-shadow-lg" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Follow CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-full transition-all group"
                    >
                        <Instagram className="w-5 h-5" />
                        Follow Us on Instagram
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
