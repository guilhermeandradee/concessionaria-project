// import { Carro } from "../../server.js"
import { listaDeCarros } from "../../server.js"
import { marcaDoscarrosCadastrados } from "../../server.js"
import { v4 as uuidv4 } from 'uuid'
import { CarroDB, MarcaDosCarrosCadastrados } from "../../models/carro.js"


export class Carro {
    constructor({
        marca,
        nome,
        ano,
        cor,
        imagem,
        finalDaPlaca,
        combustivel,
        aceitaTroca,
        quilometragem,
        carroceria,
        potencia,
        preco,
        bancos,

    }){
        this.id = uuidv4()
        this.marca = this._capitalize(marca)
        this.nome = this._capitalize(nome)
        this.ano = ano
        this.cor = this._capitalize(cor)
        this.imagem = imagem
        this.finalDaPlaca = finalDaPlaca
        this.combustivel = this._capitalize(combustivel)
        this.aceitaTroca = this._capitalize(aceitaTroca)
        this.quilometragem = quilometragem
        this.carroceria = this._capitalize(carroceria)
        this.potencia = potencia
        this.preco = preco

        this.incluirNaLista()
    }

    _capitalize(string) {
        if(string === undefined) {
            return 
        }

        if (typeof string === 'string' && string.length > 0) {
            return string.charAt(0).toUpperCase() + string.slice(1)   
        }

    }

    async incluirNaLista() {
        const verificarSeJaExisteMarca = await MarcaDosCarrosCadastrados.findAll({
            where: {
                marcaDoCarro: this.marca
            }
        }) 
        verificarSeJaExisteMarca === 0 ? null : await MarcaDosCarrosCadastrados.create({
            marcaDoCarro: this.marca 
        }).then(console.log('OKOKOK'))
    }

    async removerDaLista() {
        const marcaExisteEmAlgumCarro = await CarroDB.findAll({
            where: {
                marca: this.marca
            }
        })

        marcaExisteEmAlgumCarro.length === 0 && await MarcaDosCarrosCadastrados.destroy({
            where: {
                marcaDoCarro: this.marca
            }
        })

        console.log('------REMOVIDO DA LISTA------')
    }

    propriedades() {
        return  {
            id: this.id,
            marca: this.marca,
            nome: this.nome,
            ano: this.ano,
            cor: this.cor,
            imagem: this.imagem,
            finalDaPlaca: this.finalDaPlaca,
            combustivel: this.combustivel,
            aceitaTroca: this.aceitaTroca,
            quilometragem: this.quilometragem,
            carroceria: this.carroceria
        }
    }

    async _cadastrarNoDB() {
        const cadastrarDB = await CarroDB.create({
            id: this.id,
            marca: this.marca,
            nome: this.nome,
            cor: this.cor,
            ano: this.ano,
            quilometragem: this.quilometragem,
            finalDaPlaca: this.finalDaPlaca,
            combustivel: this.combustivel,
            aceitaTroca: this.aceitaTroca,
            carroceria: this.carroceria,
            potencia: this.potencia,
            imagem: this.imagem,
            preco: this.preco,

        })

        console.log(cadastrarDB)
    }

    async _removeFromDB() {
        const rmvDB = await CarroDB.destroy({
            where: {
                id: this.id,
            }
        })
        .then(() => {
            console.log('Sucess')
        })
        .catch((err) => new Error(err.message))
    }

}


export const carrosDisponiveis = async (req, res) => {         
    const qtdDeCarros = await CarroDB.count()
    const resultados = await CarroDB.findAll()
    
    const carros = resultados.map(carro => ({
        id: carro.id,
        marca: carro.marca,
        nome: carro.nome,
        ano: carro.ano,
        cor: carro.cor,
        imagem: carro.imagem,
        finalDaPlaca: carro.finalDaPlaca,
        combustivel: carro.combustivel,
        aceitaTroca: carro.aceitaTroca,
        quilometragem: carro.quilometragem,
        carroceria: carro.carroceria,
        //Adicionar
        preco: carro.preco
    }))



    const consultarBdMarcas = await MarcaDosCarrosCadastrados.findAll()
    const mostrarMarcas = consultarBdMarcas.map(marca => marca)
    
    if(qtdDeCarros > 0){
        return res.status(200).json({
            QtdDeCarros: qtdDeCarros,
            carros: carros,
            marcas: mostrarMarcas
        })
        
    }
    
    
        return res.status(200).json({
            QtdDeCarros: 0,
            carros: 0,
            marcas: []
            })
    
    
    // return res.status(200).json(`Qtd. de carros: ${qtdDeCarros}`)
}


export const adicionarCarro = (req, res) => {
    const body = req.body
    const {marca, nome, ano, cor, imagem, finalDaPlaca, combustivel, aceitaTroca, quilometragem, carroceria, potencia, preco} = body
    
    const camposObrigatorios = ['marca', 'nome', 'ano', 'cor', 'imagem', 'finalDaPlaca', 'combustivel', 'aceitaTroca', 'quilometragem', 'carroceria', 'potencia', 'preco']
    
    const carroProps = {
        marca,
        nome,
        ano,
        cor,
        imagem,
        finalDaPlaca,
        combustivel,
        aceitaTroca,
        quilometragem,
        carroceria,
        potencia,
        preco,
    }
    
    if(camposObrigatorios.some(campo => !body[campo])) {
        return res.status(400).json({
            error: true,
            message: 'Um dos campos não foi preenchido!'
        })
    }
    
    const novoCarro = new Carro(carroProps)._cadastrarNoDB()

    listaDeCarros.push(novoCarro)
    return res.status(200).json({
        error: false,
        message: 'Carro adicionado',
        novoCarro
    })

}

export const removerCarro = async (req, res) => {
    const body = req.body
    const idParams = body.id
    

    const qtdDeCarros = listaDeCarros.length

    const carroIndex = listaDeCarros.findIndex(carro => carro.id === idParams)



    CarroDB.destroy({
        where: {
            id: idParams
        }
    })
    .then('Sucess')
    .catch(err => new Error(err.message))


    

    return res.status(200).json({
        message: `Marca removida`
    })

}

export const editarCarro = (req, res) => {
    const body = req.body
    const paramId = body.id
    const { marca, nome, ano, cor } = body

    const carroIndex = listaDeCarros.findIndex(carro => carro.id === paramId)

    if(carroIndex == -1){
        return res.status(404).json({
            error: true,
            message: 'Carro não encontrado'
        })
    }

    const carro = listaDeCarros[carroIndex]

    let propsAtualizadas = 0

    function atualizarPropriedades(){


        for(const propriedade in body){
            if(body.hasOwnProperty(propriedade) && propriedade !== 'id'){
                carro[propriedade] = body[propriedade]
                propsAtualizadas += 1
            }
        }

        
    }
    atualizarPropriedades()


    return res.status(200).json({
        informaçõesAtualizadas: propsAtualizadas,
        carro: listaDeCarros[carroIndex],
    })

}