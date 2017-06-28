# gmf-laravel
gmf framework
## Documentation


## 安装 gmf-laravel
1 - 通过 Composer Create-Project
```shell
composer create-project --prefer-dist ggoop/gmf-laravel myproject
```
2 - 你需要运行 passport:keys 命令来创建生成安全访问令牌时用到的加密密钥
进入项目目标，用下列命令运行
```shell
php artisan passport:keys
```

3 -使用服务提供者注册内部的数据库迁移脚本目录，你需要更新你的数据库结构。Gmf的迁移脚本会自动创建应用程序需要的数据表：

```shell
php artisan migrate
```

4 - 使用 Artisan 命令 vendor:publish 来发布 gmf-sys 的 Vue 组件：
```shell
php artisan vendor:publish --tag=gmf
```