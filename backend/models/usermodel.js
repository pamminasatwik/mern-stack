// // const mongoose = require("mongoose");
// import mongoose from "mongoose"
// const userschema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     yearOfGraduation: { type: Number, min: 2000, max: 9000 },
//     createdAt: { type: Date, default: Date.now },
//     isDeleted: { type: Boolean , default:false}
// });
// export const usermodel =mongoose.model("user",userschema);


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {type : String, required : true, unique : true},
    yearOfGraduation : {type : Number, min : 2000, max : 9000},
    createdAt : {type : Date, default : Date.now},
    isDeleted : {type : Boolean, default : false}
});

export default mongoose.model("user",userSchema);