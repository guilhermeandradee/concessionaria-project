import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './Carros.css'

export const baseURL = 'http://localhost:8000'

const Carros = () => {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const response = await axios.get( 'http://localhost:8000/carros')

        const newData = response.data
        setData(newData)
        
        setLoading(false)
    }
    
    console.log(data)
    useEffect(() => {
        
        getData() 
        
    }, [])
    
    
    

    const gerarLiCarros = () => (
        data.carros.map(carro => (
            <li key={carro.id}>
              <img className="img" src={carro.imagem} alt="" />
              <h2> {carro.marca} {carro.nome}</h2>
              <p> 2.3 6V turbo diesel 4x4 {carro.cor} </p>
              <p> {carro.preco} </p>
              <p> {carro.ano} </p>
            </li>
          ))
    )
        

    return(
        <div className="carros-container">
            <main>
                <h1>
                    Carros disponíveis: {data != null ? data.QtdDeCarros : <p>data é null</p>}
                </h1>
                {loading && <p>Loading...</p>}
                <ul>
                    {!loading && gerarLiCarros()}
                </ul>
            </main>
        </div>
    )
}

export default Carros