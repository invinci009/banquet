"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Calendar } from "lucide-react";

const ContactMap = dynamic(() => import("./ContactMap"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full bg-gray-100 flex items-center justify-center">
            <div className="text-gold-600 animate-pulse">Loading Map...</div>
        </div>
    )
});

const contactInfo = [
    { icon: MapPin, title: "Address", details: "123 Exhibition Road, Near Gandhi Maidan, Patna, Bihar 800001" },
    { icon: Phone, title: "Phone", details: "+91 62057 08606", link: "tel:+916205708606" },
    { icon: Mail, title: "Email", details: "info@royalgrandeur.com", link: "mailto:info@royalgrandeur.com" },
    { icon: Clock, title: "Hours", details: "Daily: 9 AM - 10 PM" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", eventDate: "", eventType: "", message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    // Replace with your Web3Forms access key from https://web3forms.com
    const WEB3FORMS_ACCESS_KEY = "6c6fec0f-1c99-46ce-a752-531b0c6efc9a";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New Event Inquiry - ${formData.eventType || "General"}`,
                    from_name: "Royal Grandeur Website",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    event_date: formData.eventDate,
                    event_type: formData.eventType,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", phone: "", eventDate: "", eventType: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Failed to send message. Please try again.");
        }

        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-champagne-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-gold-600 font-medium text-sm uppercase tracking-widest">Get In Touch</span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mt-2">
                        Plan Your Dream Event
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <h3 className="font-display text-xl font-bold text-navy-800 mb-6">Send Us a Message</h3>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                    <Send className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-navy-800 mb-2">Message Sent!</h4>
                                <p className="text-gray-500">We&apos;ll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors" />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleChange}
                                            placeholder="DD/MM/YYYY"
                                            pattern="\d{2}/\d{2}/\d{4}"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                                        />
                                    </div>
                                    <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors">
                                        <option value="">Select Event</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="reception">Reception</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="corporate">Corporate</option>
                                        <option value="birthday">Birthday</option>
                                    </select>
                                </div>

                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message..." rows={3} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors resize-none" />
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm text-center py-2">{error}</div>
                                )}

                                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                                    ) : (
                                        <><Send className="w-5 h-5" /> Send Message</>
                                    )}
                                </button>
                            </form>
                        )}

                        {/* Contact Info Row */}
                        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                            {contactInfo.map((info) => (
                                <div key={info.title} className="flex items-start gap-3">
                                    <info.icon className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-xs font-medium text-gray-400 uppercase">{info.title}</span>
                                        {info.link ? (
                                            <a href={info.link} className="block text-sm text-navy-700 hover:text-gold-600 transition-colors">{info.details}</a>
                                        ) : (
                                            <p className="text-sm text-navy-700">{info.details}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-[400px] lg:h-auto lg:min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <ContactMap />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
