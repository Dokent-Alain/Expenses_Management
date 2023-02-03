'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUser = async () => {
    try{
        let pool = await sql.connect(config.sql);

        const sqlQueries = await utils.loadSqlQueries('User');
        const oneUser = await pool.request()
                        .input('UserID', sql.Int, UserID)
                        .query(sqlQueries.UserbyID);
        return oneUser.recordset;                
    }catch(error){
        return error.message;
    }

    const getByID = async (UserID) => {
        try{
            let pool = await sql.connect(config.sql);
            const sqlQueries = await utils.loadSqlQueries('User');
            const oneUser = await pool.request()
                .input('UserID', sql.Int, UserID)
                .query(sqlQueries.CategorybyID);
            return oneUser.recordset;
        }catch (error){
            return error.message;
        }
    }
}

const CreateCategory = async (CategoryData) =>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Users');
        const insertUser = await pool.request()
                            .input('ID',sql.Int, CategoryData.ID)
                            .input('Last_name', sql.VarChar(50), CategoryData.Last_name)
                            .input('First_name', sql.VarChar(50), UserData.First_name)
                            .input('Email', sql.VarChar(50),UserData.Email)
                            .input('Password', sql.Int, UserData.Password)
                            .query(sqlQueries.createUser);
        return insertUser.recordset;                    
    } catch(error){
        return error.message;
    }  
}

const getByID = async (req, res, next) => {

    try{
          const UserID = req.params.ID;
         const oneUser = await UserData.getByID(UserID);
         res.status(400).send(error.message);  
    } catch(error) {
        res.status(400).send(error.message);   
    }
}

const updateUser = async (ID,UserData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const update = await pool.request()
                        .input('UserID', sql.Int, UserID)
                        .input('Last_name', sql.VarChar(50), UserData.Last_name)
                        .input('First_name', sql.VarChar(50), UserData.First_name)
                        .input('Email', sql.VarChar(50),UserData.Email)
                        .input('Password', sql.Int, UserData.Password)
                        .query(sqlQueries.updateUser);
        return update.recordset;  
    }catch (error){
        return error.message;
    }
}

const deleteUser = async (UserID) =>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const deleted = await pool.request()
                        .input('UserID', sql.Int,)
                        .query(sqlQueries.deleteUser);
        return deleted.recordset;                    
    } catch(error){
       return error.message; 
    }   
}
module.exports = {
    getUser,
    getByID,
    createUser,
    updateUser,
    deleteUser
}