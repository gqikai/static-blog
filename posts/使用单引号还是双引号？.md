---
title: 使用单引号还是双引号？
date: 2016-07-17 23:06:35
tags:
- CSS
- JS
- HTML
---

**js中用单引号  html里用双引号**

一个主要的原因嘛，这个也是习惯问题（当然，选择了一种以后就要全部统一哦）  
首先HTML 是这样的：

```html
<div class="zu-global-notify" id="zh-global-message">
```

前端嘛，不管是 js 还是 php，都免不了 HTML。一般 HTML 习惯是属性都用双引号。那么当遇到 js 和 php 里要用 HTML string 的时候，就是这样：

```
// js
var str = '<div class="zu-global-notify" id="zh-global-message">';

// php
$str = '<div class="zu-global-notify" id="zh-global-message">';
$str2 = '<div class="'.$someClass.'" id="zh-global-message">';
```

然后也有少按 shift 的原因在里面，毕竟 js 里没区别，在 php 里要用变量也都是 「'str'.$var.'ing'」搞定。

P.S. 前端里面（可能我看英文圈子比较多，国内不详），用 ' 应该是随大流的习惯，也就是说，遇到代码风格一致的可能性会高一些，这样写代码也省一点事儿。