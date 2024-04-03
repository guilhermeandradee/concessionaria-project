import { Sequelize } from "sequelize";

const sequelize = new Sequelize('cars', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default {
    Sequelize,
    sequelize
}