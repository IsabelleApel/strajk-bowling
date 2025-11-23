import { useFormContext } from "react-hook-form"
import './infoForm.css'

export default function InfoForm() {
    const { register, formState: {errors} } = useFormContext();
    return (
        <section className="form">
                <h2>When, what & who</h2>
                <div className="when-container">
                    <div className="field-container">
                        <label>DATE</label>
                        <input type="date" {...register("date")}/>
                        {errors.date?.message && <p className="error">{errors.date.message as string}</p>}
                    </div>
                    <div className="field-container">
                        <label>TIME</label>
                        <input type="time" {...register("time")}/>
                        {errors.time?.message && <p className="error">{errors.time.message as string}</p>}
                    </div>
                </div>

                <div className="field-container field-container--wide">
                    <label>NUMBER OF AWSOME BOWLERS</label>
                    <input className="wide-input" type="number" {...register("people", {valueAsNumber: true})}/>
                    {errors.people?.message && (
                        <p className="error">
                            {errors.people.message === "Invalid input: expected number, received NaN"
                            ? "Antal banor måste uppges"
                            : (errors.people.message as string)}
                        </p>
                    )}
                </div>
                <div className="field-container field-container--wide">
                    <label>NUMBER OF LANES</label>
                    <input className="wide-input" type="number" {...register("lanes", {valueAsNumber: true})} />
                    {errors.lanes?.message && (
                        <p className="error">
                            {errors.lanes.message === "Invalid input: expected number, received NaN"
                            ? "Antal banor måste uppges"
                            : (errors.lanes.message as string)}
                        </p>
                    )}
                </div>
  
        </section>
    )
}