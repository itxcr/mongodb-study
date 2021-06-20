const mongoose = require('./db')
const SetSchema = mongoose.Schema({
    name: {
        type: String,
        // 去除name字段首尾空格
        trim: true,
        // 增加数据的时候对 name 字段进行处理
        set(params) {
            // params 可以获取 name 的值 返回的数据就是 name 在数据库实际保存的值
            if (!params) {
                return params
            }
            if (params.indexOf('http://') !== 0 && params.indexOf('https://') !== 0) {
                return `http://${params}`
            }
            return params
        },

    },
    age: Number,
    status: {
        type: Number,
        default: 1,
    },
})

module.exports = mongoose.model('Set', SetSchema, 'set')
