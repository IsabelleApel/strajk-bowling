import { useFormContext, useWatch } from "react-hook-form";
import { useEffect } from "react";
import type { BookingForm } from "../../types";

export default function ShoesForm() {
    const { control, setValue } = useFormContext<BookingForm>();
    const bowlers = useWatch({ control, name: "bowlers"});

    useEffect(() => {
        setValue(
            "shoes", 
            Array.from({ length: bowlers || 0}, () => ({ size: "Euro 44" })))
    }, [bowlers, setValue])

    return (
        <section className="form">
                <h2>Shoes</h2>
                {Array.from({ length: bowlers || 0}).map((_, i) => (
                    <div key={i} className="input-container">
                        <label>Shoe Size / Person {i + 1}</label>
                        <input {...control.register(`shoes.${i}.size` as const)} />
                    </div>
                ))}
        </section>
    )
}