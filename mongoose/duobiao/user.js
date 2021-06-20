const mongoose = require('../model/db')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    age: Number,
    tel: Number,
    status: {
        type: Number,
        default: 1,
    },
    sex: String,
})

module.exports = mongoose.model('User', UserSchema, 'user')
