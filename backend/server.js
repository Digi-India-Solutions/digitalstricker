const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3001;
const connectDb = require('./config/db')
dotenv.config()
const productRoutes = require('./routers/route')
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extends:true}))


app.use('/api', productRoutes);

app.listen(PORT,()=>{
    console.log('server run on' , PORT)
})

connectDb()