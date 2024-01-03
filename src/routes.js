import app from "../app/controllers/config.js";
import sequelize from "../app/models/db.js";
import { Sequelize, DataTypes } from "sequelize";
import Logins from "../app/logins/logins.js";

app.get('/', (req, res)=>{
    Logins.create({
        nome: "admin2",
        email: "zezao@gmail.com",
        senha: "admin1234"
    })
    res.json({
        message: "success"
    })
})