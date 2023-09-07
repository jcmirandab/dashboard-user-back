const users = require('../db/user')
const User = require('../models/User')

const createUser = (req,res) => {
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

const getUsers = (req,res) => {
    res.send(users)
}

module.exports = {
    createUser,
    getUsers
}