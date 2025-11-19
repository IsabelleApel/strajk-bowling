import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.css'

export default function Header() {
    return (
        <header>
            <button><FontAwesomeIcon icon={faBars} /></button>
            <nav className='hidden'>
                <ul>
                    <li>Booking</li>
                    <li>Confirmation</li>
                </ul>
            </nav>
            <img src="src\assets\logo.png" alt="bowling logo" />
            <h1>BOOKING</h1>
        </header>
    )
}