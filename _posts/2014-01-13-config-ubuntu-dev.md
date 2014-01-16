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

`-j` 调用`bzip2`

`-Z` 调用`compress`