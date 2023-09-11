//TRAE ERROR MIDDLEWARE
const errorMiddleware = require('./middlewares/errorMiddleware')

//TRAER RUTAS
const userRoutes = require('./routes/user.routes')

require('dotenv').config()
const { PORT } = require('./config/config')

//TRAER EXPRESS
const express = require('express')


//INICIALIZAR EXPRESS
const app = express()

//AJUSTES***
app.set('PORT', PORT)

//MIDDLEWARES
app.use(express.json())


//RUTAS
app.use('/users',userRoutes)

//ERROR MIDDLEWARE (siempre debe ir despues de las rutas para que pueda capturar los errores)
app.use(errorMiddleware)

//permite que el archivo sea importado desde otro archivo
module.exports = app