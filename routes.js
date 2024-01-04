const app = require("./app/controllers/config.js")
const sequelize = require("./app/models/db.js")
const { Sequelize, DataTypes } = require("sequelize")
const Logins = require("./app/logins/logins.js")
const connection = require("./app/connection/tabnest.js")
const env = require('./app/env/env.js')
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
    connection.query(`INSERT INTO railway.posts(nome, titulo, post, data) VALUES('José Cipriano', 'Lorem ipsum', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', ''${Date()})`, (results, fields)=>{
        res.json({
            status: 200
        })
    })
})