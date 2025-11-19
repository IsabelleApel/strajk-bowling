import { useForm, FormProvider } from "react-hook-form"
import Header from "../../components/header/Header"
import InfoForm from "../../components/InfoForm/InfoForm";
import ShoesForm from "../../components/shoesForm/ShoesForm";
import type { BookingForm } from "../../types";
import './booking.css'

export default function Booking() {
    const methods = useForm<BookingForm>();
    
    const onSubmit = (data: BookingForm) => {
        console.log(data)
    }

    return (
        <main className="page">
            <>
            <Header />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <InfoForm />
                    <ShoesForm />
                    <button type="submit">striiiike</button>
                </form>
            </FormProvider>
            </>
        </main>
    )
}