const { createUser, getUsers } = require('../controller/users')
const validateMiddleware = require('../middlewares/validateMiddleware')
const { createUserSchema } = require('../utils/schemas/user')

//TRAER ROUTER
const { Router } = require('express')



//INICIALIZAR ROUTER
const router = Router()


//Necesitamos validar antes de ejecutar los metodos get, post, etc. esa es la funcion de un MidlleWare
/*
//Antes de usar middleware yup
router.post('/', createUser)
router.get('/', getUsers)
*/

/*
//antes de crear el usuario el middleware debe realizar la validacion
router.post('/', (req, res, next) => {
    console.log("Hola middleware")
    next()
} , createUser)
*/

//antes de crear el usuario el middleware debe realizar la validacion
router.post('/', validateMiddleware(createUserSchema, 'body') , createUser)

router.get('/', getUsers)


module.exports = router