const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()

const connDB = require('./config/db')
connDB()

app.use(express.json())

app.use('/player', require('./routes/playerRoute'))
app.use('/club', require('./routes/clubRoute'))


mongoose.connection.once('open', ()=>{
    console.log('DB connected')
    app.listen(process.env.PORT,()=>{console.log(`server is running on port ${process.env.PORT}`)})
})