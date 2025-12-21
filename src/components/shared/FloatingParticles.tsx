"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
}));

export default function FloatingParticles() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-gold-400/20"
                    style={{
                        left: `${particle.x}%`,
                        width: particle.size,
                        height: particle.size,
                        willChange: "transform, opacity",
                    }}
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{
                        y: "-100px",
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className="w-full h-full rounded-full bg-gold-400" />
                </motion.div>
            ))}
        </div>
    );
}
