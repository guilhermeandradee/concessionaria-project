import { DataTypes, Sequelize } from "sequelize"
import db from "./db.js"

import { v4 as uuidv4 } from 'uuid';

export const CarroDB = db.sequelize.define('carros', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: () => uuidv4()
    },
    marca: {
        type: Sequelize.STRING,
    },
    nome: {
        type: db.Sequelize.STRING
    },
    ano: {
        type: db.Sequelize.STRING
    },
    cor: {
        type: db.Sequelize.STRING
    },
    quilometragem: {
        type: db.Sequelize.STRING
    },
    finalDaPlaca: {
        type: db.Sequelize.STRING
    },
    combustivel: {
        type: db.Sequelize.STRING
    },
    aceitaTroca: {
        type: db.Sequelize.STRING
    },
    carroceria: {
        type: db.Sequelize.STRING
    },
    potencia: {
        type: db.Sequelize.STRING
    },
    imagem: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.STRING
    }
})

// CarroDB.sync({force: true})
export const MarcaDosCarrosCadastrados = db.sequelize.define('MarcaCarrosCadastrados', {
    marcaDoCarro: {
        type: db.Sequelize.STRING
    }
})
