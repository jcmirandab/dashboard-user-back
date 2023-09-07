const { createUser, getUsers } = require('../controller/users')

//TRAER ROUTES
const { Router } = require('express')


//INICIALIZAR ROUTES
const router = Router()

router.post('/', createUser)
router.get('/', getUsers)

module.exports = router