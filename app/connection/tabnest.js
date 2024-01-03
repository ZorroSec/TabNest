import { createConnection } from "mysql2"

const connection = createConnection({
    host: "mysql-159788-0.cloudclusters.net",
    port: 18848,
    user: "admin",
    password: "IHIsJqeO",
    database: "tabnest"
})

export default connection