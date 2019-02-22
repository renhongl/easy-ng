

# NgSdk

使用Angular开发的核心架构

# 安装运行

1. 将代码克隆到本地， 进入根文件夹，运行命令`npm install`安装依赖。
1. 安装完成后，运行命令`npm run start`启动服务器。
3. 如果需要使用api服务器用于开发，运行命令:

    `json-server --watch db/db.json -p 5000`
1. 打开浏览器，访问`localhost:4200`浏览页面。


# 包含功能及其使用方法

1. 基本结构：头部模块，左侧导航，主区域布局
1. 路由: 实现多页面，实现路由模块化，实现懒加载路由
1. 组件库支持：Angular Material[文档](how-to-use-material-comp.md), Ant Design, Blox Material
1. 使用page模块描述路由对应的组件
1. 使用modules开发公用可配置模块
1. 支持国际化：实现多语言
1. 支持Redux：状态管理
1. 支持修改主题颜色
1. 支持echarts:[文档](./how-to-create-chart.md)
1. 支持leaflet map
