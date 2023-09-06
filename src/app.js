//TRAER EXPRESS
const express = require('express')
const { PORT } = require('./config/config')

//INICIALIZAR EXPRESS
const app = express()

//AJUSTES***
app.set('PORT', PORT)

//MIDDLEWARES

//RUTAS

app.get('/', (req,res) => {
    res.send("Hola")
})

//permite que el archivo sea importado desde otro archivo
module.exports = app