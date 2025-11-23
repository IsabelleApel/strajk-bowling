import { useNavigate } from 'react-router-dom'
import './bookingDetails.css'

interface Props {
    when: string,
    people: number,
    lanes: number,
    id: string,
    price: number,
}

export default function BookingDetails({ when, people, lanes, id, price }: Props) {
    const navigate = useNavigate();

    const date = new Date(when);
    const formattedWhen = `${date.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" })}, ${date.toLocaleDateString("sv-SE", { day: "numeric", month: "short" })}`;

    const handleOnClick = () => {
        navigate('/')
    }

    return (
        <section className="confirmation">
            <h2>booking details</h2>
            <div className="field-container">
                <label>when</label>
                <p className='detail'>{formattedWhen}</p>
            </div>
            <div className="field-container">
                <label>who</label>
                <p className='detail'>{people} personer</p>
            </div>
            <div className="field-container">
                <label>lanes</label>
                <p className='detail'>{lanes} lane(s)</p>
            </div>
            <div className="field-container">
                <label>booking number</label>
                <p className='detail'>{id.split('-')[0]}</p>
            </div>
            <div className="field-container">
                <span className="detail detail-total">
                    <p className='total-text'>total</p>
                    <p>{price}kr</p>
                </span>
            </div>
            <button onClick={handleOnClick} className='submit-btn'>sweet, let´s go!</button>
        </section>
    )
}