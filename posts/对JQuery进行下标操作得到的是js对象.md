---
title: 对JQuery进行下标操作得到的是js对象
date: 2016-07-17 22:50:13
tags:
- JS
- jQuery
---
对JQuery对象使用下标操作符会得到相对应的Js对象。这才意识到JQuery对象和Js对象间的区别。于是搜了下JQuery对象和Js对象相互转化的方法。

JQuery对象转换成Js对象：

li[0] 或者 lis.get(0);

Js对象转转JQuery对象：

$(lis[0])

之所以JQuery对象转换成Js对象用的是取下标操作，是因为通过JQuery查询获得的是对象集，是一个集合。

$(‘li’).eq(0)得到的是jquery对象