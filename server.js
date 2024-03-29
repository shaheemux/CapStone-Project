import express from "express";
import cors from "cors";
import { config } from 'dotenv'
import productsRoute from './routes/products.js'
import womensRoute from './routes/womens.js'
import usersRoute from './routes/users.js';
import loginRouter from './routes/login.js';
import {auth} from './middleware/authentication.js'
import bcrypt from 'bcryptjs';
config()


const app = express()
const port = +process.env.MYSQL_ADDON_PORT || 3001


app.use(cors())


app.use(express.json())
app.use(express.static( 'public' ))
app.use('/products', productsRoute)
app.use('/womens', womensRoute)
app.use('/users', usersRoute) 
app.use('/login',auth,loginRouter)






app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})