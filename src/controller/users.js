const users = require('../db/user')
const User = require('../models/User')

const createUser = (req,res) => {
    //res.send("Add Users")
    const {email, nickname, password} = req.body
    const newUser = new User(nickname, email, password)
    users.push(newUser)
    res.send('Usuario creado')
}

const getUsers = (req,res) => {
    res.send(users)
}

module.exports = {
    createUser,
    getUsers
}