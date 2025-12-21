"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Crown, Users, Maximize, Sparkles, Wifi, Car, Utensils, Music } from "lucide-react";

const venues = [
    {
        name: "The Royal Hall",
        tagline: "Grand Celebrations",
        capacity: "500-800",
        sqft: "12,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyMdAN-7MxuazKKmMGBRb7aHbTT2PJAgE5MfKIpYJXZ2KP-3Jw07qxq2dWxHVTv-kanwcivOPyFVvXmf9eHgKkhhiSmo6XzXB-Wt4DNj1IYn-lutujl8ex5rxFaF-5CsWs9ola6npfoXpusyvkl7iHi7L2BLxHbtj5A-BQ9XKt4vvS2JqnYplJrM6UuIJHurzy8uRlsDzgyy6jVHqFu_OR9HDTk9pT3iUP8MptED-0LrmkbjUuL94AjDn15Z1pij-PYlKXAfeUqOAK",
        features: ["Crystal Chandeliers", "Grand Stage", "Royal Entrance", "VIP Lounge"],
        color: "from-gold-500 to-gold-600",
    },
    {
        name: "The Garden Terrace",
        tagline: "Open-Air Magic",
        capacity: "200-400",
        sqft: "8,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4vBJLslScJn0kq8iN-dlCeFFJxoDDviwUhK-dOEkFfniRrl9oF7Q-bsVbw3MVWtNt9Qz1Z2b2klUMyHy_n2-cgMRYLOOoPWAoiCXa265kx8i_A9aC7GER5GGrSe4g3Q3xj7D89Qcyj0ICw3jft55YJXioIoapjE9iclWs1ET5AC7V1nPuAIX3axfqXYEloUVtGM5IMW4oVun-oWa7B3_zeje9rZ624RMI06qwZWV06JmEBFd6jiO2VNSWTGyZurQybLEDRGgi4IvA",
        features: ["Lush Gardens", "Starlit Canopy", "Fountain View", "Photo Paradise"],
        color: "from-emerald-500 to-emerald-600",
    },
    {
        name: "The Diamond Suite",
        tagline: "Intimate Elegance",
        capacity: "50-150",
        sqft: "4,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMOmsdP-QJAaW36RKBASM-Qa_UcbdwPWOdiFbrki3XIk9Ouh1hYkh_8ju3g1KWXtt5rR49JWfZHoGPPFjI-y-kA7dhfOk-YUhk5JI2cyUwbGxvw0m_ozABFGqcnxoD5sgKM3KzZeyZo1UsG-vfB0BqqpV2p01y4Hj_v",
        features: ["Private Bar", "Luxury Seating", "Ambient Lighting", "Personal Butler"],
        color: "from-purple-500 to-purple-600",
    },
];

const amenities = [
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Car, label: "Valet Parking" },
    { icon: Utensils, label: "In-House Catering" },
    { icon: Music, label: "Premium Sound" },
];

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function VenueShowcase() {
    const [activeVenue, setActiveVenue] = useState(0);

    return (
        <section className="py-24 lg:py-32 bg-navy-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pattern-lines opacity-5" />

            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gold-500/30">
                        <Crown className="w-4 h-4" />
                        Our Magnificent Venues
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Choose Your <span className="text-gold-400">Perfect Space</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        From grand celebrations to intimate gatherings, discover venues
                        designed to make your special moments unforgettable.
                    </p>
                </motion.div>

                {/* Venue Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {venues.map((venue, index) => (
                        <motion.div
                            key={venue.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            onMouseEnter={() => setActiveVenue(index)}
                            className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${activeVenue === index ? "lg:scale-105 shadow-2xl" : "lg:scale-100"
                                }`}
                        >
                            {/* Background Image */}
                            <div className="aspect-[4/5] relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${venue.image}")` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />

                                {/* Active Indicator */}
                                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${activeVenue === index ? "bg-gold-400 animate-pulse" : "bg-white/30"}`} />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    {/* Tagline */}
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r ${venue.color}`}>
                                        {venue.tagline}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                                        {venue.name}
                                    </h3>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4 text-gold-400" />
                                            <span>{venue.capacity} guests</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Maximize className="w-4 h-4 text-gold-400" />
                                            <span>{venue.sqft} sq.ft</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {venue.features.slice(0, 3).map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                            <AnimatedCounter end={24000} suffix="+" />
                        </div>
                        <p className="text-gray-400 text-sm">Total Sq. Feet</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                            <AnimatedCounter end={4} />
                        </div>
                        <p className="text-gray-400 text-sm">Luxury Venues</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                            <AnimatedCounter end={1500} suffix="+" />
                        </div>
                        <p className="text-gray-400 text-sm">Max Capacity</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                            <AnimatedCounter end={200} suffix="+" />
                        </div>
                        <p className="text-gray-400 text-sm">Parking Spots</p>
                    </div>
                </motion.div>

                {/* Amenities Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center items-center gap-8 mt-12"
                >
                    {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-400">
                            <amenity.icon className="w-5 h-5 text-gold-500" />
                            <span className="text-sm">{amenity.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
