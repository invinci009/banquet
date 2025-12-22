"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { ArrowLeft, Check, Phone, Calendar, Clock, IndianRupee, ArrowRight } from "lucide-react";
import { Service, iconMap } from "@/data/services";

interface Props {
    service: Service;
}

export default function ServiceDetailClient({ service }: Props) {
    const Icon = iconMap[service.iconName];

    return (
        <main className="relative bg-white overflow-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden min-h-[60vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors mb-8"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to All Services</span>
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Icon Badge */}
                            <div className="inline-flex items-center gap-3 bg-gold-500/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-navy-900" />
                                </div>
                                <span className="text-gold-300 font-medium">{service.highlight}</span>
                            </div>

                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                {service.shortDesc}
                            </p>

                            {/* Quick Info */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <IndianRupee className="w-4 h-4 text-gold-400" />
                                    <span className="text-white text-sm">{service.pricing}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <Clock className="w-4 h-4 text-gold-400" />
                                    <span className="text-white text-sm">{service.duration}</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-primary">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        Book This Service
                                    </span>
                                </Link>
                                <a
                                    href="tel:+916205708606"
                                    className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call: +91 62057 08606
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Full Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-display text-3xl font-bold text-navy-800 mb-6">
                                About This Service
                            </h2>
                            <p className="text-gold-700/80 text-lg leading-relaxed mb-8">
                                {service.fullDescription}
                            </p>

                            {/* Features Grid */}
                            <h3 className="font-display text-xl font-bold text-navy-800 mb-4">
                                What's Included
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {service.features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-gold-600" />
                                        </div>
                                        <span className="text-gold-700 text-sm">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gallery */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="font-display text-3xl font-bold text-navy-800 mb-6">
                                Gallery
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {service.galleryImages.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative aspect-square rounded-2xl overflow-hidden group"
                                    >
                                        <img
                                            src={image}
                                            alt={`${service.title} gallery ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/20 transition-colors duration-300" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Book <span className="text-gold-400">{service.title}</span>?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Contact us today to discuss your requirements and get a customized quote.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Free Consultation
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </Link>
                            <Link
                                href="/services"
                                className="px-8 py-4 border-2 border-white/30 hover:border-gold-400 hover:bg-gold-400/10 text-white font-semibold rounded-xl transition-all"
                            >
                                View All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
