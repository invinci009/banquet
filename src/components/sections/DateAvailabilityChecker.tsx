"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Sparkles, Check, X, Loader2, RefreshCw } from "lucide-react";
import {
    isDateBookable,
    isPopularDay,
    formatDateString,
    bookedDates as staticBookedDates
} from "@/data/availability";
import { fetchCalendarEvents, getBookedDatesFromEvents } from "@/lib/googleCalendar";

interface DateAvailabilityCheckerProps {
    onDateSelect?: (date: Date, dateString: string) => void;
    selectedDate?: string;
    onBookedDatesChange?: (dates: Set<string>) => void;
}

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DateAvailabilityChecker({
    onDateSelect,
    selectedDate,
    onBookedDatesChange
}: DateAvailabilityCheckerProps) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [direction, setDirection] = useState(0);
    const [hoveredDate, setHoveredDate] = useState<string | null>(null);

    // Google Calendar state
    const [calendarBookedDates, setCalendarBookedDates] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [lastSynced, setLastSynced] = useState<Date | null>(null);

    // Fetch booked dates from Google Calendar on mount
    useEffect(() => {
        loadCalendarEvents();
    }, []);

    const loadCalendarEvents = async () => {
        setIsLoading(true);
        try {
            const events = await fetchCalendarEvents();
            const bookedDates = getBookedDatesFromEvents(events);
            setCalendarBookedDates(bookedDates);
            setLastSynced(new Date());
        } catch (error) {
            console.error('Failed to load calendar events:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Combine static and calendar booked dates
    const allBookedDates = useMemo(() => {
        const staticDates = staticBookedDates.map(d => d.date);
        return new Set([...staticDates, ...calendarBookedDates]);
    }, [calendarBookedDates]);

    // Notify parent of booked dates
    useEffect(() => {
        onBookedDatesChange?.(allBookedDates);
    }, [allBookedDates, onBookedDatesChange]);

    // Check if a date is booked
    const isDateBooked = (date: Date): boolean => {
        const dateStr = formatDateString(date);
        return allBookedDates.has(dateStr);
    };

    // Generate calendar days for current month
    const calendarDays = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days: (Date | null)[] = [];

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }

        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(currentYear, currentMonth, day));
        }

        return days;
    }, [currentMonth, currentYear]);

    const navigateMonth = (delta: number) => {
        setDirection(delta);
        const newDate = new Date(currentYear, currentMonth + delta, 1);

        // Limit navigation to 12 months in the future
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 12);

        if (newDate > maxDate) return;
        if (newDate < new Date(today.getFullYear(), today.getMonth(), 1)) return;

        setCurrentMonth(newDate.getMonth());
        setCurrentYear(newDate.getFullYear());
    };

    const handleDateClick = (date: Date) => {
        if (!isDateBookable(date) || isDateBooked(date)) return;

        const dateString = formatDateString(date);
        onDateSelect?.(date, dateString);
    };

    const getDateStatus = (date: Date) => {
        const dateStr = formatDateString(date);
        const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if (isPast) return "past";
        if (!isDateBookable(date)) return "unavailable";
        if (isDateBooked(date)) return "booked";
        if (dateStr === selectedDate) return "selected";
        if (isPopularDay(date)) return "popular";
        return "available";
    };

    const getStatusStyles = (status: string) => {
        switch (status) {
            case "selected":
                return "bg-gold-500 text-navy-900 ring-4 ring-gold-300/50 font-bold scale-110";
            case "booked":
                return "bg-red-100 text-red-400 cursor-not-allowed line-through";
            case "available":
                return "bg-white hover:bg-gold-50 text-navy-800 cursor-pointer hover:border-gold-400 border-2 border-transparent";
            case "popular":
                return "bg-gold-50 hover:bg-gold-100 text-navy-800 cursor-pointer border-2 border-gold-200 hover:border-gold-400";
            case "past":
            case "unavailable":
                return "bg-gray-100 text-gray-300 cursor-not-allowed";
            default:
                return "";
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-navy-900" />
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-navy-800">Check Availability</h4>
                        <p className="text-xs text-gray-500">
                            {isLoading ? "Syncing calendar..." : "Select your event date"}
                        </p>
                    </div>
                </div>
                {/* Refresh button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={loadCalendarEvents}
                    disabled={isLoading}
                    className="p-2 rounded-lg hover:bg-gold-50 transition-colors disabled:opacity-50"
                    title={lastSynced ? `Last synced: ${lastSynced.toLocaleTimeString()}` : "Refresh"}
                >
                    <RefreshCw className={`w-4 h-4 text-gold-600 ${isLoading ? 'animate-spin' : ''}`} />
                </motion.button>
            </div>

            {/* Calendar Container */}
            <div className="bg-white rounded-2xl border-2 border-gold-100 shadow-lg overflow-hidden relative">
                {/* Loading Overlay */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center"
                        >
                            <div className="text-center">
                                <Loader2 className="w-8 h-8 text-gold-500 animate-spin mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Loading availability...</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Month Navigation */}
                <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 p-4 flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigateMonth(-1)}
                        className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="Previous month"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    <div className="text-center">
                        <h3 className="font-display text-lg font-bold text-white">
                            {MONTHS[currentMonth]} {currentYear}
                        </h3>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigateMonth(1)}
                        className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="Next month"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Weekday Headers */}
                <div className="grid grid-cols-7 bg-gold-50 border-b border-gold-100">
                    {WEEKDAYS.map((day) => (
                        <div
                            key={day}
                            className="py-2 text-center text-xs font-bold text-gold-700 uppercase tracking-wider"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="p-3 overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`${currentMonth}-${currentYear}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="grid grid-cols-7 gap-1.5"
                        >
                            {calendarDays.map((date, index) => {
                                if (!date) {
                                    return <div key={`empty-${index}`} className="aspect-square" />;
                                }

                                const dateStr = formatDateString(date);
                                const status = getDateStatus(date);
                                const isHovered = hoveredDate === dateStr;

                                return (
                                    <motion.div
                                        key={dateStr}
                                        className="relative"
                                        onMouseEnter={() => setHoveredDate(dateStr)}
                                        onMouseLeave={() => setHoveredDate(null)}
                                    >
                                        <motion.button
                                            whileHover={status === "available" || status === "popular" ? { scale: 1.05 } : {}}
                                            whileTap={status === "available" || status === "popular" ? { scale: 0.95 } : {}}
                                            onClick={() => handleDateClick(date)}
                                            disabled={status === "booked" || status === "past" || status === "unavailable"}
                                            className={`
                                                w-full aspect-square rounded-xl flex items-center justify-center
                                                text-sm font-medium transition-all duration-200
                                                ${getStatusStyles(status)}
                                            `}
                                        >
                                            {date.getDate()}
                                            {status === "popular" && (
                                                <Sparkles className="w-2.5 h-2.5 absolute top-1 right-1 text-gold-500" />
                                            )}
                                            {status === "selected" && (
                                                <Check className="w-3 h-3 absolute bottom-1 right-1 text-navy-900" />
                                            )}
                                        </motion.button>

                                        {/* Tooltip on hover */}
                                        <AnimatePresence>
                                            {isHovered && status === "booked" && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 whitespace-nowrap"
                                                >
                                                    <div className="bg-navy-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                                                        <X className="w-3 h-3 text-red-400" />
                                                        Booked
                                                    </div>
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy-900" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Legend */}
                <div className="px-4 pb-4">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-white border-2 border-gold-200" />
                            <span className="text-gray-600">Available</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-gold-100 border-2 border-gold-300" />
                            <span className="text-gray-600">Popular</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-100" />
                            <span className="text-gray-600">Booked</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-gold-500" />
                            <span className="text-gray-600">Selected</span>
                        </div>
                    </div>
                    {/* Sync status */}
                    {lastSynced && (
                        <p className="text-center text-xs text-gray-400 mt-2">
                            Synced with Google Calendar • {lastSynced.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    )}
                </div>
            </div>

            {/* Selected Date Confirmation */}
            <AnimatePresence>
                {selectedDate && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-green-800">Date Selected!</p>
                            <p className="text-sm text-green-600">
                                {(() => {
                                    // Handle both YYYY-MM-DD and DD/MM/YYYY formats
                                    let year, month, day;
                                    if (selectedDate.includes('/')) {
                                        [day, month, year] = selectedDate.split('/').map(Number);
                                    } else {
                                        [year, month, day] = selectedDate.split('-').map(Number);
                                    }
                                    const date = new Date(year, month - 1, day);
                                    return date.toLocaleDateString('en-IN', {
                                        weekday: 'long',
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    });
                                })()}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
