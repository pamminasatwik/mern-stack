// const mongoose = require("mongoose");
import mongoose from "mongoose"
const userschema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    yearOfGraduation: { type: Number, min: 2000, max: 9000 },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean , default:false}
});
export const usermodel =mongoose.model("user",userschema);
// const usermodel = mongoose.model("user",userschema);
// module.exports = mongoose.model("user", userschema);


// const usermodel = mongoose.model("user",userschema);
// module.exports = usermodel