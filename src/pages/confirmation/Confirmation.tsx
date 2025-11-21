import Header from "../../components/header/Header"
import BookingDetails from "../../components/bookingDetails/BookingDetails"
import { useLocation } from "react-router-dom"

export default function Confirmation() {
    const location = useLocation();
    const booking = location.state?.booking;

    if(!booking) {
        return <p>Ingen bokning hittades</p>
    };

    console.log(booking);


    return (
        <section className="page">
            <Header />
            <BookingDetails 
                when={booking.when}
                people={booking.people}
                lanes={booking.lanes}
                id={booking.id}
                price={booking.price}
            />
        </section>
    )
}