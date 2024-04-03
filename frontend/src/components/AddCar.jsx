import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import './AddCar.css'
import { baseURL } from "./Carros";


const AddCar = ({ hideCar }) => {

    const [formData, setFormData] = useState({})

    const [messageBox, setMessageBox] = useState(null)
    const [errorMessageBox, setErrorMessageBox] = useState(null)

    const [aceitaTrocaCheck, setAceitaTrocaCheck] = useState('nao')

    const handleAceitaTrocaCheck = () => {
        aceitaTrocaCheck === 'sim' ? setAceitaTrocaCheck('nao') : setAceitaTrocaCheck('sim')
        
        console.log(aceitaTrocaCheck)
    }

    console.log(formData)

    const handleInputChange = (field, value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [field]: value,
        }))
      }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const addCar = async () => {
        let errorExists = false
        const data = {
            "marca": formData.marca,
            "nome": formData.nome,
            "ano": formData.ano,
            "cor": formData.cor,
            "quilometragem": formData.quilometragem,
            "finalDaPlaca": formData.finalDaPlaca,
            "combustivel": formData.combustivel,
            "aceitaTroca": formData.aceitaTroca,
            "carroceria": formData.carroceria,
            "potencia": formData.potencia,
            "imagem": formData.imagem,
            "preco": formData.preco,
        }

        const response = await axios.post(`${baseURL}/carros/addCarro`, data, config)
        .catch((err) => {
            setErrorMessageBox(err.response.data.message)
            errorExists = true
        })

        errorExists === false && setMessageBox(response.data.message)

        scrollToTop()

        setTimeout(() => {
            setMessageBox(null)
            setErrorMessageBox(null)
        }, 3000)
    }

    const handleCancelClick = () => {
        hideCar('')
    }

    return(
        <div className="add-car-container">
            <Header/>
            <div className="add-car-box">
                <div className="title">
                    <h1>Cadastrar Carro</h1>
                </div>

                {messageBox && <p className="message-box-add-car" >{messageBox}</p>}
                {errorMessageBox && <p className="error-message-box-not-add-car" >{errorMessageBox}</p>}

                <div className="content">
                    <div className="forms-container">
                        
                    <input onChange={(e) => handleInputChange("marca", e.target.value.toUpperCase())} className="txt-input" placeholder="Marca (Porsche)" type="text" name="" id="" />

                    <input onChange={(e) => handleInputChange("nome", e.target.value.toUpperCase())} className="txt-input" placeholder="Nome (Panamera)" type="text" name="" id="" />

                    <input onChange={(e) => handleInputChange("ano", e.target.value.toUpperCase())} className="txt-input" placeholder="Ano (2020)" type="text" name="" id="" />

                    <input onChange={(e) => handleInputChange("cor", e.target.value.toUpperCase())} className="txt-input" placeholder="Cor (Azul) " type="text" name="" id="" />

                    <input onChange={(e) => handleInputChange("quilometragem", e.target.value.toUpperCase())} className="txt-input" placeholder="Quilometragem (200.000)" type="text" name="" id="" />

                    <input onChange={(e) => handleInputChange("finalDaPlaca", e.target.value.toUpperCase())} className="txt-input" placeholder="Final da placa" type="text" name="" id="" />

                    <input onChange={(e) => handleInputChange("potencia", e.target.value.toUpperCase())} className="txt-input" placeholder="Potência (200cv)" type="text" name="" id="" />

                    <input onChange={(e) => handleInputChange("imagem", e.target.value)} className="txt-input" placeholder="Imagem (https://imagem.com.br)" type="text" name="" id="" />

                    <input 
                    onChange={(e) => handleInputChange("preco", e.target.value.toUpperCase())} 
                    className="txt-input" 
                    placeholder="Preço (R$200.000,00)" 
                    type="text" 
                    
                    name="" id="" />


                    <p className="p-title-check">
                        CATEGORIA
                    </p>
                        <select 
                        onChange={(e) => handleInputChange("carroceria", e.target.value.toUpperCase())}
                        className="txt-input" name="" id="">
                            <option ></option>
                            <option value="SEDAN">SEDAN</option>
                            <option value="SUV">SUV</option>
                            <option value="HATCH">HATCH</option>
                            <option value="COUPE">COUPÉ</option>
                            <option value="PICAPE">PICAPE</option>
                            <option value="MINIVAN">MINI-VAN</option>
                            <option value="CONVERSIVEL">CONVERSÍVEL</option>
                        </select>

                    <p className="p-title-check">
                        COMBUSTÍVEL
                    </p>
                        <select 
                        onChange={(e) => handleInputChange("combustivel", e.target.value.toUpperCase())}
                        className="txt-input" name="" id="">
                            <option ></option>
                            <option value="ALCOOL">ÁLCOOL</option>
                            <option value="GASOLINA">GASOLINA</option>
                            <option value="FLEX">FLEX</option>
                            <option value="ELETRICO">ELÉTRICO</option>
                        </select>
                    

                    <div className="check-container" >
                        <p className="p-title-check">
                            ACEITA TROCA
                        </p>
                        <input
                        onClick={() => handleAceitaTrocaCheck()}
                        onChange={(e) => handleInputChange("aceitaTroca", aceitaTrocaCheck.toUpperCase())}
                        className={aceitaTrocaCheck === 'sim' ? 'checkbox-y-n' : 'checkbox-y-n-n'} 
                        type="checkbox" 
                        // value={aceitaTrocaCheck}
                        name="" 
                        id="" />
                    </div>

                    </div>
                    <div className="add-btn">
                        <button onClick={addCar} >Cadastrar</button>
                    </div>
                </div>
            </div>    
            <h1 className="icon" onClick={handleCancelClick} >x</h1>
        </div>
    )
}

export default AddCar;