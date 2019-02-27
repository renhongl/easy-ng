

# 简介

Page描述的是一个页面包含的内容，比如登陆页面，注册页面，主页面等等。
Page包含：

* 一个描述页面的模块
* 一个描述该页面路由得模块
* 一个描述该页面的组件
* 从modules中引入的各个公用模块


# 创建一个页面
    
* 创建该页面的模块： `ng g m pages/${page-name}`。
* 创建该页面的路由模块： `ng g m pages/${page-name}/${page-name}-routing --module=${page-name} --flat`。
* 创建该页面的组件： `ng g c pages/${page-name} --module=${page-name}`
