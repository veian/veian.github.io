---
layout: post
title: "add node to local path"
date: 2014-04-06 01:50:23
description: ""
category: 
tags: []
---

```bash
export PATH=$HOME/.nvm/v0.11.12/bin:$PATH
```

[https://www.digitalocean.com/community/articles/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps](https://www.digitalocean.com/community/articles/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps)

you will see something interesting. Nvm installs node.js inside your user's home directory. This is fine for development, but if you want to actually host node applications, you don't want to install the latest new version of node via nvm and discover that you've inadvertently caused your production node app (which can be incompatible with the latest node.js) to stop working. It's best to install one copy of node globally so that other users can access it, and use nvm to switch between your development versions. To do this, run the following command (entering your user's password at the prompt):

并未生效

```bash
n=$(which node);n=${n%/bin/node}; chmod -R 755 $n/bin/*; sudo cp -r $n/{bin,lib,share} /usr/local
```
