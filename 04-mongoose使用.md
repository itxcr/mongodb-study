### mongoose介绍

- mongoose是在node.js异步环境下对MongoDB进行便捷操作的对象模型工具

### mongoose有两个特点

- 通过关系型数据库的思想来设计非关系型数据库
- 基于mongodb驱动，简化操作

### 用法

- 安装

  - `npm i mongoose --save`

- 引入 mongoose 并连接数据库

  ```js
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost/test')
  // 有密码
  // mongoose.connect('mongodb://weitian:test@localhost/test')
  ```

- 操作表（集合）前，先定义 Schema

  - 数据库中的 Schema 为数据库对象的集合。schema 是 mongoose 中会用到的一种数据模式，可以理解为表结构的定义(每个 schema 会映射到 MongoDB中的一个collection，它不具备操作数据库的能力)

    - Schema里的对象要和数据库表里面的字段相对应

    ```js
    let UserSchema = mongoose.Schema({
        name: String,
        age: Number,
        status: Number
    })
    ```

- 创建数据模型后可对数据库进行操作

  - 定义好Schema后，下面生成Model。model是由schema生成的模型，可以对数据库进行操作。
  - mongoose.model 里面可以传入两个参数，也可以传入三个参数
    - mongoose.model(参数1：模型名称(首字母大写), 参数2：Schema，参数3：数据库集合名称)

  ```js
  // 默认操作 articles 集合
  let Article = mongoose.model('Article', ArticleSchema)
  
  // 默认操作 article 集合
  let Article = mongoose.model('Article', ArticleSchema, 'article')
  ```

- 查询

  ```js
  const ArticleSchema = mongoose.Schema({
      title: String,
      author: String,
  })
  const Article = mongoose.model('Article', ArticleSchema, 'article')
  
  Article.find({}, function (err, doc) {
      if (err) {
          return
      }
      console.log(doc)
  })
  ```

- 增加数据

  ```js
  // 实例化模型 通过实例化模型创建增加的数据
  // 实例.save()
  const author = new Article({
      title:"火影忍者",
      author:"岸本齐史"
  })
  // 执行增加操作
  author.save((err) => {
      if (err) {
          return
      }
      console.log('增加成功')
  })
  ```

- 更新数据

  ```js
  // 直接使用model
  Article.updateOne({title:"火影忍者"},{title:"测试"},(err, res) => {
      if (err) {return}
      console.log('数据更新成功')
  })
  ```

- 删除数据

  ```js
  // 直接使用model
  Article.deleteOne({_id:"5ffbac640ee6b03ab8a19eac"},(err, result) => {
      if (err) {return}
      console.log('数据删除成功')
  })
  ```

  

