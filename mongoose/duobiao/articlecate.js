const mongoose = require('../model/db')

const ArticleCateSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    description: String,
    addtime: {
        type: Date,
        default: 1,
    },
    status: {
        type: Number,
        default: 1,
    },
})

module.exports = mongoose.model('ArticleCate', ArticleCateSchema, 'articleCate')
