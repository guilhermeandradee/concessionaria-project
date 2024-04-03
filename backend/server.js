import express from 'express'
import { config } from 'dotenv'
import { adicionarCarro, removerCarro, carrosDisponiveis, editarCarro } from './src/requestFunctions/Carros.js'
import cors from 'cors'
import { addMarca, marcasDisponiveis, rmvMarca } from './src/requestFunctions/Marcas.js'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { CarroDB } from './models/carro.js'
import { carForCategories } from './src/requestFunctions/CarCategories.js'

const app = express()

const port = process.env.PORT || 8000



app.use(express.json())
app.use(cors())

export const marcaDoscarrosCadastrados = []




// DB

export const listaDeCarros = []


export class Marca {
    constructor(nome, imagem, id) {
        id ? this.id = id : this.id = uuidv4()
        this.nome = this._capitalize(nome);
        this.imagem = imagem;
    }

    _capitalize(nome) {
        return nome.charAt(0).toUpperCase() + nome.slice(1)
    }
}

export const marcasOficiais = [
    new Marca('Honda', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/2552px-Honda_Logo.svg.png', '1')

]
        
// Relacionado aos carros
        
app.get('/carros', carrosDisponiveis)
app.post('/carros/addCarro', adicionarCarro)
app.delete('/carros/rmvCarro', removerCarro)
app.patch('/carros/edtCarro', editarCarro)

// Car categories

app.get('/carros/carCategories/', carForCategories)
app.get('/carros/carCategories/:category', carForCategories)

// Relacionado à marcas

app.get('/marcas', marcasDisponiveis)
app.post('/marcas', addMarca)
app.delete('/marcas', rmvMarca)

// Admin

app.post('/admin', async (req, res) => {
    const password = await bcrypt.hash('123456', 8)

    console.log(password)

    return res.json({
        message: 'admin'
    })
})

app.post('/admin/login', async (req, res) => {
    const body = req.body

    if(body.email !== 'gui.andrade1510@gmail.com') {
        return res.status(400).json({
            error: true,
            message: 'Erro: Usuário ou senha incorretos'
        })
    }

    if(!(await bcrypt.compare(body.password, '$2a$08$ea1V0/m4GwF65Qb8CN7ZHuF4sEObjGqWNQHwwXWoygNgSiJDPLUwW' /* Estático */))){

        return res.status(400).json({
            error: true,
            message: 'Erro: Usuário ou senha incorretos'
        })

    }

    let token = jwt.sign({ id: 1 /* Estático */ }, 'WNAE783B67XUYB376DAG6G3663GDDJA8HS7GAD6GA', {
        expiresIn: 600
    })

    return res.json({
        message: 'Login admin',
        token: token
    })
})

// Car categories






app.listen(port, () => {
    console.log('-> Server running')
})