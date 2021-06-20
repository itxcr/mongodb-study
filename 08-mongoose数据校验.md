### mongoose数据校验

- 用户通过mongoose给MongoDB数据库增加数据的时候，对数据的合法性进行的验证

- mongoose里面定义Schema：字段类型、修饰符、默认参数、参数校验 都是为了数据库数据的一致性

- Schema 为数据库对象的集合，每个schema 会映射到mongodb中的一个collection，定义Schema 可以理解为表结构的定义

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
  ```

### 内置校验方法

- required  必须传入

- max  用于 Number 类型数据  最大值

- min  用于 Number 类型数据  最小值

- enum  枚举类型  要求数据必须满足枚举值  enum:['0', '1', '2']  （值必须在对应的数组里面， 且需要用在 string 类型的数据上）

- match  增加的数据必须符合 match(正则) 的规则 用在 string 类型里

  ```js
          match:/^sn(.*)/
  ```

  

- maxlength  最大长度      用在 string 类型里

- minlength   最小长度      用在 string 类型里

### mongoose自定义验证器

- validate 字段接验证函数 

  ```js
  validate: function(test (验证字段传入的数据)) {
      // 符合规则验证通过
      return test.length >= 10
  }
  ```

  

