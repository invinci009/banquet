"use client";

import { motion } from "framer-motion";

// Card skeleton for services/gallery
export function CardSkeleton() {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg animate-pulse">
            <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
            <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded-lg w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-1/2" />
                <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-full" />
                    <div className="h-3 bg-gray-100 rounded w-5/6" />
                </div>
                <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-100 rounded-full" />
                    <div className="h-6 w-20 bg-gray-100 rounded-full" />
                </div>
            </div>
        </div>
    );
}

// Hero section skeleton
export function HeroSkeleton() {
    return (
        <div className="min-h-screen bg-navy-900 flex items-center justify-center animate-pulse">
            <div className="text-center space-y-6 px-4">
                <div className="w-20 h-20 mx-auto bg-gold-500/20 rounded-full" />
                <div className="h-12 bg-white/10 rounded-lg w-80 mx-auto" />
                <div className="h-6 bg-white/5 rounded w-64 mx-auto" />
                <div className="flex gap-4 justify-center">
                    <div className="h-12 w-36 bg-gold-500/30 rounded-xl" />
                    <div className="h-12 w-36 bg-white/10 rounded-xl" />
                </div>
            </div>
        </div>
    );
}

// Gallery image skeleton
export function GallerySkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`${i === 0 ? 'col-span-2 row-span-2' : ''} bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl animate-pulse`}
                />
            ))}
        </div>
    );
}

// Contact form skeleton
export function FormSkeleton() {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl animate-pulse">
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-14 bg-gray-100 rounded-xl" />
                    <div className="h-14 bg-gray-100 rounded-xl" />
                </div>
                <div className="h-14 bg-gray-100 rounded-xl" />
                <div className="h-14 bg-gray-100 rounded-xl" />
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-14 bg-gray-100 rounded-xl" />
                    <div className="h-14 bg-gray-100 rounded-xl" />
                </div>
                <div className="h-32 bg-gray-100 rounded-xl" />
                <div className="h-14 bg-gold-200 rounded-xl" />
            </div>
        </div>
    );
}

// Stats skeleton
export function StatsSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 animate-pulse">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-lg mx-auto mb-3" />
                    <div className="h-8 bg-white/10 rounded w-20 mx-auto mb-2" />
                    <div className="h-4 bg-white/5 rounded w-24 mx-auto" />
                </div>
            ))}
        </div>
    );
}

// Page loading wrapper
export function PageLoader({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
