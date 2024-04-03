import React, { useState, useEffect } from "react";
import './ViewBrands.css'
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { baseURL } from "./Carros";
import { useSpring, animated } from "@react-spring/web";
import { IoIosRemoveCircleOutline } from "react-icons/io";


const ViewBrands = ({ hideBrand }) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const [optionsIsVisible, setOptionsIsVisible] = useState('')

    const fadeShowCarCarac = useSpring({
        opacity: optionsIsVisible !== '' ? 1 : 0,
        height: optionsIsVisible !== '' ? "auto" : 0,
        overflow: optionsIsVisible !== '' ? "visible" : "hidden",
        config: {duration: 100}
    })

    const handleClickButton = (idCar) => {
        setOptionsIsVisible( optionsIsVisible === idCar ? '' : idCar)
    }
    

    const fetchData = async () => {
        const response = await axios.get(`${baseURL}/marcas`).catch(err => err.data.message)

        setData(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    const handleCancelClick = () => {
        hideBrand('')
    }

    const rmvBrand = async (idBrand) => {
        const response = await axios.delete(`${baseURL}/marcas`, { data: {
            "id": idBrand
        } })
        .catch(err => err.data.message)

        console.log(response.data)

        setTimeout(() => fetchData(), 300)
    }

    return(
        <div className="view-brand-container">
            <h1 className="brands-quantity" > Quantidade de marcas ({ 
            isLoading === false && data.qtdDeMarcas })
            </h1>

            <div className="marcas-container">



            { 
            isLoading === false && data.marcas.map(marca => (
                <div className={`brands-container`} key={`${marca.id}-container`}>
                    <p className="p-container" key={marca.id} onClick={() => handleClickButton(marca.id)}> 
                        {marca.nome}
                    </p>

                    {
                    optionsIsVisible.toString() === marca.id.toString() && (
                        <animated.div style={fadeShowCarCarac} >
                            <IoIosRemoveCircleOutline
                                onClick={() => rmvBrand(marca.id)}
                                className="rmv-btn" style={{
                                'width': '20px',
                                'height': '20px',
                                }}/>
                        </animated.div>)
                    }

                </div>
            )

            

            )
            }
            </div>


            

            <h1 className="icon" onClick={handleCancelClick}>x</h1>
            

        </div>

        
    )
}

export default ViewBrands