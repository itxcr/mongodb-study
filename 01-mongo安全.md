### Mongodb 账户权限配置

- 创建超级管理员账户

  ```js
  use admin 
  
  db.createUser({
      "user":"xcr",
      "pwd":"test",
      "roles":[{"role":"root", "db":"admin"}]
  })
  
  ```

- 修改mongodb数据库配置文件,开启权限验证

  `mongod.cfg`

  ```js
  security: 
  	authorization: enabled
  ```

- 重启服务

- 使用超级管理员账户链接数据库

  ```js
  mongo admin -u 用户名 -p 密码
  
  mongo 远程ip:自定义端口号/数据库名称 -u 用户名 -p 密码
  ```

- 给指定的数据库创建管理员

  - 先选择要分配权限的数据库,再创建管理员

  ```js
  db.createUser({
      "user":"weitian",
      "pwd":"test",
      "roles":[{"role":"dbOwner", "db":"wanglufei"}]
  })
  ```

  - 连接数据库

    ```js
    mongo wanglufei -u weitian -p test
    ```

### 基本命令

- `show users` 查看当前数据库管理员
- `db.dropUser("管理员名字")`  删除管理员
- `db.updateUser("admin", {"pwd":"新密码"})`   修改管理员密码
- `db.auth("admin","password")`   进行密码认证

### 数据库角色

1. 数据库用户角色：`read  readWrite`

2. 数据库管理角色: `dbAdmin dbOwner userAdmin`
3. 集群管理角色： `clusterAdmin  clusterManager  clusterMonitor    hostManager`
4. 备份恢复角色： `backup  restore`
5. 所有数据库角色: `readAnyDatabase  readWriteAnyDatabase  userAdminAnyDatabase  dbAdminAnyDatabase`
6. 超级用户角色： `root`

