---
layout: post
title: "sublime text custom settings"
date: 2014-01-16 22:46:33
description: "my personal settings of sublime text."
category: tools
tags: [sublime]

develop: false
---
## install Sublime Text 2

``` sh
$ sudo add-apt-repository ppa:webupd8team/sublime-text-2
$ sudo apt-get update
$ sudo apt-get install sublime-text
# or dev version
# sudo apt-get install sublime-text-dev
```

## 1. Sublime Text Package manage

`Sublime Text 2`

``` python
import urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp) if not os.path.exists(ipp) else None;open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
```

`Sublime Text 3`

```python
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

## 2. Sublime Text Short



`Ctrl+Shift+P` 打开命令面板

`Ctrl+P` 搜索项目中的文件

`Ctrl+G` 跳转到第几行

`Ctrl+W` 关闭当前打开文件

`Ctrl+Shift+W` 关闭所有打开文件

`Ctrl+Shift+V` 粘贴并格式化

`Ctrl+D` 选择单词，重复可增加选择下一个相同的单词

`Ctrl+L` 选择行，重复可依次增加选择下一行

`Ctrl+Shift+L` 选择多行

`Ctrl+Shift+Enter` 在当前行前插入新行

`Ctrl+X` 删除当前行

`Ctrl+M` 跳转到对应括号

`Ctrl+U` 软撤销，撤销光标位置

`Ctrl+J` 选择标签内容

`Ctrl+F` 查找内容

`Ctrl+Shift+F` 查找并替换

`Ctrl+H` 替换

`Ctrl+R` 前往 method

`Ctrl+N` 新建窗口

`Ctrl+K+B` 开关侧栏

`Ctrl+Shift+M` 选中当前括号内容，重复可选着括号本身

`Ctrl+F2` 设置/删除标记

`Ctrl+/` 注释当前行

`Ctrl+Shift+/` 当前位置插入注释

`Ctrl+Alt+/` 块注释，并Focus到首行，写注释说明用的

`Ctrl+Shift+A` 选择当前标签前后，修改标签用的

`F11` 全屏

`Shift+F11` 全屏免打扰模式，只编辑当前文件

`Alt+F3` 选择所有相同的词

`Alt+.` 闭合标签

`Alt+Shift+数字` 分屏显示

`Alt+数字` 切换打开第N个文件

`Shift+右键拖动` 光标多不，用来更改或插入列内容

鼠标的前进后退键可切换Tab文件

按Ctrl，依次点击或选取，可需要编辑的多个位置

按Ctrl+Shift+上下键，可替换行

## 3. Some Package


1. `Emmet` edit html and css

2. `SideBarEnhancements` side bar

3. `Markdown extended` markdown syntax highlight

4. `Syntax Highlighting for Sass` sass syntax highlight

更多：[http://www.webupd8.org/2011/03/sublime-text-2-ubuntu-ppa.html](http://www.webupd8.org/2011/03/sublime-text-2-ubuntu-ppa.html)

Ubuntu 不能输入中文, ba liao!

## 4. my settings

``` json
{
    "bold_folder_labels": true,
    "color_scheme": "Packages/Color Scheme - Default/Solarized (Light).tmTheme",
    "detect_indentation": false,
    "draw_white_space": "all",
    "font_face": "monaco",
    "font_options":
    [
        "no_round"
    ],
    "font_size": 12,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "ignored_packages":
    [
        "Vintage"
    ],
    "open_files_in_new_window": false,
    "save_on_focus_lost": true,
    "show_tab_close_buttons": false,
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_automatic_white_space": false,
    "update_check": false,
    "use_simple_full_screen": true,
    "word_separators": "\\()\"':,;<>~!@%^&*|+=[]{}`~?",
    "word_wrap": true
}
```

### about the font face

1. Ubuntu

    ``` json
    {"font_face": "monaco"}
    ```

2. Mac

    need install

    ``` json
    {"font_face": "Consolas"}
    ```

3. Windows

    ``` json
    {"font_face": "Consolas"}
    ```