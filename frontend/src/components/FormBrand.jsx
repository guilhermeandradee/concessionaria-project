import React from "react";
import './FormBrand.css';
import Header from "./Header.jsx";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "./Carros";

const FormBrand = ({ isAdd , isRmv, hideBrand }) => {

    const [formDataName, setFormDataName] = useState(null)
    const [formDataImage, setFormDataImage] = useState(null)

    const [messageBox, setMessageBox] = useState(null)


    const handleCancelClick = () => {
        hideBrand('')           
    }

    const handleRequestClick = async () => {
        if (isAdd === true ) {
            await addBrand()
            setMessageBox('added')

            setTimeout(() => {
                setMessageBox(null)
            }, 2000)
        }

        if(isRmv === true) {
            await rmvBrand()

            setMessageBox('removed')

            setTimeout(() => {
                setMessageBox(null)
            }, 2000)
        }

    }

    const addBrand = async () => {
        const request = {
            "nome": formDataName,
            "imagem": formDataImage
        }

        const response = await axios.post(`${baseURL}/marcas`, request)
        .catch(err => {
            window.alert(err.response.data.message)
        })
        // console.log(response.data.message)

    }

    const rmvBrand = async () => {
        const request = {
            data: {
                "nome": formDataName
            }
        }

        const response = await axios.delete(`${baseURL}/marcas`, request)
        .catch(err => {
            window.alert(err.response.data.message)
        })
        console.log(response.data.message)
        
        
    }

    



    return(

        
        <div className="brand-form">
            <Header/>

            {isAdd == true && <p>Adicionar Marca</p>}
            {isRmv == true && <p>Remover Marca</p>}

            
            { messageBox === 'added' &&  <p className="added-brand"> Marca adicionada </p> }
            { messageBox === 'removed' && <p className="removed-brand"> Marca removida </p> }

                <div className="form-container form-name">
                    <h2>Marca</h2>
                    <input type="text" className="form-item name-brand" onChange={(e) => {setFormDataName(e.target.value)}}/>
                </div>
                { isAdd == true && 
                <div className="form-container form-image">
                    <h2>Imagem</h2>
                    <input type="text" className="form-item image-brand" onChange={(e) => {setFormDataImage(e.target.value)}} />
                </div>
                }
                
                <button className="btn-enviar" onClick={handleRequestClick} > Enviar </button>
                <div className="exit-icon-container">
                    <MdOutlineCancel onClick={handleCancelClick} size={'40%'} className="customized-icon" />
                </div>

        </div>
    )
}

export default FormBrand