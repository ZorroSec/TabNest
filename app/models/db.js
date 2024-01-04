const { Sequelize } = require("sequelize")
const DBNAME = process.env.DBNAME || "bl4brdgk6kjyan7p7h6z"
const DBUSER = process.env.DBUSER || "umtkwpe4bhlrpcaj"
const DBHOST = process.env.DBHOST || "bl4brdgk6kjyan7p7h6z-mysql.services.clever-cloud.com"
const DBPASS = process.env.DBPASS || "WEU165EWoSsqquQeKRbc"

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    dialect: "mysql",
    host: DBHOST,
    port: 3306
})

module.exports = sequelize