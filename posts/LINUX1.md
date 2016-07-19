---
title: www-data用户是干什么的？和WEB服务有什么关系？
date: 2016-07-18 11:19:53
tags:
- LINUX
- UBUNTU
---
在`debian/ubuntu`上，`www-data`是默认运行web服务的用户/组，一般在通过apt安装web服务程序时生成。搭建web服务的文件夹/文件一般要设置成www-data的。

不过，你也可以不用www-data，自己建一个新的用户和组，然后对apache/ngnix/lighttpd等web服务程序进行配置。不过这样比较麻烦。

如果是编译安装的，不会生成www-data用户/组，需要自己弄
