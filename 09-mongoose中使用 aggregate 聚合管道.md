### mongoose实现表关联查询

```js
// 实现order表关联 order_item 表
const OrderModel = require('./model/order')
OrderModel.aggregate([
        {
            // 表关联
            $lookup: {
                from: 'order_item',
                localField: 'order_id',
                foreignField: 'order_id',
                as: 'items',
            },
        },
            // 对order表进行匹配
            // 找出 all_num 大于 2 的数据
        {
            $match: {
                'all_num': {$gt: 2},
            },
        },
    ],
    (err, docs) => {
        docs.forEach((v) => {
            console.log(v)
        })
    })
```

```js
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

```

