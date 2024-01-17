const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    login:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {
    User
}