// const usermodel = require("../models/usermodel");
import {usermodel} from "../models/usermodel.js";


export  async function getAllUsers(callback) {
    try {
        var users = await usermodel.find({});
        callback(null, users);
    } catch (err) {
        callback(err, null);
    }
}

export  async function createFirstUser(callback) {
    try {
        var user = {
            username: "satwi",
            yearOfGraduation: 2024,
        };
        var newUser = new usermodel(user);
        var result = await newUser.save();
        callback(null, result);
    } catch (err) {
        callback("User Already exist", null)
    }
}


export  async function updateUser(username,data,callback){
    try{
          var query = {
            userName:username,

          };
          var result = await usermodel.updateOne(query,data);
          callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export  async function deleteUser(callback){
    try{
          var query = {
            userName:username,
          };
          var result = await usermodel.updateOne(query,data);
          callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}


export  async function getUserByFilter(filter,callback){
    try{
          var result = await usermodel.findOne(filter);
          callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
