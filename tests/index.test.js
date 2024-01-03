import mysql2 from "mysql2"

const connection = mysql2.createConnection({
    host: "mysql-159788-0.cloudclusters.net",
    port: 18848,
    user: "admin",
    password: "IHIsJqeO",
    database: "tabnest"
})
connection.query("SELECT * FROM tabnest.logins", (results, fields)=>{
    console.log(fields)
})