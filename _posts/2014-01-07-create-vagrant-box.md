---
layout: post
title:  "Welcome to Jekyll!"
date:   2014-01-07 22:27:46
categories: jekyll update
---

## 在创建Vagrant box时遇到的一些问题

### 更改系统默认编辑器

```
sudo update-alternatives --config editor
```

### 编辑`sudoer`文件

```
sudo visudo
```

### 安装指定版本

```
sudo apt-get install openssh-client=1:5.3p1-3ubuntu3
```

### `ruby`的淘宝镜像
[http://ruby.taobao.org/](http://ruby.taobao.org/)

```
$ gem sources --remove https://rubygems.org/
$ gem sources -a http://ruby.taobao.org/
$ gem sources -l
*** CURRENT SOURCES ***
http://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install rails
```

### 网易的`ubuntu`镜像

```
deb http://mirrors.163.com/ubuntu/ precise main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse
```

## 创建 vagrant box

### 一、使用Orical VM Virtual Box安装服务器版的`ubuntu`，并确保以下几点 ：

```
Hostname: [自定义]，e.g. vagrant-ubuntu
Domain: [自定义]，e.g. vagrantup.com
Root Password: [自定义]，e.g. vagrant
Main account login: [自定义]，e.g. vagrant
Main account Password: [自定义]，e.g. vagrant
```

### 二、安装成功之后，在虚拟机内做一些预备设置

1. 安装基本包，`git`支持：

	```
	sudo apt-get -y install vim git-core
	```

2. 创建管理员组

	```
	sudo groupadd admin
	```

3. 将当前登录用户加入`admin`组

	```
	sudo usermod -G admin vagrant
	```

4. 编辑`sudoers`文件，新增以下内容

	```
	Defaults env_keep="SSH_AUTH_SOCK"
	%admin ALL=NOPASSWD: ALL
	```

	最后看上去像这样：

	```
	#
	# This file MUST be edited with the 'visudo' command as root.
	#
	# Please consider adding local content in /etc/sudoers.d/ instead of
	# directly modifying this file.
	#
	# See the man page for details on how to write a sudoers file.
	#
	Defaults        env_reset
	Defaults        mail_badpass
	Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
	Defaults        env_keep="SSH_AUTH_SOCK"
	# Host alias specification
	# User alias specification
	# Cmnd alias specification
	# User privilege specification
	root    ALL=(ALL:ALL) ALL
	# Members of the admin group may gain root privileges
	# %admin ALL=(ALL) ALL
	%admin ALL=NOPASSWD: ALL
	# Allow members of group sudo to execute any command
	%sudo   ALL=(ALL:ALL) ALL
	# See sudoers(5) for more information on "#include" directives:
	#includedir /etc/sudoers.d
	```

5. 安装`ruby`，脚本

	```
	#!/usr/bin/env bash
	sudo apt-get -y update
	apt-get -y install build-essential zlib1g-dev libssl-dev libreadline6-dev libyaml-dev
	cd /tmp
	wget http://ruby.taobao.org/mirrors/ruby/ruby-2.1.0.tar.gz
	tar -zxvf ruby-2.1.0.tar.gz
	cd ruby-2.1.0.tar.gz
	./configure --prefix=/usr/local
	make
	sudo make install
	gem install chef ruby-shadow -V
	```

6. 安装`puppet`

	```
	sudo apt-get -y install puppet puppetmaster
	```

7. 安装`openssh-server`

	```
	sudo apt-get -y install openssh-server
	```

8. 安装vagrant's public keys

	```
	mkdir ~/.ssh/
	chmod 0755 ~/.ssh
	cd ~/.ssh
	wget http://github.com/mitchellh/vagrant/raw/master/keys/vagrant
	wget http://github.com/mitchellh/vagrant/raw/master/keys/vagrant.pub
	mv vagrant.pub authorized_keys
	chmod 0644 authorized_keys
	```

9. 安装Virtual Box的增强功能

	i. 先安装`dkms`和`reboot`

	```
	sudo apt-get -y install linux-headers-$(uname -r) build-essential dkms
	sudo reboot

	```

	i. 重启之后，点击Virtual Box [设备]上的[安装增强功能]，接下来需要mount virtual CD

	```
	sudo apt-get -y install linux-headers-$(uname -r) build-essential
	mkdir /media/cdrom
	mount /dev/cdrom /media/cdrom
	sudo sh /media/cdrom/VBoxLinuxAdditions.run
	```

10. 清空缓存

	```
	sudo apt-get clean
	```


### 三、创建vagrant box

```
vagrant package --base vagrant-precise32
# 最后一个参数为虚拟机的文件名，第一次还以为是需要指定创建的文件名，生成的文件名是package.box
```


### 四、使用新建的box

```
vagrant box add vagrant-precise32 package.box
vagrant init vagrant-precise32
vagrant up
```

大功告成！happy！

