import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SellerDashboard from "../pages/SellerDashboard"
import BuyerDashboard from "../pages/BuyerDashboard"
import Signup from "../pages/Signup"
import gsap from 'gsap'
import { useEffect, useRef } from "react";


const Gsaptransitions = () => {
    const nodeRef = useRef(null);

    const location = useLocation();
    console.log("The location is: ", location)

    //running a useEffect dependent on location variable
    useEffect(() => {
        if (nodeRef.current) {
            gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

        }
    }, [location])

    //for GSAP:
    // 1) Target 2) logic
    // 
    return (
        <div ref={nodeRef}>
            <Toaster />
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/seller/profile" element={<SellerDashboard />} />
                <Route path="/buyer/profile" element={<BuyerDashboard />} />
            </Routes>
        </div>
    )
}

export default Gsaptransitions
