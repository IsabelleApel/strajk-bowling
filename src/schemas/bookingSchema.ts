import { z } from "zod";

export const createBookingSchema = z.object({
    date: z.string().min(1, "Datum krävs"),
    time: z.string().min(1, "Tid krävs"),
    people: z.number().min(1, "Minst 1 person").max(20, "Max 20 personer per bokning"),
    lanes: z.number().min(1, "Minst 1 bana"),
    shoes: z.array(z.object({
        size: z.number().min(20, "Minsta skostorlek är 20").max(60, "Största skostorlek är 60")
    })),
})
.refine((data) => data.shoes.length === data.people, {
    message: "Skostorlek behövs till varje spelare",
    path: ["shoes"]
})
.refine((data) => !(data.people === 1 && data.lanes > 1), {
    message: "Om endast en spelare väljs, får antalet banor vara max 1",
    path: ["lanes"]
})
.refine((data) => data.people <= (data.lanes)*4, {
    message: "Max 4 spelare per bana",
    path: ["people"]
})

export type BookingForm = z.infer<typeof createBookingSchema>