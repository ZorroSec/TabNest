const { Sequelize } = require("sequelize")
const DBNAME = process.env.DBNAME || "railway"
const DBUSER = process.env.DBUSER || "railway"
const DBHOST = process.env.DBHOST || "roundhouse.proxy.rlwy.net"
const DBPASS = process.env.DBPASS || "oV5kz8NSysQ7y7myHg6IyzR.HskLEusT"

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    dialect: "mysql",
    host: DBHOST,
    port: 50611
})

module.exports = sequelize