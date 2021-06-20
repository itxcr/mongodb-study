### Populate 实现关联查询

##### 定义ref

```js
const mongoose = require('../model/db')
const Schema = require('mongoose')

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    cid: {
        type: Schema.Types.ObjectId,
        // cid 和文章分类表建立关系  写的model名字 相当于下面的 'Article'
        ref: 'ArticleCate'
    },
    author_id: {
        type: Schema.Types.ObjectId,
        // author_id 和用户表建立关系  写的model名字  相当于下面的 'Article'
        ref: 'User'
    },
    author_name: {type: String, default: 'xcr'},
    description: String,
    order: {type: Number, default: 100},
    content: String,
})

module.exports = mongoose.model('Article', ArticleSchema, 'article')

```

##### 使用

- 需要引入所有用到的model
- 使用populate('') 传入关联的字段‘
- 调用 exex() 方法

```js
const ArticleCateModel = require('../duobiao/articlecate')
const UserModel = require('../duobiao/user')
const ArticleModel = require('./article')

// 文章表和分类表的关联
ArticleModel.find({}).populate('cid').populate('author_id').exec((err, docs) => {
    console.log(docs)
})
```



