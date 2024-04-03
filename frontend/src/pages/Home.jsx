import React from "react";
import Header from "../components/Header";
import Carros from "../components/Carros";
import MarcasOficiais from "../components/MarcasOficiais";
import SearchVehicle from "../components/SearchVehicle";
import VehicleCategories from "../components/VehicleCategories";

import './Home.css'

const Home = () => {
    return(
        <div className="home-page-container">
            <Header/>
            {/* <Carros/> */}
            <SearchVehicle/>
            <MarcasOficiais/>
            <VehicleCategories/>
            
        </div>
    )
}

export default Home