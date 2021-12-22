const mongoose = require('mongoose')

const responseSchema = mongoose.Schema({
    number : String,
    response : String 
})

const responseModel = mongoose.model('response', responseSchema);
module.exports = responseModel;