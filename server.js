import express from "express";
import cors from "cors";
import { config } from 'dotenv'
import productsRoute from './routes/products.js'
import usersRoute from './routes/users.js';
import loginRouter from './routes/login.js';
import bcrypt from 'bcrypt'
import {auth} from './middleware/authentication.js'
config()


const app = express()
const port = +process.env.MYSQL_ADDON_PORT || 3001


app.use(cors({
    origin: 'https://localhost:8080',
    Credentials: true
}))
app.use(express.json())
app.use(express.static( 'public' ))
app.use('/products', productsRoute)
app.use('/users', usersRoute) 
app.use('/login',auth,loginRouter)






app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})