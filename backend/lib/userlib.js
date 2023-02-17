const usermodel = require("../models/usermodel");

module.exports.getAllUsers = async function(callback) {
    try {
        var users = await usermodel.find({});
        callback(null, users);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.createFirstUser = async function(callback) {
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


module.exports.updateUser= async function(username,data,callback){
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

module.exports.deleteUser= async function(callback){
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


module.exports.getUserByFilter= async function(filter,callback){
    try{
          var result = await usermodel.findOne(filter);
          callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

