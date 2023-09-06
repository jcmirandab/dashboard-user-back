//TRAER EXPRESS
const express = require('express')

//INICIALIZAR EXPRESS
const app = express()

//AJUSTES***

//MIDDLEWARES

//RUTAS

app.get('/', (req,res) => {
    res.send("Hola")
})

//permite que el archivo sea importado desde otro archivo
module.exports = app