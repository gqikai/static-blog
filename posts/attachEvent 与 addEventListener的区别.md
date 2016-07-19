---
title: attachEvent 与 addEventListener的区别
date: 2016-07-17 22:23:42
tags:
- JS
---
### 一、适应的浏览器版本不同

`attachEvent`方法适用于`IE`    `addEventListener`方法适用于`Mozilla/Webkit`


### 二、针对的事件不同

`attachEvent`中的事件带`on`   而`addEventListener`中的事件不带`on`


### 三、参数的个数不同

`attachEvent`方法两个参数：

- 第一个参数为事件名称
- 第二个参数为接收事件处理的函数； 

`addEventListener` 有三个参数：

- 第一个参数表示事件名称（不含 on，如 "click"）；
- 第二个参数表示要接收事件处理的函数；
- 第三个参数是一个bool值，一般为false
第三个参数叫做useCapture，是一个boolean值，就是true or false，如果送出true的话就是瀏览器会使用Capture方式，false的话是Bubbling，只有在特定状况下才会有影响，通常建议是false，而会有影响的情形是目标元素(target element)有祖先元素(ancestor element)，而且也有同样的事件对应函数，我想，看图会比较清楚。
![就是红色div包住了蓝色div](http://files.jb51.net/file_images/article/201512/ex.png)


像这张图所显示的，我的范例有两层div元素，而且都设定有click事件，一般来说，如果我在内层蓝色的元素上click不只会触发蓝色元素的click事件，还会同时触发红色元素的click事件，而useCapture这个参数就是在控制这时候两个click事件的先后顺序。如果是false，那就会使用bubbling，他是从内而外的流程，所以会先执行蓝色元素的click事件再执行红色元素的click事件，如果是true，那就是capture，和bubbling相反是由外而内，会先执行红色元素的click事件才执行蓝色元素的click事件。附上两个范例，capture和bubbling，两个档案只有差在此一参数不同，可以发现事件的发生顺序不一样了。

那如果不同层的元素使用的useCapture不同呢？就是会先从最外层元素往目标元素寻找设定为capture的事件，到达目标元素执行目标元素的事件后，再寻原路往外寻找设定为bubbling的事件。


### 四、执行事件的优先级不同
``` html
<div id="outDiv">
   <div id="middleDiv">
     <div id="inDiv">请在此点击鼠标。</div>
   </div>
</div>

<div id="info"></div>
```
``` javascript
var outDiv = document.getElementById("outDiv");
var middleDiv = document.getElementById("middleDiv");
var inDiv = document.getElementById("inDiv");
var info = document.getElementById("info");

outDiv.addEventListener("click", function () { info.innerHTML += "outDiv" + "<br>"; }, false);
middleDiv.addEventListener("click", function () { info.innerHTML += "middleDiv" + "<br>"; }, false);
inDiv.addEventListener("click", function () { info.innerHTML += "inDiv" + "<br>"; }, false);
```
上述是我们测试的代码，根据 info 的显示来确定触发的顺序，有三个 addEventListener，而 useCapture 可选值为 true 和 false，所以 2*2*2，可以得出 8 段不同的程序。

全为 false 时，触发顺序为：inDiv、middleDiv、outDiv；
全为 true 时，触发顺序为：outDiv、middleDiv、inDiv；
outDiv 为 true，其他为 false 时，触发顺序为：outDiv、inDiv、middleDiv；
middleDiv 为 true，其他为 false 时，触发顺序为：middleDiv、inDiv、outDiv；
……
最终得出如下结论：

true 的触发顺序总是在 false 之前；
如果多个均为 true，则外层的触发先于内层；
如果多个均为 false，则内层的触发先于外层。
下面提供全部代码，您可以更改其中的 true、false 值，来进行测试。注意，不适用于 IE

### 五、对this的引用不同

attachEvent绑定的函数,没有绑定this引用

``` javascript
function doIt(){
    alert(this);
}
```
然后我们在页面中处理如下：
首先做一个按钮：`<button id="btn">按钮</button>`，然后为该按钮绑定事件onclick如下：

```javascript
<script language="javascript" type="text/javascript">
document.getElementById("btn4").attachEvent("onclick",doIt);
</script>
```
经过这种处理之后，`doIt`方法中的`this`不代表`button`,但是使用

- `document.getElementById("btn4").onclick = doIt`时`this`指向的就是`btn`代表的`button`了

- `document.getElementById("btn4").addEventListener('click',doSomething,false)；`这样也可以把`this`绑定进去

最后写一个兼容所有浏览器的监听事件方法如下：

```javascript
//兼容所有浏览器的attachEvent方法
if(!window.attachEvent && window.addEventListener)
{
	Window.prototype.attachEvent = HTMLDocument.prototype.attachEvent=
	HTMLElement.prototype.attachEvent=function(en, func, cancelBubble)
	{
		var cb = cancelBubble ? true : false;
		this.addEventListener(en.toLowerCase().substr(2), func, cb);
	};
}
```