import app from "../app/controllers/config.js";
import sequelize from "../app/models/db.js";
import { Sequelize, DataTypes } from "sequelize";
import Logins from "../app/logins/logins.js";
import connection from "../app/connection/tabnest.js";
app.get('/', (req, res)=>{
    // connection.query("INSERT INTO tabnest.logins(nome,email,senha) VALUES('admin2','admin2@gmail.com','admin1234')", (results, fields)=>{
    //     res.json({
    //         message: "success"
    //     })

    // })
    if(Logins.create({
        nome: "admin3",
        email: "admin3@gmail.com",
        senha: "admin1233"
    })){
        res.json({
            message: 'success'
        })
    }
})