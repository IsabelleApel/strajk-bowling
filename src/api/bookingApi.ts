import type { BookingRequest, BookingResponse } from "../types/Booking";

export async function sendBooking(request: BookingRequest): Promise<BookingResponse> {
    const response = await fetch('https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "strajk-4wOFSa0vV0WtlFYK",
        },
        body: JSON.stringify(request)
    });

    if(!response.ok) {
        throw new Error("Bokningen kunde inte genomföras")
    };

    return response.json();
}

