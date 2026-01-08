"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // Mutation observer to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const newInteractiveElements = document.querySelectorAll("a, button, input, textarea, select");
                    newInteractiveElements.forEach((el) => {
                        el.addEventListener("mouseenter", handleMouseEnter);
                        el.addEventListener("mouseleave", handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden lg:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <div className={`relative w-full h-full`}>
                {/* Main Dot */}
                <motion.div
                    animate={{
                        scale: isHovered ? 0.5 : 1,
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full"
                />

                {/* Outer Ring */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.5 : 1,
                        opacity: isHovered ? 1 : 0.5,
                        borderColor: isHovered ? "#D4AF37" : "#D4AF37" // gold-400
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 border border-gold-400 rounded-full"
                />
            </div>
        </motion.div>
    );
}
