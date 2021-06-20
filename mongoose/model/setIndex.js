const mongoose = require('./db')

let IndexSchema = mongoose.Schema({
    sn: {
        type: String,
        index: true,
    },
})
// 静态方法
IndexSchema.statics.findBySn = function (sn, cb) {
    // 通过 find 方法获取sn数据
    // this 指向model  当调用对象里的函数时，this指向这个对象
    this.find({'sn': sn}, (err, doc) => {
        cb(err, doc)
    })
}

// 实例方法 （基本不用）
IndexSchema.methods.print = function() {
    // this 指向实例传入的数据
    console.log(this)
    console.log('实例方法')
}

module.exports = mongoose.model('Index', IndexSchema, 'index')

