

# NgSdk

使用Angular开发的核心架构

# 安装运行

1. 将代码克隆到本地， 进入根文件夹，运行命令`npm install`安装依赖。
1. 安装完成后，运行命令`npm run start`启动服务器。
3. 如果需要使用api服务器用于开发，运行命令:

    `json-server --watch db/db.json -p 5000`
1. 打开浏览器，访问`localhost:4200`浏览页面。

# 开发步骤

* 创建你的模块，请参考：[如何创建模块](./how-to-create-module.md)
* 创建你的页面，请参考：[如何创建页面](./how-to-create-page.md)
* 在跟路由中配置你的页面：[如何链接新页面](./how-to-link-new-page.md)



# 功能列表

1. 基本结构：头部模块，左侧导航，主区域布局
1. 路由: 实现多页面，实现路由模块化，实现懒加载路由
1. 组件库支持：Angular Material[文档](how-to-use-material-comp.md), Ant Design[文档](how-to-use-antd-comp), Blox Material
1. 使用page模块描述路由对应的组件[如何创建一个page](./how-to-create-page.md)
1. 使用modules开发公用可配置模块[如何创建一个module](./how-to-create-module.md)
1. 支持国际化：实现多语言
1. 支持Redux：状态管理
1. 支持修改主题颜色(请参考UI组件使用说明)
1. 支持echarts:[文档](./how-to-create-chart.md)
1. 支持leaflet map:[文档](./how-to-create-leaflet-map.md)
