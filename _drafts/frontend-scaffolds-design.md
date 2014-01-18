---
layout: post
title:  "设计一个前端开发脚手架"
description: "设计一个前端开发脚手架"
categories: tools
tags: [frontend]

develop: true
---


## 需要解决的问题

在开发一个小型的网站时，需要快速搭建一个前端开发环境，方便成员之间预览页面效果，提高开发效率。

## 需要用到的工具

### jekyll

在使用`jekyll`搭建博客的时候，发现用这个做为前端静态页面服务端非常不错，优点有以下几点：

1. 首先，`jekyll`是一个静态页面服务
2. 页面可以定义数据
3. 它提供简单的模板继承，这样可以剥离公共的组件部分
4. 可以生成索引页面，并可以为静态页面配置category或tag对静态页面进行归档

也有备选的方案`Assemble`，这也是个扩展性非常强的，借助一些插件也可以达到`jekyll`同样的效果

### grunt

任务管理

### sass, compass

编写样式

### bower

js开源库管理
