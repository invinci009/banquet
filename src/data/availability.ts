/**
 * Date Availability Configuration
 * Update this file to manage booked dates for the venue
 */

export interface BookedDate {
    date: string; // Format: "YYYY-MM-DD"
    eventType?: "wedding" | "reception" | "engagement" | "corporate" | "birthday" | "anniversary" | "other";
    isPartiallyBooked?: boolean; // For venues with multiple halls
    hallName?: string; // Optional: which hall is booked
}

// Static booked dates (empty - using Google Calendar sync instead)
// Add entries here only as fallback if Google Calendar is not configured
export const bookedDates: BookedDate[] = [];

export const venueConfig = {
    // Minimum days in advance for booking
    minAdvanceBookingDays: 7,

    // Maximum months in advance for booking
    maxAdvanceBookingMonths: 12,

    // Popular days (for highlighting)
    popularDays: [0, 6] as number[], // 0 = Sunday, 6 = Saturday

    // Venue halls (if multiple)
    halls: [
        { id: "main", name: "Main Hall", capacity: 1000 },
        { id: "premium", name: "Premium Hall", capacity: 500 },
    ],
};

/**
 * Helper function to check if a date is booked
 */
export function isDateBooked(date: Date): boolean {
    const dateString = formatDateString(date);
    return bookedDates.some(d => d.date === dateString);
}

/**
 * Helper function to check if a date is partially booked
 */
export function isDatePartiallyBooked(date: Date): boolean {
    const dateString = formatDateString(date);
    const booking = bookedDates.find(d => d.date === dateString);
    return booking?.isPartiallyBooked ?? false;
}

/**
 * Get booking info for a date
 */
export function getBookingInfo(date: Date): BookedDate | undefined {
    const dateString = formatDateString(date);
    return bookedDates.find(d => d.date === dateString);
}

/**
 * Format date to YYYY-MM-DD string
 */
export function formatDateString(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Check if a day is a popular day (weekend)
 */
export function isPopularDay(date: Date): boolean {
    return venueConfig.popularDays.includes(date.getDay());
}

/**
 * Check if a date is in the bookable range
 */
export function isDateBookable(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + venueConfig.minAdvanceBookingDays);

    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + venueConfig.maxAdvanceBookingMonths);

    return date >= minDate && date <= maxDate;
}
