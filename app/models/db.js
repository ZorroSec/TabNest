const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    dialect: "mysql",
    host: process.env.DBHOST,
    port: process.env.DBPORT
})

module.exports = sequelize