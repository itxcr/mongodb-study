const mongoose = require('../model/db')
const Schema = require('mongoose');

const ArticleSchema = mongoose.Schema({
    title: {type: String,  unique: true},
    // 文章所属分类id
    cid: {type: Schema.Types.ObjectId},
    // 用户的id
    author_id: {type: Schema.Types.ObjectId},
    author_name: {type: String, default: 'xcr'},
    description: String,
    order: {type: Number, default: 100},
    content: String,
})

module.exports = mongoose.model('Article', ArticleSchema, 'article')
