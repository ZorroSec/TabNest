const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("bl4brdgk6kjyan7p7h6z", "umtkwpe4bhlrpcaj", "WEU165EWoSsqquQeKRbc", {
    dialect: "mysql",
    host: "bl4brdgk6kjyan7p7h6z-mysql.services.clever-cloud.com",
    port: 3306
})

module.exports = sequelize