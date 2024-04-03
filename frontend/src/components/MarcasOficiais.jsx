import React, { useEffect, useState } from "react";
import axios from "axios";
import './MarcasOficiais.css'
import { baseURL } from "./Carros";

const MarcasOficiais = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const response = await axios.get(`${baseURL}/marcas`)

        setData(response.data)
        setIsLoading(false)
    }  

    
    
    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    const retornarDiv = () => (
        data.marcas.map(marca => (
            <div key={marca.id} className="img-container">
                <img className="img-da-marca" src={marca.imagem} alt="logo da marca" />
            </div>
        ))
    )

    return(
        <div className="marcas-oficiais-container">
            <h1> Marcas oficiais </h1>

            <div className="row-marcas">
                { !isLoading && retornarDiv() }
            </div>

            
        </div>

    )
}

export default MarcasOficiais