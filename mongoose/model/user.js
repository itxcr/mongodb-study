const mongoose = require('./db')
// 定义集合的映射  字段名称必须和数据库字段保持一致
const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: {
        type: Number,
        default: 1,
    },
})

// 定义model操作数据库
const UserModel = mongoose.model('User', UserSchema, 'user')

module.exports = UserModel;
