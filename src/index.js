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

//PONER EL SERVIDOR A ESCUCHAR
app.listen(3000, () => {
    console.log(`Server started on port ${3000}`)
})