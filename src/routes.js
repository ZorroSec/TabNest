import app from "../app/controllers/config.js";
import sequelize from "../app/models/db.js";
import { Sequelize, DataTypes } from "sequelize";
import Logins from "../app/logins/logins.js";
import connection from "../app/connection/tabnest.js";
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './../views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('../app/public'))
app.use(express.static('../app/scripts'))
app.get('/', (req, res)=>{
    // connection.query(`INSERT INTO ${process.env.DBNAME}.logins(nome,email,senha) VALUES('admin2','admin2@gmail.com','admin1234')`, (results, fields)=>{
    //     res.json({
    //         message: "success"
    //     })

    // })
    res.render('home')
})