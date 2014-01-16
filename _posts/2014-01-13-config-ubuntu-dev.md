---
layout: post
title:  "配置ubuntu开发环境"
date: 2014-01-13 22:27:46
description: "配置ubuntu开发环境"
categories: tools
tags: [frontend]
---

## 使用到的命令

### 查看系统信息（32位 or 64位）

``` sh
$ uname -a
```

``` sh
$ uname -m
$ arch
$ file /bin/cat
```

查看cpu信息

``` sh
$ more /proc/cpuinfo
```

查看 LINUX是32位还是64位

``` sh
$ su - root
# file /sbin/init
```

### tar 打包，解包

`-f` 指定包的文件名


`-c` 创建包

`-r` 追加

`-u` 更新文件

`-t` 列出文件

`-x` 解包

`-v` 查看


`-z` 调用`gzip`
<<<<<<< HEAD:_drafts/config-ubuntu-dev.md
`-j` 调用`bzip2`
=======

`-j` 调用`gzip`

>>>>>>> 36188af5cf7fcf0a981f06028cbd6182802f2aab:_posts/2014-01-13-config-ubuntu-dev.md
`-Z` 调用`compress`

## 安装 Sublime Text 2

``` sh
$ sudo add-apt-repository ppa:webupd8team/sublime-text-2
$ sudo apt-get update
$ sudo apt-get install sublime-text
# or dev version
# sudo apt-get install sublime-text-dev
```

### 1. Sublime Text Package manage

``` python
import urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp) if not os.path.exists(ipp) else None;open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
```

### 2. Sublime Text Short

``` sh
Ctrl+Shift+P # 打开命令面板
Ctrl+P # 搜索项目中的文件
Ctrl+G # 跳转到第几行
Ctrl+W # 关闭当前打开文件
Ctrl+Shift+W # 关闭所有打开文件
Ctrl+Shift+V # 粘贴并格式化
Ctrl+D # 选择单词，重复可增加选择下一个相同的单词
Ctrl+L # 选择行，重复可依次增加选择下一行
Ctrl+Shift+L # 选择多行
Ctrl+Shift+Enter # 在当前行前插入新行
Ctrl+X # 删除当前行
Ctrl+M # 跳转到对应括号
Ctrl+U # 软撤销，撤销光标位置
Ctrl+J # 选择标签内容
Ctrl+F # 查找内容
Ctrl+Shift+F # 查找并替换
Ctrl+H # 替换
Ctrl+R # 前往 method
Ctrl+N # 新建窗口
Ctrl+K+B # 开关侧栏
Ctrl+Shift+M # 选中当前括号内容，重复可选着括号本身
Ctrl+F2 # 设置/删除标记
Ctrl+/ # 注释当前行
Ctrl+Shift+/ # 当前位置插入注释
Ctrl+Alt+/ # 块注释，并Focus到首行，写注释说明用的
Ctrl+Shift+A # 选择当前标签前后，修改标签用的
F11 # 全屏
Shift+F11 # 全屏免打扰模式，只编辑当前文件
Alt+F3 # 选择所有相同的词
Alt+. # 闭合标签
Alt+Shift+数字 # 分屏显示
Alt+数字 # 切换打开第N个文件
Shift+右键拖动 # 光标多不，用来更改或插入列内容
鼠标的前进后退键可切换Tab文件
按Ctrl，依次点击或选取，可需要编辑的多个位置
按Ctrl+Shift+上下键，可替换行
```

### 3. Some Package

```
Emmet
SideBarEnhancements
Syntax Highlighting for Sass
```

更多：[http://www.webupd8.org/2011/03/sublime-text-2-ubuntu-ppa.html](http://www.webupd8.org/2011/03/sublime-text-2-ubuntu-ppa.html)

Sublime Text 2 不能输入中文
