const app = require("./app/controllers/config.js")
const sequelize = require("./app/models/db.js")
const { Sequelize, DataTypes } = require("sequelize")
const Logins = require("./app/logins/logins.js")
const connection = require("./app/connection/tabnest.js")
const env = require('./app/env/env.js')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(express.static('../app/public'))
// app.use(express.static('../app/scripts'))
app.get('/', (req, res)=>{
    connection.query('SELECT * FROM posts ORDER BY id DESC', (results, fields)=>{
        res.render('home', { posts: fields })
    })
})
app.get('/tests', (req, res)=>{
    connection.query(`INSERT INTO railway.logins(nome,email,senha) VALUES('admin2','admin2@gmail.com','admin1234')`, (results, fields)=>{
        res.json({
            message: "success",
            fields: fields
            
        })
    })
    // Logins.create({
    //     nome: "Test1",
    //     email: "tes@email.com",
    //     senha: "1234"
    // })
    // res.json({
    //     message: "success"
    // })
})
app.get('/add', (req, res)=>{
    res.render('add')
})
app.post('/add', (req, res)=>{
    const nome = req.body.nome
    console.log(nome)
})