// const UserModel = require('./model/user')

// const NewsModel = require('./model/news')
// UserModel.find({}, (err, doc) => {
//     if (err) {
//         return
//     }
//     console.log(doc)
// })
//
//
//
// NewsModel.find({}, (err, doc) => {
//     if (err) {
//         return
//     }
//     console.log(doc)
// })

// let user = new UserModel({
//     name: '测试111',
//     age: 18,
// })
//
// user.save(err => {
//     if (err) {
//         return
//     }
//     UserModel.find({}, (err, doc) => {
//         if (err) {
//             return
//         }
//         console.log(doc)
//     })
// })

// let news = new NewsModel({
//     title:'新闻标题',
//     author: '新闻作者',
//     content: '新闻内容',
// })
//
// news.save()

// const SetModule = require('./model/set')
//
// let set = new SetModule({
//     name: '',
//     age: 23,
// })
//
// set.save(err =>{
//     if (err){return}
//     SetModule.find((err, doc) => {
//         if (err) return{err}
//         console.log(doc)
//     })
// })

// const IndexModel = require('./model/setIndex')
// let index = new IndexModel({
//     sn: '0123456789'
// })
//
// index.save()

// 静态方法
// IndexModel.findBySn('123456788', (err, data) => {
//     if (err){return}
//     console.log(data)
// })

// 实例方法
// let index = new IndexModel({
//     sn: '测试'
// })
// index.print()


// 实现order表关联 order_item
// const OrderModel = require('./model/order')
// OrderModel.aggregate([
//         {
//             // 表关联
//             $lookup: {
//                 from: 'order_item',
//                 localField: 'order_id',
//                 foreignField: 'order_id',
//                 as: 'items',
//             },
//         },
//             // 对order表进行匹配
//             // 找出 all_num 大于 2 的数据
//         {
//             $match: {
//                 'all_num': {$gt: 2},
//             },
//         },
//     ],
//     (err, docs) => {
//         docs.forEach((v) => {
//             console.log(v)
//         })
//     })

/*
    查询 order_item 找出商品名称是酸奶的商品对应的订单的订单号 以及订单的总价格
 */
const OrderItemModel = require('./model/order_item')
OrderItemModel.aggregate([
    {
        $match: {
            'title': '酸奶'
        }
    },
    {
        $lookup: {
            from: 'order',
            localField: 'order_id',
            foreignField: 'order_id',
            as: 'item'
        },

    },
], (err, doc) => {
    console.log(JSON.stringify(doc))
    doc.forEach(v=> {
        v.item.forEach(v => {
            console.log(v.order_id)
            console.log(v.all_price)
            console.log(v)
        })
    })
})


































