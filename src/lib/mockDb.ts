import fs from 'fs';
import path from 'path';

const MOCK_DB_PATH = path.join(process.cwd(), 'src/data/mock-bookings.json');

export interface MockBooking {
    startDate: string;
    endDate: string;
    status: string;
}

export function getMockBookings(): MockBooking[] {
    try {
        if (!fs.existsSync(MOCK_DB_PATH)) {
            return [];
        }
        const data = fs.readFileSync(MOCK_DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading mock bookings:', error);
        return [];
    }
}

export function addMockBooking(booking: MockBooking) {
    try {
        const bookings = getMockBookings();
        bookings.push(booking);
        
        // Ensure directory exists
        const dir = path.dirname(MOCK_DB_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(MOCK_DB_PATH, JSON.stringify(bookings, null, 2));
    } catch (error) {
        console.error('Error saving mock booking:', error);
    }
}
