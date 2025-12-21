"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Calendar } from "lucide-react";

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
        title: "Address",
        details: "123 Exhibition Road, Near Gandhi Maidan, Patna, Bihar 800001",
    },
    {
        icon: Phone,
        title: "Phone",
        details: "+91 62057 08606",
        link: "tel:+916205708606",
    },
    {
        icon: Mail,
        title: "Email",
        details: "info@royalgrandeur.com",
        link: "mailto:info@royalgrandeur.com",
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: "Open Daily: 9:00 AM - 10:00 PM",
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

        // Simulate form submission
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

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-navy-800 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-burgundy-700/5 rounded-full blur-3xl" />

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
                        <MapPin className="w-4 h-4" />
                        Get In Touch
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                        Plan Your <span className="text-gold-400">Dream Event</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Ready to create unforgettable memories? Contact us today to schedule a venue tour
                        or discuss your event requirements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <h3 className="font-display text-2xl font-bold text-white mb-6">
                                Send Us a Message
                            </h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Send className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                                    <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {/* Name */}
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            required
                                            className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {/* Event Date */}
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="date"
                                                name="eventDate"
                                                value={formData.eventDate}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                                            />
                                        </div>

                                        {/* Event Type */}
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-navy-800">Select Event Type</option>
                                            <option value="wedding" className="bg-navy-800">Wedding</option>
                                            <option value="reception" className="bg-navy-800">Reception</option>
                                            <option value="engagement" className="bg-navy-800">Engagement</option>
                                            <option value="corporate" className="bg-navy-800">Corporate Event</option>
                                            <option value="birthday" className="bg-navy-800">Birthday Party</option>
                                            <option value="other" className="bg-navy-800">Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your event..."
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                                >
                                    <info.icon className="w-5 h-5 text-gold-400 mb-2" />
                                    <h4 className="text-sm font-semibold text-white mb-1">{info.title}</h4>
                                    {info.link ? (
                                        <a href={info.link} className="text-xs text-gray-400 hover:text-gold-400 transition-colors">
                                            {info.details}
                                        </a>
                                    ) : (
                                        <p className="text-xs text-gray-400">{info.details}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10"
                    >
                        <ContactMap />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
