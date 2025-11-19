import { useFormContext } from "react-hook-form"
import './infoForm.css'

export default function InfoForm() {
    const { register } = useFormContext();
    return (
        <section className="info-form">
                <h2>When, what & who</h2>
                <div className="when-container">
                    <div className="field-container">
                        <label>DATE</label>
                        <input type="date" {...register("date")}/>
                    </div>
                    <div className="field-container">
                        <label>TIME</label>
                        <input type="time" {...register("time")}/>
                    </div>
                </div>

                <div className="field-container field-container--wide">
                    <label>NUMBER OF AWSOME BOWLERS</label>
                    <input className="wide-input" type="number" {...register("bowlers", {valueAsNumber: true})}/>
                </div>
                <div className="field-container field-container--wide">
                    <label>NUMBER OF LANES</label>
                    <input className="wide-input" type="number" {...register("lanes", {valueAsNumber: true})} />
                </div>
  
        </section>
    )
}