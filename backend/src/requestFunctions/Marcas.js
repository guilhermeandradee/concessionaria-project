import db from "../../models/db.js";
import { Marca } from "../../server.js";
import { marcasOficiais } from "../../server.js";
import { v4 as uuidv4 } from 'uuid'

import {MarcaDB} from '../../models/marca.js'


export const marcasDisponiveis = (req, res) => {
    const qtdDeMarcas = MarcaDB.count()
    .then((qtdDeMarcas) => {
        MarcaDB.findAll()
        .then((resultados) => {
    
            const marcas = resultados.map(marca => ({
              id: marca.id,
              nome: marca.nome,
              imagem: marca.image
            }));
    
            if(marcas < 0) {
                return res.json({
                    marcas: 'nenhuma marca registrada'
                })
            }
    
            return res.status(200).json({
                qtdDeMarcas,
                marcas,
            })
        })
    })





}

// export const addMarca = (req, res) => {
//     const {id, nome, imagem} = req.body

//     const qtdDeMarcas = marcasOficiais.length
//     if(qtdDeMarcas >= 7){
//         return res.status(200).json({
//             message: 'Limite de marcas principais atingido -- 7 --'
//         })
//     }

//     try {

//         if(!nome || !imagem || nome === '' || imagem === '') {
//             throw new Error('Requisição mal feita, insira os dados corretamente!')
//         }

//     } catch (err){
//         return res.status(400).json({
//             message: err.message
//         })
//     }

//     const novaMarca = new Marca(nome, imagem, id)

//     marcasOficiais.push(novaMarca)
//     console.log('Marca adicionada')
//     return res.status(200).json({
//         message: 'Marca adicionada',
//         marca: novaMarca
//     })

// }

export const addMarca = (req, res) => {
    const {id, nome, imagem} = req.body

    const qtdDeMarcas = marcasOficiais.length
    if(qtdDeMarcas >= 7){
        return res.status(200).json({
            message: 'Limite de marcas principais atingido -- 7 --'
        })
    }

    try {

        if(!nome || !imagem || nome === '' || imagem === '') {
            throw new Error('Requisição mal feita, insira os dados corretamente!')
        }



    } catch (err){
        return res.status(400).json({
            message: err.message
        })
    }

    const novaMarca = {
        nome,
        imagem
    }

    MarcaDB.create({
        nome,
        image: imagem
    })
    .then('Sucess')
    .catch(err => new Error(err.message))




    /*new Marca(nome, imagem, id)*/

    // marcasOficiais.push(novaMarca)
    console.log('Marca adicionada')
    return res.status(200).json({
        message: 'Marca adicionada',
        marca: novaMarca
    })

}

export const rmvMarca = (req, res) => {
    const { id } = req.body

    !id && (res.status(400).json({
        message: 'Forneça os dados corretamente'
    }))


    MarcaDB.destroy({
        where: {
            id: id
        }
    })
    .then('Sucess')
    .catch(err => new Error(err.message))

    return res.status(200).json({
        message: `Marca removida`
    })
}

// export const rmvMarca = (req, res) => {
//     const { nome } = req.body

//     !nome && (res.status(400).json({
//         message: 'Forneça os dados corretamente'
//     }))

//     const rmvMarca = marcasOficiais.findIndex(carro => carro.nome === nome)

//     if(rmvMarca < 0){
//         return res.status(404).json({
//             message: 'Marca não encontrada'
//         })
//     }

//     const nomeMarcaRemovida = marcasOficiais[rmvMarca]

//     addMarcaToDB.destroy({
//         where: {
//             nome: nome
//         }
//     })
//     .then('Sucess')
//     .catch(err => new Error(err.message))

//     marcasOficiais.splice(rmvMarca, 1)
//     return res.status(200).json({
//         message: `Marca ${nomeMarcaRemovida.nome} removida`
//     })
// }