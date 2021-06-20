const ArticleCateModel = require('./articlecate')
const UserModel = require('./user')
const ArticleModel = require('./article')


// const cate = new ArticleCateModel({
//     title: '国际新闻',
//     description: '国际新闻'
// })
//
// cate.save()

// const user = new UserModel ({
//     username: '张三',
//     password: 'zhangsan',
//     age: 18,
//     tel: 13888888888,
//     sex: '男',
// })
// user.save()

/* 公司 */
// const article = new ArticleModel({
//     title: '国际新闻',
//     // 文章所属分类id
//     cid: '5ffebaab42fb7f33787fa2a9',
//     // 用户的id
//     author_id: '5ffebbd85e386d3c60f4fb24',
//     author_name: '李四',
//     description: '描述',
//     content: '详情'
// })

/* home */
// const article = new ArticleModel({
//     title: '小超人测试',
//     // 文章所属分类id
//     cid: '5fff13be6fab922a78dda0e0',
//     // 用户的id
//     author_id: '5fff13e17d7ec528c47363a3',
//     author_name: '李四',
//     description: '描述',
//     content: '详情'
// })
//
// article.save()


/*
查询文章信息
 */

// ArticleModel.find((err, docs) => {
//     console.log(docs)
// })

/*
    查询文章信息并显示文章的分类 以及文章作者信息
 */

ArticleModel.aggregate([
    {
        $lookup: {
            from: 'articleCate',
            localField: 'cid',
            foreignField: '_id',
            as: 'category'
        }
    },
    {
        $lookup: {
            from: 'user',
            localField: 'author_id',
            foreignField: '_id',
            as: 'user'
        }
    }
], (err, docs) => {
    console.log(JSON.stringify(docs))
})



