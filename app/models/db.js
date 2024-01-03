import { Sequelize } from "sequelize";

const sequelize = new Sequelize("tabnest", "admin", "IHIsJqeO", {
    dialect: "mysql",
    host: "mysql-159788-0.cloudclusters.net",
    port: 18848
})

export default sequelize