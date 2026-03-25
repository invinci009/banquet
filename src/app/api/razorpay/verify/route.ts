import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { addMockBooking } from "@/lib/mockDb";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            bookingDetails
        } = body;

        const secret = process.env.RAZORPAY_KEY_SECRET as string;

        // Create the expected signature
        const generated_signature = crypto
            .createHmac("sha256", secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (generated_signature !== razorpay_signature) {
            // Update the booking status to FAILED in the DB if the signature is invalid
            try {
                await prisma.booking.update({
                    where: { razorpayOrderId: razorpay_order_id },
                    data: { status: "FAILED" }
                });
            } catch (dbError) {
                console.warn("Database bypassed for testing: Failed to update booking as FAILED", (dbError as Error).message);
            }

            return NextResponse.json({
                success: false,
                error: "Invalid payment signature"
            }, { status: 400 });
        }

        // Signature is valid. Payment is successful.
        // Update the booking in the database
        try {
            await prisma.booking.update({
                where: { razorpayOrderId: razorpay_order_id },
                data: {
                    razorpayPaymentId: razorpay_payment_id,
                    status: "CONFIRMED"
                }
            });
        } catch (dbError) {
            console.warn("Database bypassed for testing: Saving to mock JSON", (dbError as Error).message);
            // Save to mock storage for testing since DB is down
            addMockBooking({
                startDate: bookingDetails.startDate,
                endDate: bookingDetails.endDate,
                status: "CONFIRMED"
            });
        }

        console.log("Payment verified and booking confirmed for order:", razorpay_order_id);
        console.log("Booking Details:", bookingDetails);

        return NextResponse.json({
            success: true,
            message: "Payment verified successfully",
        });

    } catch (error) {
        console.error("Razorpay Verify Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to verify transaction" },
            { status: 500 }
        );
    }
}
