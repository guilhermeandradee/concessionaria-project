import React, { useEffect, useState } from "react";
import { baseURL } from "./Carros";
import axios from "axios";
import './SearchVehicle.css'

const SearchVehicle = () => {

    const [inputData, setInputData] = useState('Jetta')
    
    console.log(inputData)

    const searchVehicle = async () => {
        const response = await axios.get(`${baseURL}/carros`)
        .catch(err => console.log(err.response.data.message))
        
        console.log(response.data)
    }

    return(
        <div className="search-vehicle-container">
            <div className="search-vehicle-box">
                <h1>Pesquise um veículo</h1>
                <div className="search-inputs">
                    <input 
                    value={inputData}
                    type="text"  
                    onChange={(e) => setInputData(e.target.value)
                    } />
                    <button onClick={searchVehicle} >Buscar</button>
                </div>
            </div>
        </div>
    )
}

export default SearchVehicle