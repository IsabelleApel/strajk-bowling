import { useForm, FormProvider } from "react-hook-form"
import Header from "../../components/header/Header"
import InfoForm from "../../components/InfoForm/InfoForm";
import ShoesForm from "../../components/shoesForm/ShoesForm";
import { createBookingSchema, type BookingForm } from "../../schemas/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { sendBooking } from "../../api/bookingApi";
import './booking.css'

export default function Booking() {
    const navigate = useNavigate();

    const methods = useForm<BookingForm>({
        resolver: zodResolver(createBookingSchema),
        defaultValues: {
           date: "",
           time: "",
           people: 1,
           lanes: 1,
           shoes: [{ size: 40 }] 
        },
    });
    
    const onSubmit = async (data: BookingForm) => {
        try {
            const when = `${data.date}T${data.time}`;

            const bookingRequest = {
                when,
                lanes: data.lanes,
                people: data.people,
                shoes: data.shoes.map((s) => s.size),
            };

            const bookingResponse = await sendBooking(bookingRequest);

            navigate("/confirmation", {
                state: {booking: bookingResponse}
            })
        } catch (error: any) {
            return <p>{error.message || "Servern kunde inte genomföra bokningen"}</p>
        }


    }

    return (
        <main className="page">
            <>
            <Header />
            <FormProvider {...methods}>
                <form className="booking-form" onSubmit={methods.handleSubmit(onSubmit, (errors) => {
        console.log("FORM ERROR:", errors)
      })}>
                    <InfoForm />
                    <ShoesForm />
                    <button className="submit-btn" type="submit">striiiike</button>
                </form>
            </FormProvider>
            </>
        </main>
    )
}

