import React, { useEffect, useState, use } from "react";
import { useParams } from 'react-router-dom';
import Header from "../../components/Header";
import axios from "axios";
import { baseURL } from "../../components/Carros";
import './ShowCarCategory.css'

const showCarForCategory = () => {

    const { categorySelected } = useParams();

    
    const [dataCars, setDataCars] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    // const getCarrosSuv = async () => {
    //     const response = await axios.get(`${baseURL}/carros/`)
    //     const data = response.data
        
    // }
    
    const getCars = async () => {
        const response = await axios.get(`${baseURL}/carros/carCategories/${categorySelected.toUpperCase()}`)
        const data = response.data
        
        setDataCars(data)
        setIsLoading(false)
        console.log('daw', data)
    }
    const getAllCars = async () => {
        const response = await axios.get(`${baseURL}/carros/carCategories/${categorySelected.toUpperCase()}`)
        const data = response.data
        
        setSportCars(data)
        setIsLoading(false)
        console.log('daw', data)
    }
    
    
    useEffect(() => {
        categorySelected !== undefined && getCars()
    }, [])

    return(
        <div className="cars-category-container-master">
            <Header />
            <div className="cars-category-container">
                <div className="title-container">
                    <h1>ESPORTIVOS</h1>
                </div>
                <main className="car-options-container">
                   
                    <ul className="car-grid-options">

                        { !isLoading && dataCars.carros.map(carro => (
                            <li>
                                <div style={{
                                backgroundImage: `url(${carro.imagem})`
                            }} className="car-grid-options-top">

                            </div>

                            <div className="car-grid-options-bottom">

                                <h1>
                                    {carro.marca} - {carro.nome}
                                </h1>

                                <p>Ano {carro.ano} - {carro.cor} - Gasolina - {carro.aceitaTroca} Aceita troca - Ar Condicionado</p>

                                <h2>{carro.preco}</h2>
                                <span></span>
                            </div>
                            </li>
                            
                        ))}

                        {/* {
                            !isLoading && 
                        } */}

                        {
                            !isLoading && (
                                dataCars.qdtCarros < 1 && (console.log('fea'))
                            )
                        }


                        {/* <li>

                            <div style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }} className="car-grid-options-top">

                            </div>

                            <div className="car-grid-options-bottom">

                                <h1>
                                    BMW - 320I
                                </h1>

                                <p>Ano 2018 - Azul - Gasolina - Não aceita trocas - Ar Condicionado</p>

                                <h2>R$100.000</h2>

                            </div>
                        </li>
                        
                        <li>

                            <div className="car-grid-options-top" 
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}>

                            </div>
                            <div className="car-grid-options-bottom">
                                <h1>
                                    BMW - 320I
                                </h1>
                                <p>Ano 2018 - Azul - Gasolina - Não aceita trocas - Ar Condicionado</p>
                                <h2>R$100.000</h2>
                            </div>
                        </li>
                        <li>
                            <div className="car-grid-options-top"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}>

                            </div>
                            <div className="car-grid-options-bottom">
                                <h1>
                                    BMW - 320I
                                </h1>
                                <p>Ano 2018 - Azul - Gasolina - Não aceita trocas - Ar Condicionado</p>
                                <h2>R$100.000</h2>
                            </div>
                        </li>
                        <li>
                            <div className="car-grid-options-top"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}>

                            </div>
                            <div className="car-grid-options-bottom">
                                <h1>
                                    BMW - 320I
                                </h1>
                                <p>Ano 2018 - Azul - Gasolina - Não aceita trocas - Ar Condicionado</p>
                                <h2>R$100.000</h2>
                            </div>
                        </li>
                        <li>
                            <div className="car-grid-options-top"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}>

                            </div>
                            <div className="car-grid-options-bottom">
                                <h1>
                                    BMW - 320I
                                </h1>
                                <p>Ano 2018 - Azul - Gasolina - Não aceita trocas - Ar Condicionado</p>
                                <h2>R$100.000</h2>
                            </div>
                        </li>
                        <li>
                            <div className="car-grid-options-top"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}>

                            </div>
                            <div className="car-grid-options-bottom">
                                <h1>
                                    BMW - 320I
                                </h1>
                                <p>Ano 2018 - Azul - Gasolina - Não aceita trocas - Ar Condicionado</p>
                                <h2>R$100.000</h2>
                            </div>
                        </li> */}

                    </ul>
                    
                </main>
            </div>
        </div>

    )
}

export default showCarForCategory;