"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Calendar, Crown, Sparkles } from "lucide-react";

// Dynamically import map to avoid SSR issues
const ContactMap = dynamic(() => import("./ContactMap"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full bg-navy-800/50 flex items-center justify-center">
            <div className="text-gold-400 animate-pulse">Loading Map...</div>
        </div>
    )
});

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: "123 Exhibition Road, Near Gandhi Maidan, Patna, Bihar 800001",
    },
    {
        icon: Phone,
        title: "Call Us",
        details: "+91 62057 08606",
        link: "tel:+916205708606",
    },
    {
        icon: Mail,
        title: "Email Us",
        details: "info@royalgrandeur.com",
        link: "mailto:info@royalgrandeur.com",
    },
    {
        icon: Clock,
        title: "Open Hours",
        details: "Daily: 9:00 AM - 10:00 PM",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        guests: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            eventDate: "",
            eventType: "",
            guests: "",
            message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pattern-dots opacity-30" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

            {/* Floating Gold Orbs */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-burgundy-700/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    {/* Royal Crown Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-6 shadow-gold-lg"
                    >
                        <Crown className="w-10 h-10 text-navy-900" />
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                        Begin Your <span className="text-gold-400">Royal Journey</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Let us craft an unforgettable celebration for you. Reach out to our concierge team
                        and experience the grandeur of personalized service.
                    </p>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
                        <Sparkles className="w-5 h-5 text-gold-400" />
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 space-y-4"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-5 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-500"
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <info.icon className="w-5 h-5 text-navy-900" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider mb-1">{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} className="text-sm text-gray-300 hover:text-white transition-colors leading-relaxed">
                                                {info.details}
                                            </a>
                                        ) : (
                                            <p className="text-sm text-gray-300 leading-relaxed">{info.details}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gold-500/30 overflow-hidden">
                            {/* Corner Decorations */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/50 rounded-tl-3xl" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/50 rounded-br-3xl" />

                            <h3 className="font-display text-2xl font-bold text-white mb-2 text-center">
                                Request a Consultation
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 text-center">
                                Fill in your details and we&apos;ll get back within 24 hours
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                                        <Send className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white mb-2">Message Received!</h4>
                                    <p className="text-gray-400">Our royal concierge will contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500/50 group-focus-within:text-gold-400 transition-colors" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-navy-900/50 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:bg-navy-900/80 transition-all"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500/50 group-focus-within:text-gold-400 transition-colors" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-navy-900/50 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:bg-navy-900/80 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500/50 group-focus-within:text-gold-400 transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-navy-900/50 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:bg-navy-900/80 transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500/50 group-focus-within:text-gold-400 transition-colors" />
                                            <input
                                                type="date"
                                                name="eventDate"
                                                value={formData.eventDate}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 bg-navy-900/50 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:bg-navy-900/80 transition-all"
                                            />
                                        </div>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-4 bg-navy-900/50 border border-gold-500/20 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:bg-navy-900/80 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-navy-900">Event Type</option>
                                            <option value="wedding" className="bg-navy-900">Grand Wedding</option>
                                            <option value="reception" className="bg-navy-900">Royal Reception</option>
                                            <option value="engagement" className="bg-navy-900">Engagement</option>
                                            <option value="corporate" className="bg-navy-900">Corporate Gala</option>
                                            <option value="birthday" className="bg-navy-900">Birthday Celebration</option>
                                        </select>
                                    </div>

                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gold-500/50 group-focus-within:text-gold-400 transition-colors" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Share your vision with us..."
                                            rows={3}
                                            className="w-full pl-12 pr-4 py-4 bg-navy-900/50 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:bg-navy-900/80 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-900 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-gold hover:shadow-gold-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Crown className="w-5 h-5" />
                                                Request Royal Consultation
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Map Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative h-[350px] sm:h-[450px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border-2 border-gold-500/30">
                            {/* Gold Corner Accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold-500 rounded-tl-3xl z-10" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold-500 rounded-br-3xl z-10" />
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-gold-500/50 rounded-tr-3xl z-10" />
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-gold-500/50 rounded-bl-3xl z-10" />

                            <ContactMap />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-gold-400/80 font-display text-lg italic">
                        &ldquo;Where Every Celebration Becomes a Royal Affair&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
