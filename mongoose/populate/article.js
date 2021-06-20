const mongoose = require('../model/db')
const Schema = require('mongoose')

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    cid: {
        type: Schema.Types.ObjectId,
        // cid 和文章分类表建立关系  写的model名字
        ref: 'ArticleCate'
    },
    author_id: {
        type: Schema.Types.ObjectId,
        // author_id 和用户表建立关系  写的model名字
        ref: 'User'
    },
    author_name: {type: String, default: 'xcr'},
    description: String,
    order: {type: Number, default: 100},
    content: String,
})

module.exports = mongoose.model('Article', ArticleSchema, 'article')
