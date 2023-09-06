//importar archivo app
const app = require('./app')

//PONER EL SERVIDOR A ESCUCHAR
app.listen(app.get('PORT'), () => {
    console.log(`Server started on port ${app.get('PORT')}`)
})