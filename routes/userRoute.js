const routerUser = require('express').Router();
const control = require('./../controllers/usersController')

routerUser.get('/', control.getUsers)
routerUser.post('/register', control.addUser);
routerUser.post('/login', control.loginUser);

module.exports = routerUser;