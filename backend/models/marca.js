import db from "./db.js"

export const MarcaDB = db.sequelize.define('marcas', {
    nome: {
        type: db.Sequelize.STRING
    },
    image: {
        type: db.Sequelize.STRING
    }
})
