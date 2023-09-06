//importar archivo app
const app = require('./app')
const { PORT } = require('./config/config')

//PONER EL SERVIDOR A ESCUCHAR
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})