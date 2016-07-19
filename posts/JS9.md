---
title: JS中的匿名函数的用法及优缺点
date: 2016-07-17 22:51:36
tags:
- JS
---
匿名函数可以有效的保证在页面上写入Javascript，而不会造成全局变量的污染。
这在给一个不是很熟悉的页面增加Javascript时非常有效，也很优美。

### 一、什么是匿名函数？
在Javascript定义一个函数一般有如下三种方式：

1. 函数关键字(function)语句：
function fnMethodName(x){alert(x);}
2. 函数字面量(Function Literals)：
var fnMethodName = function(x){alert(x);}
3. Function()构造函数：
var fnMethodName = new Function('x','alert(x);')
上面三种方法定义了同一个方法函数fnMethodName，

第1种就是最常用的方法，后两种都是把一个函数复制给变量fnMethodName，而这个函数是没有名字的，即匿名函数。
实际上，相当多的语言都有匿名函数。
### 二、函数字面量和Function()构造函数的区别

虽然函数字面量是一个匿名函数，但语法允许为其指定任意一个函数名（指定函数名后，函数就不再是匿名函数），当写递归函数时可以调用它自己，使用Function()构造函数则不行。

```
var f = function fact(x) { if (x < = 1) return 1; else return x*fact(x-1); };
```
Function()构造函数允许运行时Javascript代码动态的创建和编译。在这个方式上它类似全局函数eval()。

Function()构造函数每次执行时都解析函数主体，并创建一个新的函数对象。所以当在一个循环或者频繁执行的函数中调用Function()构造函数的效率是非常低的。相反，函数字面量却不是每次遇到都重新编译的。

用Function()构造函数创建一个函数时并不遵循典型的作用域，它一直把它当作是顶级函数来执行。

```javascript
var y = "global";
function constructFunction() {
var y = "local";
return new Function("return y"); // 无法获取局部变量
}
alert(constructFunction()()); // 输出 “global”
```
和函数关键字定义相比Function()构造器有自己的特点且要难以使用的多，
所以这项技术通常很少使用。

而函数字面量表达式和函数关键字定义非常接近。

考虑前面的区别，虽然有消息说字面量的匿名函数在OS X 10.4.3下的某些webkit的引擎下有bug，但我们平常所说的匿名函数均指采用函数字面量形式的匿名函数。
### 三、匿名函数的代码模式
错误模式：其无法工作，浏览器会报语法错。
```function(){ alert(1); }();```

函数字面量：首先声明一个函数对象，然后执行它。`(function(){ alert(1); } ) ( );`

优先表达式：
`( function(){ alert(2); } ( ) );`

void操作符：
`void function(){ alert(3); }()`

这三种方式是等同的，hedger wang因为个人原因比较喜欢第3种，而在实际应用中我看到的和使用的都是第1种。
四、匿名函数的应用

《Javascript的一种模块模式》中的第一句话就是“全局变量是魔鬼”。  
配合var关键字，匿名函数可以有效的保证在页面上写入Javascript，而不会造成全局变量的污染。  
这在给一个不是很熟悉的页面增加Javascript时非常有效，也很优美。  
实际上，YUI以及其相应的范例中大量使用匿名函数，其他的Javascript库中也不乏大量使用。  
Javascript的函数式编程(functional programming)的基石。  
具体请看《用函数式编程技术编写优美的 JavaScript》和《函数式JavaScript编程指南》。