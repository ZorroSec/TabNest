import app from "../app/controllers/config.js";

app.get('/', (req, res)=>{
    res.send('testando')
})