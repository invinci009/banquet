/**
 * Google Calendar API Integration
 * Fetches booked dates from a public Google Calendar
 */

export interface CalendarEvent {
    id: string;
    summary: string;
    start: string; // Date string YYYY-MM-DD
    end: string;
}

export interface CalendarConfig {
    calendarId: string;
    apiKey: string;
}

// Cache for calendar events
let cachedEvents: CalendarEvent[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch events from Google Calendar API
 */
export async function fetchCalendarEvents(
    config?: Partial<CalendarConfig>
): Promise<CalendarEvent[]> {
    const calendarId = config?.calendarId || process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
    const apiKey = config?.apiKey || process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    // Return cached data if still valid
    if (cachedEvents && Date.now() - cacheTimestamp < CACHE_DURATION_MS) {
        return cachedEvents;
    }

    // If no credentials, return empty array (fallback to static data)
    if (!calendarId || !apiKey) {
        console.warn('Google Calendar credentials not configured. Using static data.');
        return [];
    }

    try {
        // Get events from today to 12 months in the future
        const now = new Date();
        const timeMin = now.toISOString();

        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + 12);
        const timeMax = futureDate.toISOString();

        const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`);
        url.searchParams.set('key', apiKey);
        url.searchParams.set('timeMin', timeMin);
        url.searchParams.set('timeMax', timeMax);
        url.searchParams.set('singleEvents', 'true');
        url.searchParams.set('orderBy', 'startTime');
        url.searchParams.set('maxResults', '250');

        const response = await fetch(url.toString(), {
            next: { revalidate: 300 } // Cache for 5 minutes in Next.js
        });

        if (!response.ok) {
            throw new Error(`Calendar API error: ${response.status}`);
        }

        const data = await response.json();

        // Parse events
        const events: CalendarEvent[] = (data.items || []).map((item: {
            id: string;
            summary?: string;
            start?: { date?: string; dateTime?: string };
            end?: { date?: string; dateTime?: string };
        }) => ({
            id: item.id,
            summary: item.summary || 'Booked',
            start: parseEventDate(item.start),
            end: parseEventDate(item.end),
        }));

        // Update cache
        cachedEvents = events;
        cacheTimestamp = Date.now();

        return events;
    } catch (error) {
        console.error('Failed to fetch calendar events:', error);
        return cachedEvents || []; // Return stale cache if available
    }
}

/**
 * Parse Google Calendar event date
 */
function parseEventDate(dateObj?: { date?: string; dateTime?: string }): string {
    if (!dateObj) return '';

    // All-day events use 'date', timed events use 'dateTime'
    if (dateObj.date) {
        return dateObj.date; // Already in YYYY-MM-DD format
    }

    if (dateObj.dateTime) {
        return dateObj.dateTime.split('T')[0]; // Extract date part
    }

    return '';
}

/**
 * Check if a specific date has an event
 */
export function isDateBookedInCalendar(date: Date, events: CalendarEvent[]): boolean {
    const dateStr = formatDateForCalendar(date);

    return events.some(event => {
        // Check if date falls within event range
        return dateStr >= event.start && dateStr < event.end;
    });
}

/**
 * Get all booked date strings from calendar events
 */
export function getBookedDatesFromEvents(events: CalendarEvent[]): string[] {
    const bookedDates: Set<string> = new Set();

    events.forEach(event => {
        // For single-day events
        if (event.start === event.end || !event.end) {
            bookedDates.add(event.start);
            return;
        }

        // For multi-day events, add all dates in range
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);

        const currentDate = new Date(startDate);
        while (currentDate < endDate) {
            bookedDates.add(formatDateForCalendar(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
    });

    return Array.from(bookedDates);
}

/**
 * Format date to YYYY-MM-DD for calendar comparison
 */
function formatDateForCalendar(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Clear the cache (useful for forcing refresh)
 */
export function clearCalendarCache(): void {
    cachedEvents = null;
    cacheTimestamp = 0;
}
