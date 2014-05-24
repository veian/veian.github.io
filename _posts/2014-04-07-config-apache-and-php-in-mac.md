---
layout: post
title: "config apache and php in Mac"
date: 2014-04-07 15:00:29
description: ""
category: 
tags: []
---

Command to start|stop|restart apache

```bash
sudo apachectl start
sudo apachectl stop
sudo apachectl restart
```

The default DocumentRoot:

```bash
DocumentRoot "/Library/WebServer/Documents"
```
Edit `/etc/apache2/httpd.conf`

```bash
LoadModule php5_module libexec/apache2/libphp5.so
```