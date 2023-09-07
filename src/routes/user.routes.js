//TRAER ROUTES
const { Router } = require('express')

//INICIALIZAR ROUTES
const router = Router()

router.get('/add', (req,res) => {
    res.send("Add Users")
})

module.exports = router