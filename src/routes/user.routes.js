const { createUser, getUsers, updateUser, deleteUser } = require('../controller/users')
const validateMiddleware = require('../middlewares/validateMiddleware')
const { createUserSchema, updateUserSchema } = require('../utils/schemas/user')

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

//patch permite actualizar uno o mas campos, put actualiza todos los campos
router.patch('/:id', validateMiddleware(updateUserSchema, 'body'), updateUser)

router.get('/', getUsers)

router.delete('/:id',deleteUser)


module.exports = router