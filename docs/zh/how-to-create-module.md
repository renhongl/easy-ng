
# 简介
    
Module描述的是一个包含业务功能的独立模块，是可重复使用，松耦合的代码块。
Module包含：

* 一个主模块文件。
* 一个主导出文件，用于导出该模块的组件，静态数据，服务等等。
* 一个主主件，作为该模块组件的入口。
* 其他子模块或者组件。


# 创建一个模块

* 创建该模块：`ng g m modules/${module-page}`。
* 创建主导出文件index.ts
* 创建主主件：`ng g c modules/${module-name} --module=${module-name}`