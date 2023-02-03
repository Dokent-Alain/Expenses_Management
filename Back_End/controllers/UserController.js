'use strict';

const UserData = require('../data/User');

const getUsers = async (req, res, next) =>{
    console.log("azertyuio");
    try {
        const User = await UserData.getUsers();
        res.send(User)
    }catch (error){
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try{
        const data = req.body;
        const created = await UserData.createUser(data);
        res.send(created);        
    } catch (error){
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) =>{
    console.log("azertyuio");
    try {
        const User = await UserData.getUser();
        res.send(User)
    }catch (error){
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) =>{
    try{
        const UserID = req.params.ID;
        const data = req.body;
        const updated = await UserData.updateUser(UserID, data);
        res.send(updated);
    } catch (error){
        res.status(400).send(error.message);
    }   
}

const deleteUser = async (req, res, next) =>{
    try{
        const UserID = req.params.ID;
        const deleteUser = await UserData.deleteUser(UserID);
        res.send(deleteUser);
    }catch (error) {
        res.status(400).send(error.message);  
    }   
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}