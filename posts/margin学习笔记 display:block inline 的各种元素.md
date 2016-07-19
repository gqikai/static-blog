---
title: margin学习笔记/display:block/inline 的各种元素
date: 2016-07-18 09:53:45
tags:
- CSS
---
根据规范，一个盒子如果没有上补白(padding-top)和上边框(border-top)，那么这个盒子的上边距会和其内部文档流中的第一个子元素的上边距重叠。

block元素（块元素）大致有：
```
P|H1|H2|H3|H4|H5|H6|UL|OL|PRE| DL | DIV | NOSCRIPT | BLOCKQUOTE | FORM | HR | TABLE | FIELDSET | ADDRESS
```
(随着html5标准的推进，一些元素将被废除，而一些新的元素将被引入)注意的是并非所有的block元素的默认display属性都是block，像table这种display:table的元素也是block元素。

inline元素（内联元素）大致有：
```
PCDATA（即文本）| TT | I | B | BIG | SMALL|EM | STRONG | DFN | CODE |SAMP | KBD | VAR | CITE | ABBR | ACRONYM|A | IMG | OBJECT | BR | SCRIPT | MAP | Q | SUB | SUP | SPAN | BDO|INPUT | SELECT | TEXTAREA | LABEL | BUTTON
```
其中有类特殊的元素：如`img|input|select|textarea|button|label`等，他们被称为可置换元素（Replaced element）。他们区别一般inline元素（相对而言，称non-replaced element）是：这些元素拥有内在尺寸(intrinsic dimensions),他们可以设置`width/height`属性。他们的性质同设置了`display:inline-block`的元素一致。

`margin-top`和`margin-bottom`对内联元素（对行）的高度没有影响，并且由于边界效果(margin效果)是透明的，他也没有任何的视觉影响。