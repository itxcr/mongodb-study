const mongoose = require('./db')
const NewsSchema = mongoose.Schema({
    title: String,
    author: String,
    content: String,
    status: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('News', NewsSchema, 'news')
