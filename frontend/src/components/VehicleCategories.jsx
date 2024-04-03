import React, { useState } from "react";
import './VehicleCategories.css'
import { TbCarSuv } from "react-icons/tb";
import { LuCar } from "react-icons/lu";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import { IoCarSharp } from "react-icons/io5";
import { IoIosFlash } from "react-icons/io";

import { MdFamilyRestroom } from "react-icons/md"
import { useSpring, animated } from "@react-spring/web";
import { PiCarProfileDuotone } from "react-icons/pi";
import { PiPoliceCar } from "react-icons/pi";


import ShowSUVCars from "./SearchForVehicleType/ShowSUVCars";

const VehicleCategories = () => {

    const [fadeComponent, setFadeComponent] = useState(null)

    const fadeSUVCars = useSpring({
        opacity: fadeComponent === 'SUV' ? 1 : 0,
        height: fadeComponent === 'SUV' ? "1000px" : 0,
        overflow: fadeComponent === 'SUV' ? "visible" : "hidden",
        config: {duration: 100},
        backgroundColor: "green",
    });

    const hideFade = (isVisible) => {
        setFadeComponent(isVisible)
    }

    return(
        <div className="vehicle-categories-container">

            <nav className="btns-type-vehicle-container">
                <a 
                href="http://localhost:5173/carros/showCarForCategory/SUV" className="btn-type-vehicle">
                    <TbCarSuv className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/SUV"> SUV </p>
                </a>

                <a 
                href="http://localhost:5173/carros/showCarForCategory/HATCH" className="btn-type-vehicle">
                    <LuCar className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/SUV"> HATCH </p>
                </a>

                <a 
                href="http://localhost:5173/carros/showCarForCategory/PICAPE" className="btn-type-vehicle">
                    <LiaTruckPickupSolid className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/SUV"> PICAPE </p>
                </a>

                <a 
                href="http://localhost:5173/carros/showCarForCategory/ESPORTIVO" className="btn-type-vehicle">
                    <IoCarSportOutline className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/ESPORTIVO"> ESPORTIVO </p>
                </a>

                <a 
                href="http://localhost:5173/carros/showCarForCategory/SEDAN" className="btn-type-vehicle">
                    <IoCarSharp className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/ESPORTIVO"> SEDAN </p>
                </a>


                <a 
                href="http://localhost:5173/carros/showCarForCategory/MINI-VAN" className="btn-type-vehicle">
                    <PiCarProfileDuotone className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/SUV"> MINI-VAN </p>
                </a>
                
                <a 
                href="http://localhost:5173/carros/showCarForCategory/PICAPE" className="btn-type-vehicle">
                    <PiPoliceCar className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/SUV"> CONVERSÍVEL </p>
                </a>

                <a 
                href="http://localhost:5173/carros/showCarForCategory/ELÉTRICO" className="btn-type-vehicle">
                    <IoIosFlash className="btn-type-vehicle-icon"/>
                    <p href="/carros/showCarForCategory/ESPORTIVO"> ELÉTRICO </p>
                </a>
                
            </nav>

            <animated.div className={"page-category-car"} style={fadeSUVCars} >
                {fadeComponent === 'SUV' && <ShowSUVCars />}
            </animated.div>

        </div>
    )
}

export default VehicleCategories