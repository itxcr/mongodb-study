const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/test')
// 有密码
// mongoose.connect('mongodb://weitian:test@localhost/test')
mongoose.connect('mongodb://weitian:test@localhost/wanglufei')

// let UserSchema = mongoose.Schema({
//     name: String,
//     age: Number,
//     status: Number,
// })

const ArticleSchema = mongoose.Schema({
    title: String,
    author: String,
})

// 查询
// let User = mongoose.model('User', UserSchema)
const Article = mongoose.model('Article', ArticleSchema, 'article')



// 增加数据
// 实例化model
const author = new Article({
    title:"火影忍者",
    author:"岸本齐史"
})
// 执行增加操作
// author.save((err) => {
//     if (err) {
//         return
//     }
//     console.log('增加成功')
// })

// 执行数据更新
// Article.updateOne({_id:"5ffbac640ee6b03ab8a19eac"},{title:"测试", author: "测试"},(err, res) => {
//     if (err) {return}
//     console.log('数据更新成功')
// })


// 删除数据
Article.deleteOne({_id:"5ffbac640ee6b03ab8a19eac"},(err, result) => {
    if (err) {return}
    console.log('数据删除成功')
})

setTimeout(
    () => {
        Article.find({}, function (err, doc) {
            if (err) {
                return
            }
            console.log(doc)
        })
}, 3000)

