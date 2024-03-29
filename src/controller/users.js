const users = require('../db/user')
const User = require('../models/User')

//importamos yup completamente
//import * as yup from 'yup' //typescript

const createUser = (req,res) => {

    /*
    //definimos la forma de la estructura u objeto para que sea valido
    const createUserSchema = yup.object().shape({
        email: yup.string().email().min(5),
        nickname: yup.string().min(2),
        password: yup.string().min(6)
    })
    */

    /*
    //le pasamos al schema o la forma lo que se quiere validar y de que manera (sync)
    //si ocurre un error se lanza desde aqui y llega a middlewares/errorMiddleware
    createUserSchema.validateSync(req.body)
    */

    const {email, nickname, password} = req.body
    const newUser = new User(nickname, email, password)
    users.push(newUser)
    //res.send('Usuario creado')
    res.status(201).json({
        data: newUser,
        message: "Usuario creado",
        statusCode: 201
    })
}

const updateUser = (req, res) => {
    const {email, nickname, password} = req.body
    
    const {id} = req.params
    
    users[id].nickname = nickname
    users[id].email = email
    users[id].password = password

    const userUpdate = {email, nickname, password}
    
    res.status(200).json({
        data: userUpdate,
        message: "Usuario actualizado",
        statusCode: 200
    })
}

const getUsers = (req,res) => {
    //res.send(users)
    res.status(200).json({
        data: users,
        message: "Usuarios encontrados",
        statusCode: 200
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params
    users.splice(id,1)
    res.status(200).json({
        message: "Usuario eliminado",
        statusCode: 200
    })
}

module.exports = {
    createUser,
    updateUser,
    getUsers,
    deleteUser
}