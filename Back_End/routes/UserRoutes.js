'use strict';

const User = require('express');
const UserController = require('../controllers/UserController');
const router = User.Router();

const {getUsers, getUser, addUser, updateUser, deleteUser} = UserController;

router.get('/users', getUsers); 
router.get('User/:ID', getUser);
router.post('/User', addUser);
router.put('/User/:id',updateUser);
router.delete('/User/:ID', deleteUser);
module.exports = {
    routes: router
}
