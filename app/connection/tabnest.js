const { createConnection } = require("mysql2")
const env = require('./../env/env.js')
const connection = createConnection({
    // host: process.env.DBHOST,
    // port: process.env.DBPORT,
    // user: process.env.DBUSER,
    // password: process.env.DBPASS,
    // database: process.env.DBNAME
    host: env.DBHOST,
    port: 50611,
    user: env.DBUSER,
    password: env.DBPASS,
    database: env.DBNAME
})

module.exports = connection