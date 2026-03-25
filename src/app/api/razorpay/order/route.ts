import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Use a fixed advance booking amount. e.g., INR 5000
        // Razorpay accepts amount in paise (multiply by 100)
        const advanceAmount = 5000;
        const amountInPaise = advanceAmount * 100;

        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                startDate: body.startDate,
                endDate: body.endDate,
                eventType: body.eventType,
            }
        };

        const order = await razorpay.orders.create(options);

        // Bypassing database for testing
        try {
            await prisma.booking.create({
                data: {
                    name: body.name,
                    email: body.email,
                    phone: body.phone,
                    startDate: body.startDate,
                    endDate: body.endDate,
                    eventType: body.eventType,
                    guests: body.guests || null,
                    message: body.message || null,
                    amount: advanceAmount,
                    razorpayOrderId: order.id,
                    status: "PENDING"
                }
            });
        } catch (dbError) {
            console.warn("Database bypassed for testing: Failed to save PENDING booking", (dbError as Error).message);
        }

        return NextResponse.json({
            success: true,
            order,
            amount: advanceAmount
        });

    } catch (error) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to create order" },
            { status: 500 }
        );
    }
}
