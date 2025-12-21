"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const events = [
    {
        title: "Weddings",
        description: "Plan your dream day with elegant décor and seamless management. Create memories that last a lifetime.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhFzMaEY1bazql25rnFq2JWY42XnYzea1LaxUTIvzbTqHe5tAWfOBlCD9EZ5nCwFf3GAgAsPh-o1Sz9XMCKY9Ve6G0aTVcBzPDPsKug1BGDvFXCo39KcT1ZDRfIlTK1qcmBAg4ga2fkNxRHgWfvhvOVo0Ef82RTLssnoAgo8Wn2C5DdRIh3_sEkduHVt2lifjER0KDW-C5WmAvV0XXJhCVB3-R9Kah543bcYqZwsjCIrKRp5Sa8jpVglSGbMm32RUGjSlbOcZHtQEx",
        tag: "Most Popular",
    },
    {
        title: "Corporate Events",
        description: "Professional gatherings, seminars, and product launches with state-of-the-art facilities.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg09UVJEfFVBh8BcvoNIkP0gVJBF206p2UIXIuH2zc_hQ81xROQXRoIgskTBtqP_Sf5Lz5UW9WYwr-_VhxC5pWuCj0qmXEFpZiwgBpin_i1QBt7G1e6LO0dGhKhgc5Emk0g_fNni006ENuxrtJ-c_SgdcZxXh1QMu5akYgQNYzp1j16oe0SC45ZjF4lhxrcNLqHFieXRsgsTnV2Stu9qht2C-WujRfiJ2iv-8QC_JaLzUS1Wtk61-z2n_FamjayJj-B-djcr5K9_AA",
        tag: "Professional",
    },
    {
        title: "Private Parties",
        description: "Intimate celebrations, anniversaries, and family get-togethers in a warm, welcoming ambiance.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4vBJLslScJn0kq8iN-dlCeFFJxoDDviwUhK-dOEkFfniRrl9oF7Q-bsVbw3MVWtNt9Qz1Z2b2klUMyHy_n2-cgMRYLOOoPWAoiCXa265kx8i_A9aC7GER5GGrSe4g3Q3xj7D89Qcyj0ICw3jft55YJXioIoapjE9iclWs1ET5AC7V1nPuAIX3axfqXYEloUVtGM5IMW4oVun-oWa7B3_zeje9rZ624RMI06qwZWV06JmEBFd6jiO2VNSWTGyZurQybLEDRGgi4IvA",
        tag: "Exclusive",
    },
];

export default function Events() {
    return (
        <section id="venues" className="py-24 lg:py-32 bg-champagne-50 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 pattern-dots opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
                >
                    <div className="max-w-2xl">
                        <span className="section-subheading">Events & Occasions</span>
                        <h2 className="section-heading">
                            Tailored Solutions for <span className="text-gold-600">Every Occasion</span>
                        </h2>
                    </div>
                    <a
                        href="#services"
                        className="flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors group"
                    >
                        View All Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${event.image}")` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />

                                {/* Tag */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                                        {event.tag}
                                    </span>
                                </div>

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {event.description}
                            </p>

                            {/* Hover Line */}
                            <div className="mt-4 h-0.5 bg-gradient-to-r from-gold-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
