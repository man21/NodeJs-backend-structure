
const Router = require('express').Router();
const {userController} = require('../index')

//Public API
Router.post('/signup', userController.signup);

module.exports = Router;