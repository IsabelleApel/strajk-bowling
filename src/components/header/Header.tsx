import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import './header.css'

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <header>
            <button onClick={() => setOpen(o => !o)}><FontAwesomeIcon icon={faBars} size='2x' /></button>
            <nav className={`nav-page ${open ? '' :'hidden'}`}>
                <ul>
                    <li><Link to="/" className='nav-link'>Booking</Link></li>
                    <li><Link to="/confirmation" className='nav-link'>Confirmation</Link></li>
                </ul>
            </nav>
            <img src="src\assets\logo.png" alt="bowling logo" />
            <h1>BOOKING</h1>
        </header>
    )
}