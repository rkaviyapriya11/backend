const mongoose = require('mongoose');


const login = mongoose.Schema({
    Email:String,
    Password:String
})


module.exports = mongoose.model('login',login)