import './bookingDetails.css'

export default function BookingDetails() {
    return (
        <section className="confirmation">
            <h2>booking details</h2>
            <div className="field-container">
                <label>when</label>
                <p className='detail'>21 april</p>
            </div>
            <div className="field-container">
                <label>who</label>
                <p className='detail'>3 pers</p>
            </div>
            <div className="field-container">
                <label>lanes</label>
                <p className='detail'>1 lane</p>
            </div>
            <div className="field-container">
                <label>booking number</label>
                <p className='detail'>FJRT348F</p>
            </div>
            <div className="field-container">
                <span className="detail detail-total">
                    <p className='total-text'>total</p>
                    <p>460kr</p>
                </span>
            </div>
            <button className='submit-btn'>let´s go</button>
        </section>
    )
}