### mongoose索引，mongoose内置CRUD方法、扩展mongoose model的静态方法和实例方法

- ##### 索引

  - 索引是对数据库表中一列或多列的值进行排序的一种结构，可以让我们查询数据库变得更快。MongoDB的索引几乎与传统的关系型数据库一模一样，这其中也包括一些基本的查询优化技巧
  - mongoose中可以在定义Schema的时候创建索引

  ```js
  const SetSchema = mongoose.Schema({
      name: {
          type: String,
          // 去除name字段首尾空格
          trim: true,
          // 增加数据的时候对 name 字段进行处理
          set(params) {
              // params 可以获取 name 的值 返回的数据就是 name 在数据库实际保存的值
              if (!params) {
                  return params
              }
              if (params.indexOf('http://') !== 0 && params.indexOf('https://') !== 0) {
                  return `http://${params}`
              }
              return params
          },
          // 唯一索引
          unique: true,
          // 普通索引
          index: true
  
      },
      age: Number,
      status: {
          type: Number,
          default: 1,
      },
  })
  
  ```

- ##### mongoose内置CRUD

  - `Model.deleteMany()`
  - `Model.deleteOne()`
  - `Model.find()`
  - `Model.findById()`
  - `Model.findByIdAndDelete()`
  - `Model.findByIdAndRemove()`
  - `Model.findByIdAndUpdate()`
  - `Model.findOne()`
  - `Model.findOneAndDelete()`
  - `Model.findOneAndRemove()`
  - `Model.findOneAndReplace()`
  - `Model.findOneAndUpdate()`
  - `Model.replaceOne()`
  - `Model.updateMany()`
  - `Model.updateOne()`

- ##### 扩展mongoose内置方法

  - 静态方法

    ```js
    let IndexSchema = mongoose.Schema({
        sn: {
            type: String,
            index: true,
        },
    })
    // 静态方法
    IndexSchema.statics.findBySn = function (sn, cb) {
        // 通过 find 方法获取sn数据
        // this 指向model  当调用对象里的函数时，this指向这个对象
        this.find({'sn': sn}, (err, doc) => {
            cb(err, doc)
        })
    }
    ```

  - 实例方法（基本不用）

    ```js
    IndexSchema.methods.print = function() {
        // this 指向实例传入的数据
        console.log(this)
        console.log('实例方法')
    }
    ```

    

  

  

