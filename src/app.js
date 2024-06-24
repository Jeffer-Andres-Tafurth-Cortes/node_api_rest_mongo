const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const {config} = require('dotenv')
config()

const bookRoutes = require('./routes/book.routes')

//Usamos Express para los middlewares
const app = express()
app.use(bodyParser.json())

//Conexion de bases de datos:
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONOG_DB_NAME})
const db = mongoose.connection

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
})