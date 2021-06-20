## mongoDB用法
### 建立mongodb服务
- `mongod --dbpath` <存放数据库路径>

### 使用
- `mongo` 打开客户端mongoDB
- `show dbs` 显示已创建的所有数据库
- `use wanglufei` `use <表名>` 选择或创建对应数据库
- `db.article.insert({"title":"海贼王", "author":"尾田"})` 在创建或选择的数据库中创建一个集合(表)，名为article，并插入一条数据
- 
    ```json
  db.article.insert({"title":"海贼王1", "author":"尾田1", "age": 18})
  db.article.insert({"title":"海贼王2", "author":"尾田2", "age": 28})
  db.article.insert({"title":"海贼王3", "author":"尾田3", "age": 38})

- `show collections` 显示创建的集合(表)
- `db.article.find()` 查找集合 article 中的所有数据

#### 条件查找数据
- `db.article.find({"title":"海贼王"})` 查找`title`为`海贼王`的集合
- `db.article.find({"title":"海贼王","author":"尾田"})`查找`title`为`海贼王` 且 `author`为`尾田`的集合(交集)
- `db.article.find({"age":{$gt:20}})` 查找`age`大于20的数据
- `db.article.find({"age":{$gte:20}})` 查找`age`大于等于20的数据
- `db.article.find({"age":{$lt:20}})` 查找`age`小于20的数据
- `db.article.find({"age":{$lte:20}})` 查找`age`小于等于20的数据
- `db.article.find({"age":{$gte:20, $lte:22}})` 查找`age`大于等于20且小于等于22的数据
- `db.article.find({"title":/海/})` 模糊查询
- `db.article.find({"title":/^1海/})` 查询以 `1` 开头的
- `db.article.find({}, {title:1})` 查询指定 `title` 列的数据
- `db.article.find({"age":{$gt:20}}, {title:1})` 查询 `age` 大于等于20 且 指定`title` 列的数据
- `db.article.find({"age":{$gt:20}}, {title:1, age: 1})` 查询 `age` 大于等于20 且 指定`title` 和 `age` 列的数据
- `db.article.find().sort({age: 1})` 升序
- `db.article.find().sort({age: -1})` 降序
- `db.article.find().limit(2)` 只查询2条数据  
- `db.article.find().skip(2).limit(3)` 跳过 2 条 后查询 3 条数据 用于分页
- `db.article.find({$or: [{age:18}, {title:"海贼王"}]})` 查询 `age` 为 18  并且 `title` 为 `海贼王` 的数据 (并集)
- `db.article.find().limit(1)` `db.article.findOne()`  查询第一条数据
- `db.article.find({"age":{$gt:20}}).count()` 查找`age`大于20的数据的数量

### 删除集合(表)
- `db.<表名>.drop()`

### 删除数据库
- 切换到想删除的数据库
- `db.dropDatabase()`

### 修改数据
- `db.<集合名称>.update({"title":"海贼王"}, {$set:{"age":128, "sex":"男"}})`
    - `db.article.update({"title":"海贼王"}, {$set:{"age":128, "sex":"男"}})`
        - 修改 `title`  为 海贼王 的这条数据，把其 age 改成 128 sex 改成 男
- 不加`$set` 会修改整条数据
    - `db.article.update({"title":"海贼王"}, {"age":128, "sex":"男"})`
        - 修改 `title`  为 海贼王 的这条数据， 将其替换为 age  128  sex 男

### 删除数据
- `db.<集合名称>.remove({"title":"海贼王"})` 删除 `title`  为 海贼王 的所有数据
    - `db.article.remove({"title":"海贼王"})`
- `db.article.remove({"title":"海贼王"},{justOne: true})` 只删除1条 `title`  为 海贼王 的条数据

## 索引

##### 索引是对数据库表中一列或多列的值进行排序的一种结构，可让查询数据库变得更快

### 查询优化技巧
- 查询索引 
    - `db.<表名>.getIndexes()`
        - `db.article.getIndexes()`
        
- 创建索引
    - `db.<表名>.ensureIndex({ "<添加索引的字段>" : 1})`
        - `db.article.ensureIndex({"title":1})`
        
- 删除索引
    - `db.<表名>.dropIndex({ "<删除索引的字段>" : 1})`
        - `db.article.dropIndex({"title":1})`        
        
- 查询具体执行时间
    - `db.article.find({"title":"海贼王"}).explain('executionStats')`      

### 复合索引
- 设置 `1` 表示索引按升序存储 设置 `-1` 表示索引按降序存储
- `db.user.ensureIndex({"username":1, "age":-1})`
    - 基于 username 和 age 的查询会用到该索引，
    或者基于 username 的查询也会用到该索引，
    但是只基于 age 的查询将不会用到该复合索引
    - 如果想用到复合索引，必须在查询条件中包含复合索引的前 N 个索引。 
        - 然而，如果查询条件中的 键值 顺序和 复合索引中创建顺序不一致的话，
        MongoDB会智能的调整该顺序，以便复合索引可以为查询所用
        - 如 ： `db.user.find({"age":30,"username":"lisi"})`
        
### 唯一索引
- 设置唯一索引
- `db.user.ensureIndex({"username":1},{"unique":true})`
    
    
     

























