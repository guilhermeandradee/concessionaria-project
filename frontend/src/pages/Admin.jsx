import React, { useState } from "react";
import './Admin.css'
import Header from "../components/Header";
import AddBrand from "../components/AddBrand";
import RmvBrand from "../components/RmvBrand";
import ViewBrands from "../components/ViewBrands";
//Car
import AddCar from "../components/AddCar";
import ShowCar from "../components/ShowCar";
import { useSpring, animated } from "@react-spring/web";



const Admin = () => {
    const [brandIsVisible, setBrandIsVisible] = useState('')

    const [carIsVisible, setCarIsVisible] = useState('')

    const fadeAddBrand = useSpring({
        opacity: brandIsVisible === 'add' ? 1 : 0,
        height: brandIsVisible === 'add' ? "auto" : 0,
        overflow: brandIsVisible === 'add' ? "visible" : "hidden",
        config: {duration: 100}
        
    });

    const fadeRmvBrand = useSpring({
        opacity: brandIsVisible === 'rmv' ? 1 : 0,
        height: brandIsVisible === 'rmv' ? "auto" : 0,
        overflow: brandIsVisible === 'rmv' ? "hidden" : "visible"
        
    });

    const fadeBrands = useSpring({
        opacity: brandIsVisible === 'brands' ? 1 : 0,
        height: brandIsVisible === 'brands' ? "auto" : 0,
        overflow: brandIsVisible === 'brands' ? "visible" : "hidden"
        
    });

    // Car

    const fadeShowCar = useSpring({
        opacity: carIsVisible === 'cars' ? 1 : 0,
        height: carIsVisible === 'cars' ? "auto" : 0,
        overflow: brandIsVisible === 'cars' ? "visible" : "hidden",
        config: {duration: 100}
        
    });

    const fadeAddCar = useSpring({
        opacity: carIsVisible === 'add' ? 1 : 0,
        height: carIsVisible === 'add' ? "auto" : 0,
        overflow: brandIsVisible === 'add' ? "visible" : "hidden",
        config: {duration: 100}
        
    });

    const fadeRmvCar = useSpring({
        opacity: carIsVisible === 'rmv' ? 1 : 0,
        height: carIsVisible === 'rmv' ? "auto" : 0,
        overflow: carIsVisible === 'rmv' ? "hidden" : "visible"
        
    });
    

    const showBrands = () => {
        setBrandIsVisible('brands')
    }

    const showAddBrand = () => {
        setBrandIsVisible('add')
    }

    const showRmvBrand = () => {
        setBrandIsVisible('rmv')
    }
    
    const hideBrand = (isVisible) => {
        setBrandIsVisible(isVisible)
    }

    // Car

    const showCars = () => {
        setCarIsVisible('cars')
    }

    const showAddCar = () => {
        setCarIsVisible('add')
    }

    const showRmvCar = () => {
        setCarIsVisible('rmv')
    }

    const showEditCar = () => {
        setCarIsVisible('edit')
    }

    const hideCar = (isVisible) => {
        setCarIsVisible(isVisible)
    }



    return(
        <div className="admin-container">
            <Header />

            <nav className="options">
                <div className="brand-options-container">
                    <h1>  Marcas  </h1>
                    <p className="btn" onClick={showBrands}> Listar </p>
                    <p className="btn" onClick={showAddBrand} > Adicionar </p>
                </div>

                <div className="cars-options-container">
                    <h1> Carros </h1>
                    <p className="btn" onClick={showCars}>Listar</p>
                    <p className="btn" onClick={showAddCar}>Adicionar</p>
                </div>
            </nav>

            <animated.div style={fadeAddBrand} >
                {brandIsVisible === 'add' && <AddBrand hideBrand={hideBrand}  />}
            </animated.div>
            

            <animated.div style={fadeBrands} >
                { brandIsVisible === 'brands' && <ViewBrands hideBrand={hideBrand} />}
            </animated.div>

            {/* ----- Car ----- */}

            <animated.div style={fadeShowCar} >
                {carIsVisible === 'cars' && <ShowCar hideCar={hideCar}  />}

            </animated.div>

            <animated.div style={fadeAddCar} >
                {carIsVisible === 'add' && <AddCar AddCar={AddCar} hideCar={hideCar} />}

            </animated.div>




            
        </div>
    )
}

export default Admin