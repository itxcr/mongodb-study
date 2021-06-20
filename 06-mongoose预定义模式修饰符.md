### mongoose 预定义模式修饰符

- `lowercase  uppercase  trim`

  - mongoose提供的预定义模式修饰符，可以让我们对数据进行一些格式化

  ```js
  const UserSchema = mongoose.Schema({
      name: {
          type: String,
          // 去除name字段首尾空格
          trim: true
      },
      age: Number,
      status: {
          type: Number,
          default: 1,
      },
  })
  ```

### mongoose  Getters 与 Setters 自定义修饰符

- 除了mongoose 内置的修饰符以外，还可以通过 set 修饰符在增加数据的时候对数据进行格式化。也可以通过get(不建议)在实例获取数据的时候对数据进行格式化。

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
  
      },
      age: Number,
      status: {
          type: Number,
          default: 1,
      },
  })
  
  
  let user = new UserModel({
      name: '张三',
      age: 18
  })
  ```

- get 不建议使用(原因自查)

