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
    function add__btn(){
        const nome = `${req.body.nome}`.replace(' ', '').toLowerCase()
        const titulo = req.body.title.replace('"', '')
        const post = req.body.post.replace("'", "")
        const date = req.body.date
        const fonte = req.body.fonte
        connection.query(`INSERT INTO railway.posts(nome,titulo,post,data,fonte) VALUES("${nome}","${titulo}","${post}","${date}","${fonte}")`, (results, fields)=>{
            console.log(fields)
        })
    }
    res.render('add', { add__btn: add__btn() })
})
app.get('/post/:nome/:id', (req, res)=>{
    const nome = req.params.nome
    const id = req.params.id
    connection.query(`SELECT * FROM railway.posts WHERE id = ${req.params.id}`, (results, fields)=>{
        connection.query(`SELECT * FROM comentarios WHERE idpost = ${id} ORDER BY id DESC`, (resu, filds)=>{
            res.render('post', { post: fields, nomeRoute: nome, idRoute: id, comments: filds })
        })
    })
})
app.get('/post/:nome/:id/add/comentario', (req, res)=>{
    res.render('post/add__comentario', { nome: req.params.nome, id: req.params.id })
})
app.post('/post/:nome/:id/add/comentario', (req, res)=>{
    function btn__comment(){
        const nome = req.body.nome
        const idpost = req.params.id
        const comentario = req.body.comentario
        const data = req.body.data
        connection.query(`INSERT INTO railway.comentarios(idpost,nome,comentario,data) VALUES('${idpost}','${nome}','${comentario}','${data}')`, (results, fields)=>{
            console.log(fields)
        })

    }
    res.render('post/add__comentario', { nome: req.params.nome, id: req.params.id, btn__comment: btn__comment() })
})
app.get('/user/:nome', (req, res)=>{
    connection.query(`SELECT * FROM railway.posts WHERE nome = '${req.params.nome}'`, (results, fields)=>{
        res.render('user', { user: fields })
    })
})