import app from "../app/controllers/config.js";
import sequelize from "../app/models/db.js";
import { Sequelize, DataTypes } from "sequelize";
import Logins from "../app/logins/logins.js";
import connection from "../app/connection/tabnest.js";
app.get('/', (req, res)=>{
    // connection.query(`INSERT INTO ${process.env.DBNAME}.logins(nome,email,senha) VALUES('admin2','admin2@gmail.com','admin1234')`, (results, fields)=>{
    //     res.json({
    //         message: "success"
    //     })

    // })
    res.render('home')
})