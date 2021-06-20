### mongoose默认参数

- 增加数据的时候，如果不传入数据会使用默认配置的数据

  ```js
  // 定义Schema时可以指定默认参数及其类型
  const UserSchema = mongoose.Schema({
      name: String,
      age: Number,
      status: {
          type: Number,
          default: 1,
      },
  })
  ```

### 模块化

