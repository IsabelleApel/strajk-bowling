import { Routes, Route } from "react-router-dom"
import Booking from "../pages/booking/Booking"
import Confirmation from "../pages/confirmation/Confirmation"

export default function AppRoutes() {
    
    return (
        <Routes>
            <Route path="/" element={<Booking />}/>
            <Route path="/confirmation" element={<Confirmation />}/>
        </Routes>
    )
}