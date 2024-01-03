import "./routes.js"
import app from "./app/controllers/config.js"
import express from "express"
import { engine } from "express-handlebars"
import bodyParser from "body-parser";
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views/');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(express.static('scripts'))
app.listen(4000, ()=>{console.log({ message: 'Success' })})