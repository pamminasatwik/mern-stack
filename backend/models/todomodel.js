// // const mongoose = require("mongoose");
// import mongoose from "mongoose"
// const todoSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     isCompleted: {type: Boolean, default: false},
//     isDeleted: {type: Boolean, default: false},
//     createdAt: {type: Date, default: Date.now}
// });

// // module.exports = mongoose.model("todo",todoSchema);
// export default mongoose.model("todo",todoSchema);          

import mongoose from "mongoose";

const toDoItemSchema = new mongoose.Schema({
    title : {type : String, required : true},
    isCompleted : {type : Boolean, default : false},
    isDeleted : {type : Boolean, default : false},
    createdAt : {type : Date, default : Date.now}
});

export default mongoose.model("todo",toDoItemSchema);//same as above