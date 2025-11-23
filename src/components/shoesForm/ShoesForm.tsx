import { useFormContext, useWatch } from "react-hook-form";
import { useEffect } from "react";
import type { BookingForm } from "../../schemas/bookingSchema";

export default function ShoesForm() {
    const { control, setValue, register, formState: {errors} } = useFormContext<BookingForm>();
    const bowlers = useWatch({ control, name: "people"});

    useEffect(() => {
        setValue(
            "shoes", 
            Array.from({ length: bowlers || 0}, () => ({ size: 40 })))
    }, [bowlers, setValue])

    return (
        <section className="form">
                <h2>Shoes</h2>
                {Array.from({ length: bowlers || 0}).map((_, i) => (
        <div key={i} className="field-container">
            <label>Shoe Size / Person {i + 1}</label>
            <input 
                type="number" 
                {...register(`shoes.${i}.size`, { valueAsNumber: true })} 
            />
            {errors.shoes?.[i]?.size?.message && (
                <p className="error">
                    {errors.shoes[i].size.message === "Invalid input: expected number, received NaN"
                        ? `Storlek för person ${i + 1} måste uppges`
                        : (errors.shoes[i].size.message as string)
                    }
                </p>
            )}
        </div>
                ))}
        </section>
    )
}