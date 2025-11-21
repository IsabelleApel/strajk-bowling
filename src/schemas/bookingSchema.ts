import { z } from "zod";

export const createBookingSchema = z.object({
    date: z.string().min(1, "Datum krävs"),
    time: z.string().min(1, "Tid krävs"),
    people: z.number().min(1, "Minst 1 person").max(20),
    lanes: z.number().min(1, "minst 1 bana"),
    shoes: z.array(z.object({
        size: z.number().min(20, "Skostorlek krävs").max(60)
    })),
})
.refine((data) => data.people <= data.lanes*4, {
    message: "Max 4 spelare per bana",
    path: ["people"]
})
.refine((data) => data.shoes.length === data.people, {
    message: "Skostorlek behövs till varje spelare",
    path: ["shoes"]
})

export type BookingForm = z.infer<typeof createBookingSchema>