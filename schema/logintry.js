const mongoose = require('mongoose')


const login = mongoose.Schema({
    Name: String,
    Course: String,
    Certifynum: Number
    
})
module.exports = mongoose.model('logintry', login)