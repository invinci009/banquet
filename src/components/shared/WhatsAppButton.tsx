"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "916205708606"; // Updated phone number
    const message = encodeURIComponent(
        "Hello! I would like to inquire about booking Royal Grandeur Banquet Hall for an event."
    );

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

            {/* Button */}
            <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <MessageCircle className="w-7 h-7 text-white" />
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-navy-800 text-white text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-navy-800 rotate-45" />
            </div>
        </motion.a>
    );
}
