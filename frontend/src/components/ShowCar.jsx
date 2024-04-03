import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "./Carros";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useSpring, animated } from "@react-spring/web";

import './ShowCar.css'


const ShowCar = ({ hideCar }) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        const response = await axios.get(`${baseURL}/carros`).catch(err => window.alert(err.data.message))
        
        setData(response.data)
        setIsLoading(false)
    }

    
    useEffect(() => {
        fetchData()
    }, [])

    
    console.log(data)
    
    
    const handleCancelClick = () => {
        hideCar('')
    }
        
    const [optionsIsVisible, setOptionsIsVisible] = useState('')

    const fadeShowCarCarac = useSpring({
        opacity: optionsIsVisible !== '' ? 1 : 0,
        height: optionsIsVisible !== '' ? "auto" : 0,
        overflow: optionsIsVisible !== '' ? "visible" : "hidden",
        config: {duration: 100},
        
    })
    
    const handleClickButton = (idCar) => {
        setOptionsIsVisible( optionsIsVisible === idCar ? '' : idCar)
    }

    const rmvCar = async (idCar) => {
        const response = await axios.delete(`${baseURL}/carros/rmvCarro`, { data: {
            "id": idCar,
        } })
        .catch(err => err.data.message)

        console.log(response.data)

        setTimeout(() => fetchData(), 200)

    }
    
    return(
        <div className="show-car-container">
            <h1 className="total"> { !isLoading && 'Carro cadastrado' }  {!isLoading && `(${data.QtdDeCarros})`}</h1>

                    <div className="cars-container">

                    { !isLoading && data.QtdDeCarros <= 0 ? <h2>Nenhum carro cadastrado</h2> : 

                    !isLoading && data.carros.map(carro => (
                        <div className="cars-option-container" key={`car-id-${carro.id}-container`}>

                            <div className="cars-option-container-2">

                                <h2>{carro.marca}</h2>

                                <div className="p-container-car-option">
                                    <p
                                    className="cars-option-p"
                                    onClick={() => handleClickButton(carro.id)}
                                    key={`car-id-${carro.id}-p`}>
                                        {carro.nome} - {carro.cor} - {carro.combustivel} - {carro.aceitaTroca} ACEITA TROCA - {carro.carroceria}
                                    
                                    </p>
                                    <animated.div className='animated-div-rmv-car-icon' style={fadeShowCarCarac}>
                                        <IoIosRemoveCircleOutline
                                        onClick={() => rmvCar(carro.id) }
                                        className="rmv-btn" style={{
                                            'width': '20px',
                                            'height': '20px'}} />
                                    </animated.div>
                                </div>

                            </div>
                            
                        </div>
                    ))}
                    
                    
                
                    
                    </div>
                            
            
            
            <h1 className="icon" onClick={handleCancelClick} >x</h1>

        </div>
    )
}

export default ShowCar;