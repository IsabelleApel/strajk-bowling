import Header from "../../components/header/Header"
import BookingDetails from "../../components/bookingDetails/BookingDetails"
import { useLocation } from "react-router-dom"
import './confirmation.css'

export default function Confirmation() {
    const location = useLocation();
    const booking = location.state?.booking;

    return (
        <section className="page">
            <Header />
            {!booking ? (
                <p className="no-booking">Ingen bokning hittades</p>
            ) : (
                <BookingDetails 
                    when={booking.bookingDetails.when}
                    people={booking.bookingDetails.people}
                    lanes={booking.bookingDetails.lanes}
                    id={booking.bookingDetails.bookingId}
                    price={booking.bookingDetails.price}                                                                                                                                                                                                          
                />
            )}
        </section>
    )
}