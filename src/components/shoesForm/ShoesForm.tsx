import { useFormContext, useWatch } from "react-hook-form";
import { useEffect } from "react";
import type { BookingForm } from "../../schemas/bookingSchema";

export default function ShoesForm() {
    const { control, setValue, register, getValues } = useFormContext<BookingForm>();
    const bowlers = useWatch({ control, name: "people"});

useEffect(() => {
    const current = getValues("shoes");

    const newArray = Array.from({ length: bowlers || 0 }, (_, i) => {
        return current?.[i] || { size: 40 };
    });

    setValue("shoes", newArray);
}, [bowlers, getValues, setValue]);

    return (
        <section className="form">
                <h2>Shoes</h2>
                {Array.from({ length: bowlers || 0}).map((_, i) => (
                    <div key={i} className="field-container">
                        <label>Shoe Size / Person {i + 1}</label>
                        <input type="number" {...register(`shoes.${i}.size`, {valueAsNumber: true})} />
                    </div>
                ))}
        </section>
    )
}