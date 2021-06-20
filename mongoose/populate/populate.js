const ArticleCateModel = require('../duobiao/articlecate')
const UserModel = require('../duobiao/user')
const ArticleModel = require('./article')

// 文章表和分类表的关联
ArticleModel.find({}).populate('cid').populate('author_id').exec((err, docs) => {
    console.log(docs)
})
