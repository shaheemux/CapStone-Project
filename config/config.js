import mysql from 'mysql2';
import { config } from 'dotenv';
config();

let pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    multipleStatements: true,
    connectionLimit: 30
}).promise()


export {pool}

//config files connects to the database
