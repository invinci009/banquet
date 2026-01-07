"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutModern() {
    return (
        <section className="py-24 lg:py-32 bg-champagne-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Content (Text) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-gold-600 font-semibold uppercase tracking-widest text-sm">The Alba Story</span>
                        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
                            Redefining <br />
                            <i className="font-serif text-gold-600">Royal Celebrations</i> <br />
                            in Patna.
                        </h2>

                        <div className="mt-8 space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                            <p>
                                Welcome to a world where elegance meets tradition. At Alba Banquet Hall, we don't just host events; we curate experiences that linger in memories forever.
                            </p>
                            <p>
                                Established in 2012, our venue in Phulwari Sharif has become the benchmark for luxury weddings. With our exquisite architecture, gourmet culinary offerings, and impeccable hospitality, we ensure your special day is nothing short of a fairytale.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link href="/about" className="group inline-flex items-center gap-3 text-navy-900 font-bold text-lg border-b-2 border-gold-400 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                                Discover Our Heritage
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content (Images) */}
                    <div className="lg:w-1/2 relative">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/gallery/building-entrance.webp"
                                alt="Alba Entrance"
                                width={600}
                                height={800}
                                className="object-cover w-full h-[500px] lg:h-[600px]"
                            />
                        </motion.div>

                        {/* Overlapping Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -bottom-12 -left-12 w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-elegant border-8 border-champagne-50 z-20 hidden md:block"
                        >
                            <Image
                                src="/gallery/outdoor-seating-night.jpg"
                                alt="Outdoor Seating"
                                width={400}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>

                        {/* Decorative Graphic */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-200/20 rounded-full blur-3xl z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
}
