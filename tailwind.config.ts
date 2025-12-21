import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Premium Gold Palette
                gold: {
                    50: "#FDF9E7",
                    100: "#FAF0C8",
                    200: "#F5E18F",
                    300: "#EFD256",
                    400: "#E8C547",
                    500: "#D4AF37", // Primary Gold
                    600: "#B8922F",
                    700: "#8F7124",
                    800: "#665119",
                    900: "#3D310F",
                },
                // Royal Burgundy Palette
                burgundy: {
                    50: "#FCF2F3",
                    100: "#F8E5E7",
                    200: "#F0CACF",
                    300: "#E6ABB2",
                    400: "#D88894",
                    500: "#C6616E",
                    600: "#A8404D",
                    700: "#722F37", // Primary Burgundy
                    800: "#5A252C",
                    900: "#421B20",
                },
                // Champagne Accent
                champagne: {
                    50: "#FEFDFB",
                    100: "#FDF9F3",
                    200: "#FAF3E7",
                    300: "#F7E7CE", // Primary Champagne
                    400: "#F0D9B5",
                    500: "#E5C699",
                    600: "#D4AD75",
                    700: "#BC9054",
                    800: "#8F6D3F",
                    900: "#5C462A",
                },
                // Dark Navy
                navy: {
                    50: "#E8E9EC",
                    100: "#D1D3D9",
                    200: "#A3A7B3",
                    300: "#757B8D",
                    400: "#4A5169",
                    500: "#2E3447",
                    600: "#252A3C",
                    700: "#1a1a2e", // Primary Navy
                    800: "#141424",
                    900: "#0E0E1A",
                },
            },
            fontFamily: {
                display: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "fade-up": "fadeUp 0.8s ease-out forwards",
                "slide-in-right": "slideInRight 0.6s ease-out forwards",
                "slide-in-left": "slideInLeft 0.6s ease-out forwards",
                shimmer: "shimmer 2s infinite linear",
                float: "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "bounce-slow": "bounce 2s infinite",
                "spin-slow": "spin 8s linear infinite",
                glow: "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(50px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-50px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
                    "100%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E8C547 50%, #D4AF37 100%)",
                "hero-gradient": "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                shimmer: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            },
            boxShadow: {
                gold: "0 4px 30px rgba(212, 175, 55, 0.3)",
                "gold-lg": "0 10px 50px rgba(212, 175, 55, 0.4)",
                elegant: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            },
        },
    },
    plugins: [],
};

export default config;
