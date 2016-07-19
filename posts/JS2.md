---
title: JavaScript的数据类型、数据类型判断
date: 2016-07-17 20:48:34
tags:
 - JS
---
## 数据类型

JavaScript中有5种简单数据类型（也称为基本数据类型）：`Undefined、Null、Boolean、Number和String`。

还有1种复杂数据类型——Object，Object本质上是由一组无序的名值对组成的。
 

 
## 判断数据类型的几种方法：
1. typeof
2. instanceof
3. constructor
4. Object.prototype.toString.call
5. 特征判断

### 1.typeof
　　介于JavaScript是松散类型的，因此需要有一种手段来检测给定变量的数据类型——typeof就是负责提供这方面信息的操作符。对一个值使用typeof操作符可能返回下列某个字符串：

- "undefined"——如果这个值未定义；
- "boolean"——如果这个值是布尔值；
- "string"——如果这个值是字符串；
- "number"——如果这个值是数值；
- "object"——如果这个值是对象或null；
- "function"——如果这个值是函数；

了解js的都知道， 有个`typeof`用来判断各种数据类型,有两种写法：`typeof   xxx`   ,`typeof(xxx)`

如下实例：

| typeof    |    输出  | 
| :-------- | --------:| 
|     2     |    number|
|   null    | object   |
| {}        |    object|
|  []       | object   |
|(function(){}) |  function|
|undefined  | undefined|
|'222'      |  string  |
|  true     |  boolean |

这里面包含了js里面的五种数据类型  number   string    boolean   undefined     object和函数类型 function

看到这里你肯定会问了：我怎么去区分对象，数组和null呢?

接下来我们就用到另外一个利器： 
### 2.Object.prototype.toString.call

这是对象的一个原生原型扩展函数,用来更精确的区分数据类型。

我们来试试这个玩儿意儿：

``` javascript
var   gettype=Object.prototype.toString

gettype.call('aaaa')        输出      [object String]

gettype.call(2222)         输出      [object Number]

gettype.call(true)          输出      [object Boolean]

gettype.call(undefined)  输出      [object Undefined]

gettype.call(null)                  输出   [object Null]

gettype.call({})                   输出   [object Object]

gettype.call([])                    输出   [object Array]
gettype.call(function(){})     输出   [object Function]
```

看到这里，刚才的问题我们解决了。

其实js 里面还有好多类型判断    
	  [object HTMLDivElement]     div 对象  , 
	     [object HTMLBodyElement]  body 对象    ,
	     [object Document] \(IE)或者  [object HTMLDocument]（firefox,google） ......各种dom节点的判断，这些东西在我们写插件的时候都会用到。
	     
可以封装的方法如下  ：

``` javascript
var gettype = Object.prototype.toString;

var utility = {
    isObj: function (o) {
        return gettype.call(o) == "[object Object]";
    },
    isArray: function (o) {
        return gettype.call(o) == "[object Array]";
    },

    isNULL: function (o) {
        return gettype.call(o) == "[object Null]";
    },

    isDocument: function () {
        return gettype.call(o) == "[object Document]" || "[object HTMLDocument]";
    }
}
........
```

### 3.instanceof

instance，故名思义，实例，例子，所以instanceof 用于判断一个变量是否某个对象的实例，是一个三目运算式---和typeof最实质上的区别
``` javascript
a instanceof b?alert("true"):alert("false")  //注意b值是你想要判断的那种数据类型，不是一个字符串，比如Array
```
举个栗子:

``` javascript
var a=[];
console.log(a instanceof Array) //返回true
```

### 4.constructor

在W3C定义中的定义：`constructor`属性返回对创建此对象的数组函数的引用

就是返回对象相对应的构造函数。从定义上来说跟instanceof不太一致，但效果都是一样的

如: 

``` javascript
(a instanceof Array)   //a是否Array的实例？true or false

(a.constructor == Array)  // a实例所对应的构造函数是否为Array? true or false
```
举个栗子：

``` javascript
function employee(name,job,born){
    this.name=name;
    this.job=job;
    this.born=born;
}

var bill=new employee("Bill Gates","Engineer",1985);
console.log(bill.constructor); //输出function employee(name, jobtitle, born){this.name = name; this.jobtitle = job; this.born = born;}
```

那么判断各种类型的方法就是:

``` javascript
console.log([].constructor == Array);
console.log({}.constructor == Object);
console.log("string".constructor == String);
console.log((123).constructor == Number);
console.log(true.constructor == Boolean);
```

较为严谨并且通用的方法：

``` javascript
function isArray(object){
    return object && typeof object==='object' &&
            Array == object.constructor;
}
```

！！注意：

使用instaceof和construcor,被判断的array必须是在当前页面声明的！比如，一个页面（父页面）有一个框架，框架中引用了一个页面（子页面），在子页面中声明了一个array，并将其赋值给父页面的一个变量，这时判断该变量，Array == object.constructor;会返回false；

原因：

1. array属于引用型数据，在传递过程中，仅仅是引用地址的传递。
2. 每个页面的Array原生对象所引用的地址是不一样的，在子页面声明的array，所对应的构造函数，是子页面的Array对象；父页面来进行判断，使用的Array并不等于子页面的Array；切记，不然很难跟踪问题！

### 5.特性判断法

以上方法均有一定的缺陷，但要相信人民大众的智慧是无所不能及的，我们可根据数组的一些特性来判断其类型

``` javascript
function isArray(object){
    return  object && typeof object==='object' &&   
            typeof object.length==='number' && 
            typeof object.splice==='function' &&   
            //判断length属性是否是可枚举的 对于数组 将得到false 
            !(object.propertyIsEnumerable('length'));
}
```




有length和splice并不一定是数组，因为可以为对象添加属性，而不能枚举length属性，才是最重要的判断因子。

ps: 在这里普及下 `propertyIsEnumerable` 方法：


`object. propertyIsEnumerable(proName)`



判断指定的属性是否可列举

备注：如果 `proName` 存在于 `object `中且可以使用一个 `For…In` 循环穷举出来，那么 `propertyIsEnumerable` 属性返回 `true`。如果 `object` 不具有所指定的属性或者所指定的属性不是可列举的，那么 `propertyIsEnumerable` 属性返回 `false`。

`propertyIsEnumerable` 属性不考虑原型链中的对象。

示例：

``` javascript
var a = new Array("apple", "banana", "cactus");
document.write(a.propertyIsEnumerable(1));
```