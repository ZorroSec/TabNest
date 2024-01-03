import "./src/routes.js"
import app from "./app/controllers/config.js"
app.listen(4000, ()=>{console.log({ message: 'Success' })})