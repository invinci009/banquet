import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getMockBookings } from "@/lib/mockDb";

export async function GET() {
    try {
        const bookings = await prisma.booking.findMany({
            where: {
                status: "CONFIRMED"
            },
            select: {
                startDate: true,
                endDate: true,
            }
        });

        const mockBookings = getMockBookings();
        const allBookings = [...bookings, ...mockBookings];

        return NextResponse.json({
            success: true,
            bookedDates: allBookings
        });
    } catch (error) {
        console.warn("Database bypassed or unavailable for fetching booked dates", (error as Error).message);
        const mockBookings = getMockBookings();
        return NextResponse.json({
            success: true,
            bookedDates: mockBookings
        });
    }
}
