const { createConnection } = require("mysql2")

const connection = createConnection({
    // host: process.env.DBHOST,
    // port: process.env.DBPORT,
    // user: process.env.DBUSER,
    // password: process.env.DBPASS,
    // database: process.env.DBNAME
    host: "bl4brdgk6kjyan7p7h6z-mysql.services.clever-cloud.com",
    port: 3306,
    user: "umtkwpe4bhlrpcaj",
    password: "WEU165EWoSsqquQeKRbc",
    database: "bl4brdgk6kjyan7p7h6z"
})

module.exports = connection