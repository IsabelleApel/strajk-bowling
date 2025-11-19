export type BookingForm = {
    date: string,
    time: string,
    bowlers: number,
    lanes: number,
    shoes: {size: string}[]
}