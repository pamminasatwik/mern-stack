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
        callback(err, null)
    }
}

module.exports.get