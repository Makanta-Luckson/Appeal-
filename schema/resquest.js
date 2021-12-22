const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    names : String,
    number : String,
    year : String,
    course : String,
    lecturer : String,
    department : String,
    reason : String
})

const requestModel = mongoose.model('request', requestSchema);
module.exports = requestModel;