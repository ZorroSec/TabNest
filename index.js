require("./routes.js")
const app = require("./app/controllers/config.js")
const express = require("express")
const exbhs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views/');
app.engine('handlebars', exbhs.engine({ defaultLayout: 'main', layoutsDir: path.join(__dirname + '/views/' + 'layouts') }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname + '/views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + '/public/css')))
app.use(express.static(path.join(__dirname + '/scripts')))
app.listen(4000, ()=>{console.log({ message: 'Success' })})