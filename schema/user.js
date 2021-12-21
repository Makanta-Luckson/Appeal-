const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : String,
    email : String,
    gender: String,
    role:String,
    lastName : String,
    computerNumber:String,
    school:String,
    password :String
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;