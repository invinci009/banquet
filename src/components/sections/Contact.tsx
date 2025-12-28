"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Calendar, Sparkles, Star, CheckCircle, Heart } from "lucide-react";

const ContactMap = dynamic(() => import("./ContactMap"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center">
            <div className="text-center">
                <div className="w-12 h-12 border-3 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <div className="text-gold-300">Loading Map...</div>
            </div>
        </div>
    )
});

const contactInfo = [
    { icon: MapPin, title: "Visit Us", details: "Alba Colony, Phulwari Sharif, Patna - 05", highlight: "Premium Location" },
    { icon: Phone, title: "Call Us", details: "+91 92349 53085", link: "tel:+919234953085", highlight: "24/7 Available" },
    { icon: Mail, title: "Email Us", details: "info@albacatering.com", link: "mailto:info@albacatering.com", highlight: "Quick Response" },
    { icon: Clock, title: "Working Hours", details: "Daily: 9 AM - 10 PM", highlight: "Open All Days" },
];

const eventTypes = [
    { value: "wedding", label: "👰 Wedding Ceremony", popular: true },
    { value: "reception", label: "🎊 Reception Party", popular: true },
    { value: "engagement", label: "💍 Engagement" },
    { value: "corporate", label: "🏢 Corporate Event" },
    { value: "birthday", label: "🎂 Birthday Party" },
    { value: "anniversary", label: "💕 Anniversary" },
    { value: "other", label: "✨ Other Event" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", eventDate: "", eventType: "", guests: "", message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "6c6fec0f-1c99-46ce-a752-531b0c6efc9a";

    const validateForm = () => {
        const errors: Record<string, string> = {};

        if (!formData.name.trim()) {
            errors.name = "Please enter your name";
        } else if (formData.name.trim().length < 2) {
            errors.name = "Name must be at least 2 characters";
        }

        if (!formData.email.trim()) {
            errors.email = "Please enter your email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            errors.phone = "Please enter your phone number";
        } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
            errors.phone = "Please enter a valid 10-digit phone number";
        }

        if (!formData.eventType) {
            errors.eventType = "Please select an event type";
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setError("Please fix the errors above before submitting");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New Event Inquiry - ${formData.eventType || "General"}`,
                    from_name: "Alba Banquet Hall",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", phone: "", eventDate: "", eventType: "", guests: "", message: "" });
                setFieldErrors({});
                setTimeout(() => setIsSubmitted(false), 8000);
            } else {
                setError("Something went wrong. Please try again or call us directly.");
            }
        } catch {
            setError("Failed to send message. Please try again or call us at +91 92349 53085.");
        }

        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors({ ...fieldErrors, [name]: "" });
        }
    };

    return (
        <section id="contact" className="py-16 lg:py-28 bg-gradient-to-b from-champagne-50 via-white to-champagne-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-burgundy-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
                    <div className="w-full h-full border border-gold-500 rounded-full animate-pulse" />
                    <div className="absolute inset-10 border border-gold-400 rounded-full" />
                </div>
            </div>

            {/* Floating Sparkles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gold-400 rounded-full hidden lg:block"
                    style={{ top: `${15 + i * 15}%`, left: `${5 + i * 20}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                />
            ))}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 px-4 py-2 rounded-full mb-6"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-4 h-4 text-gold-600" />
                        <span className="text-gold-700 font-medium text-sm">Let&apos;s Create Magic Together</span>
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
                        Plan Your <span className="text-gold-600">Dream Event</span>
                    </h2>
                    <p className="text-gold-700/70 text-lg max-w-2xl mx-auto">
                        Share your vision with us and let our expert team craft an unforgettable celebration
                    </p>
                </motion.div>

                {/* Quick Contact Cards - Mobile First */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 lg:mb-16"
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative"
                        >
                            {info.link ? (
                                <a
                                    href={info.link}
                                    className="block p-4 sm:p-6 bg-white rounded-2xl border-2 border-gold-100 hover:border-gold-300 shadow-lg hover:shadow-gold transition-all duration-300"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold-gradient flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-navy-900" />
                                    </div>
                                    <span className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-1">{info.title}</span>
                                    <p className="font-display text-sm sm:text-base font-semibold text-navy-800 mb-1 truncate">{info.details}</p>
                                    <span className="text-xs text-gold-700 font-medium">{info.highlight}</span>
                                </a>
                            ) : (
                                <div className="block p-4 sm:p-6 bg-white rounded-2xl border-2 border-gold-100 shadow-lg">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold-gradient flex items-center justify-center mb-3 sm:mb-4">
                                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-navy-900" />
                                    </div>
                                    <span className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-1">{info.title}</span>
                                    <p className="font-display text-sm sm:text-base font-semibold text-navy-800 mb-1">{info.details}</p>
                                    <span className="text-xs text-gold-700 font-medium">{info.highlight}</span>
                                </div>
                            )}
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gold-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                            {/* Premium Header */}
                            <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 p-6 sm:p-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gold-500/20 backdrop-blur-sm flex items-center justify-center">
                                        <Send className="w-6 h-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Request a Quote</h3>
                                        <p className="text-gray-400 text-sm mt-1">We&apos;ll respond within 2 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="text-center py-12 sm:py-16"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg"
                                            >
                                                <CheckCircle className="w-10 h-10 text-white" />
                                            </motion.div>
                                            <h4 className="font-display text-2xl font-bold text-navy-800 mb-3">Message Sent Successfully!</h4>
                                            <p className="text-gold-700/70 mb-6 max-w-md mx-auto">
                                                Thank you for reaching out. Our team will contact you within 2 hours to discuss your dream event.
                                            </p>
                                            <div className="flex items-center justify-center gap-2 text-gold-600">
                                                <Heart className="w-5 h-5 fill-gold-500" />
                                                <span className="font-medium">We can&apos;t wait to make your event magical!</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            {/* Name & Phone Row */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name ? 'top-1 text-xs text-gold-600 font-medium' : 'top-1/2 -translate-y-1/2 text-gray-400'}`}>
                                                        Your Name *
                                                    </label>
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                                                        <User className="w-4 h-4 text-gold-600" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('name')}
                                                        onBlur={() => setFocusedField(null)}
                                                        required
                                                        className={`w-full pl-14 pr-4 pt-6 pb-3 border-2 rounded-xl focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all text-navy-800 font-medium ${fieldErrors.name ? 'border-red-400 bg-red-50' : 'border-gray-100'}`}
                                                    />
                                                    {fieldErrors.name && (
                                                        <p className="text-red-500 text-xs mt-1 ml-2">{fieldErrors.name}</p>
                                                    )}
                                                </div>
                                                <div className="relative">
                                                    <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${focusedField === 'phone' || formData.phone ? 'top-1 text-xs text-gold-600 font-medium' : 'top-1/2 -translate-y-1/2 text-gray-400'}`}>
                                                        Phone Number *
                                                    </label>
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                                                        <Phone className="w-4 h-4 text-gold-600" />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('phone')}
                                                        onBlur={() => setFocusedField(null)}
                                                        required
                                                        className={`w-full pl-14 pr-4 pt-6 pb-3 border-2 rounded-xl focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all text-navy-800 font-medium ${fieldErrors.phone ? 'border-red-400 bg-red-50' : 'border-gray-100'}`}
                                                    />
                                                    {fieldErrors.phone && (
                                                        <p className="text-red-500 text-xs mt-1 ml-2">{fieldErrors.phone}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email ? 'top-1 text-xs text-gold-600 font-medium' : 'top-1/2 -translate-y-1/2 text-gray-400'}`}>
                                                    Email Address *
                                                </label>
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                                                    <Mail className="w-4 h-4 text-gold-600" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                    className={`w-full pl-14 pr-4 pt-6 pb-3 border-2 rounded-xl focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all text-navy-800 font-medium ${fieldErrors.email ? 'border-red-400 bg-red-50' : 'border-gray-100'}`}
                                                />
                                                {fieldErrors.email && (
                                                    <p className="text-red-500 text-xs mt-1 ml-2">{fieldErrors.email}</p>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${focusedField === 'eventDate' || formData.eventDate ? 'top-1 text-xs text-gold-600 font-medium' : 'top-1/2 -translate-y-1/2 text-gray-400'}`}>
                                                        Event Date (DD/MM/YYYY)
                                                    </label>
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                                                        <Calendar className="w-4 h-4 text-gold-600" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="eventDate"
                                                        value={formData.eventDate}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('eventDate')}
                                                        onBlur={() => setFocusedField(null)}
                                                        placeholder=""
                                                        pattern="\d{2}/\d{2}/\d{4}"
                                                        className="w-full pl-14 pr-4 pt-6 pb-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all text-navy-800 font-medium"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className={`absolute left-12 top-1 text-xs text-gold-600 font-medium pointer-events-none`}>
                                                        Guest Count
                                                    </label>
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                                                        <Star className="w-4 h-4 text-gold-600" />
                                                    </div>
                                                    <select
                                                        name="guests"
                                                        value={formData.guests}
                                                        onChange={handleChange}
                                                        className="w-full pl-14 pr-4 pt-6 pb-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all text-navy-800 font-medium appearance-none bg-white cursor-pointer"
                                                    >
                                                        <option value="">Select guests...</option>
                                                        <option value="50-100">50 - 100 Guests</option>
                                                        <option value="100-300">100 - 300 Guests</option>
                                                        <option value="300-500">300 - 500 Guests</option>
                                                        <option value="500-1000">500 - 1000 Guests</option>
                                                        <option value="1000+">1000+ Guests</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Event Type Pills */}
                                            <div>
                                                <label className="block text-sm font-semibold text-navy-800 mb-3">What are you celebrating?</label>
                                                <div className="flex flex-wrap gap-2">
                                                    {eventTypes.map((type) => (
                                                        <button
                                                            key={type.value}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, eventType: type.value })}
                                                            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${formData.eventType === type.value
                                                                ? 'bg-gold-500 text-white shadow-gold scale-105'
                                                                : 'bg-gray-50 text-gray-600 hover:bg-gold-50 hover:text-gold-700 border border-gray-100'
                                                                }`}
                                                        >
                                                            {type.label}
                                                            {type.popular && formData.eventType !== type.value && (
                                                                <span className="ml-1.5 text-xs text-gold-500">★</span>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="relative">
                                                <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? 'top-2 text-xs text-gold-600 font-medium' : 'top-4 text-gray-400'}`}>
                                                    Tell us about your dream event...
                                                </label>
                                                <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                                                    <MessageSquare className="w-4 h-4 text-gold-600" />
                                                </div>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField(null)}
                                                    rows={4}
                                                    className="w-full pl-14 pr-4 pt-8 pb-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all text-navy-800 resize-none"
                                                />
                                            </div>

                                            {error && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="bg-red-50 border border-red-200 text-red-600 text-sm text-center py-3 px-4 rounded-xl"
                                                >
                                                    {error}
                                                </motion.div>
                                            )}

                                            {/* Submit Button */}
                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full relative py-4 sm:py-5 bg-gold-gradient text-navy-900 font-bold text-lg rounded-xl shadow-gold hover:shadow-gold-lg transition-all overflow-hidden group"
                                            >
                                                <span className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer" />
                                                <span className="relative z-10 flex items-center justify-center gap-3">
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                                                            Sending Your Request...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                            Send Inquiry
                                                        </>
                                                    )}
                                                </span>
                                            </motion.button>

                                            {/* Trust indicators */}
                                            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span>Free Consultation</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span>No Obligation</span>
                                                </div>
                                            </div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Map - Full Width Below */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 lg:mt-16"
                >
                    <div className="text-center mb-6">
                        <h3 className="font-display text-2xl font-bold text-navy-800">Find Us Here</h3>
                        <p className="text-gold-700/70">Alba Colony, Near Alba Masjid, Phulwari Sharif, Patna - 05</p>
                    </div>
                    <div className="h-[400px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                        <ContactMap />

                        {/* Overlay Card */}
                        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-gold-100 max-w-lg mx-auto sm:mx-0"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-navy-900" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-display font-bold text-navy-800">Alba Banquet Hall</h4>
                                        <p className="text-sm text-gray-500">Alba Colony, Phulwari Sharif, Patna - 05</p>
                                    </div>
                                    <a
                                        href="https://maps.google.com/?q=Alba+Catering+Services+Phulwari+Sharif+Patna"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white text-sm font-medium rounded-xl hover:bg-navy-800 transition-colors"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                                {/* Mobile directions button */}
                                <a
                                    href="https://maps.google.com/?q=Alba+Catering+Services+Phulwari+Sharif+Patna"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sm:hidden mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-navy-900 text-white text-sm font-medium rounded-xl hover:bg-navy-800 transition-colors"
                                >
                                    Get Directions
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* WhatsApp CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 lg:mt-16"
                >
                    <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 sm:p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10" />
                        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4 text-center sm:text-left">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Prefer WhatsApp?</h3>
                                    <p className="text-white/80 text-sm sm:text-base">Chat with us instantly for quick responses</p>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/919234953085?text=Hi!%20I%27m%20interested%20in%20Alba%20Catering%20Services%20for%20my%20event."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors text-center shadow-lg"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
