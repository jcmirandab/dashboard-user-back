//importar archivo app
const app = require('./app')

//PONER EL SERVIDOR A ESCUCHAR
app.listen(3000, () => {
    console.log(`Server started on port ${3000}`)
})