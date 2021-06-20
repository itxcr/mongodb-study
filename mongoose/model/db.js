const mongoose = require('mongoose')
mongoose.connect(
    // 参数1 数据库连接地址
    `mongodb://weitian:test@localhost/wanglufei`,
    // `mongodb://weitian:test@localhost/test`,
    // 参数2 设置数据库参数
    {
        // 这个属性用于识别验证用户所需的db
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    // 参数3 回调函数
    (err) => {
        if (err) {
            return err
        }
        console.log('数据库连接成功')
    })
module.exports = mongoose;
