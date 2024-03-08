import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import productsRoute from './routes/products.js'
import usersRoute from './routes/users.js'
config()

const app = express()
const port = +process.env.MYSQL_ADDON_PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.static( 'public' ))
app.use('/products', productsRoute)
app.use('/users', usersRoute) 



app.listen(port, ()=>{
    console.log(`http//localhost:${port}`)
})