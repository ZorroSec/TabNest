require("./routes.js")
const app = require("./app/controllers/config.js")
const express = require("express")
const exbhs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views/');
app.engine('handlebars', exbhs.engine({ defaultLayout: 'main', extname: 'handlebars' }))
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(express.static('scripts'))
app.listen(4000, ()=>{console.log({ message: 'Success' })})