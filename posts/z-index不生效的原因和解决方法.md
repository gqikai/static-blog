---
title: z-index不生效的原因和解决方法
date: 2016-07-18 09:15:22
tags:
- CSS
---
运行下面代码   

``` html
<div style="z-index:4;width:560px;background-color:Aqua; ">不生效 <a href="http://jihua.cnblogs.com">jihua.cnblogs.com</a></div> 
<div style="z-index:3;width:360px;background-color:Fuchsia; position:absolute;">有效 <a href="http://jihua.cnblogs.com">jihua.cnblogs.com</a></div> 
<div style="width:760px;background-color:Silver;">底部</div>
```

<div style="z-index:4;width:560px;background-color:Aqua; ">不生效 <a href="http://jihua.cnblogs.com">jihua.cnblogs.com</a></div> <div style="z-index:3;width:360px;background-color:Fuchsia; position:absolute;">有效 <a href="http://jihua.cnblogs.com">jihua.cnblogs.com</a></div> <div style="width:760px;background-color:Silver;">底部</div>

`z-index` 仅能在定位元素上生效，所以给`div`的`style`加上`z-index:3`的同时，要记得加上`position:absolute;`或者`position:fixed;`，才能生效。