---
title: CSS水平/垂直居中的方式
date: 2016-07-17 23:09:45
tags:
- CSS
---
#### 水平居中：

- margin: 0 auto;
- display: inline/inline-block + text-align: center
- margin: 0 calc(50% - width/2 px);

#### 垂直居中：
文本：  

1. 父元素height == line-height

div/img：

1. 父元素 height == line-height  子元素 vertical-align: middle;
2. 添加

```css
.Absolute-Center {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
}
``` 