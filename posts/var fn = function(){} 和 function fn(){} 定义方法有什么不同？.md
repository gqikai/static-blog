---
title: var fn = function(){} 和 function fn(){} 定义方法有什么不同？
date: 2016-07-17 22:47:48
tags:
- JS
---
`var fn= function(){}` 和 `function fn(){}`作用是一样的，

`var fn= function(){}`是匿名函数

```javascript
var a = function() {
    console.log('a');
}
function b() {
    console.log('b');
}
console.log(a.prototype.constructor);//[Function]
console.log(b.prototype.constructor);//[Function: b]
```
脚本会优先加载function xx(){}、变量方式声明则按顺序。