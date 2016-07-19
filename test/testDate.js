/**
 * Created by gaoqikai on 7/19/16.
 */
'use strict';

//定义一个对象数组 
var data = [ { title: '使用单引号还是双引号？',
    dateAndTime: '2016-07-17 23:06:35',
    id: 1468767995000,
    tags: [ 'CSS', 'JS', 'HTML' ] },
    { title: 'HTML语义化',
        dateAndTime: '2016-07-17 23:04:56',
        id: 1468767896000,
        tags: [ 'CSS' ] },
    { title: '使用单引号还是双引号？',
        dateAndTime: '2016-07-17 23:06:35',
        id: 1468767995000,
        tags: [ 'CSS', 'JS', 'HTML' ] },
    { title: 'CSS水平/垂直居中的方式',
        dateAndTime: '2016-07-17 23:09:45',
        id: 1468768185000,
        tags: [ 'CSS' ] },
    { title: '为什么css中添加了display:none其js代码会失效？',
        dateAndTime: '2016-07-18 09:13:30',
        id: 1468804410000,
        tags: [ 'CSS', 'JS' ] },
    { title: 'z-index不生效的原因和解决方法',
        dateAndTime: '2016-07-18 09:15:22',
        id: 1468804522000,
        tags: [ 'CSS' ] },
    { title: 'overflow:hidden 为什么失效',
        dateAndTime: '2016-07-18 09:18:29',
        id: 1468804709000,
        tags: [ 'CSS' ] },
    { title: 'display各标签默认值',
        dateAndTime: '2016-07-18 09:20:57',
        id: 1468804857000,
        tags: [ 'CSS' ] },
    { title: 'margin学习笔记/display:block/inline 的各种元素',
        dateAndTime: '2016-07-18 09:53:45',
        id: 1468806825000,
        tags: [ 'CSS' ] },
    { title: '常见的空元素',
        dateAndTime: '2016-07-18 11:05:59',
        id: 1468811159000,
        tags: [ 'HTML' ] },
    { title: '跨域的几种解决方案',
        dateAndTime: '2016-07-17 17:59:27',
        id: 1468749567000,
        tags: [ 'JS' ] },
    { title: 'js中 整数、浮点数的范围',
        dateAndTime: '2016-07-17 23:00:14',
        id: 1468767614000,
        tags: [ 'JS' ] },
    { title: 'JavaScript的数据类型、数据类型判断',
        dateAndTime: '2016-07-17 20:48:34',
        id: 1468759714000,
        tags: [ 'JS' ] },
    { title: 'JavaScript变量提升',
        dateAndTime: '2016-06-17 17:59:27',
        id: 1466157567000,
        tags: [ 'JS' ] },
    { title: 'attachEvent 与 addEventListener的区别',
        dateAndTime: '2016-07-17 22:23:42',
        id: 1468765422000,
        tags: [ 'JS' ] },
    { title: 'JavaScript “==”和“===”运算符',
        dateAndTime: '2016-07-17 22:41:19',
        id: 1468766479000,
        tags: [ 'JS' ] },
    { title: 'Ajax 跨域访问post 请求，但是在服务器却得到的总是options请求 （req.method==‘OPTIONS’)',
        dateAndTime: '2016-07-17 22:43:53',
        id: 1468766633000,
        tags: [ 'JS' ] },
    { title: 'var fn = function(){} 和 function fn(){} 定义方法有什么不同？',
        dateAndTime: '2016-07-17 22:47:48',
        id: 1468766868000,
        tags: [ 'JS' ] },
    { title: '对JQuery进行下标操作得到的是js对象',
        dateAndTime: '2016-07-17 22:50:13',
        id: 1468767013000,
        tags: [ 'JS', 'jQuery' ] },
    { title: 'JS中的匿名函数的用法及优缺点',
        dateAndTime: '2016-07-17 22:51:36',
        id: 1468767096000,
        tags: [ 'JS' ] },
    { title: 'www-data用户是干什么的？和WEB服务有什么关系？',
        dateAndTime: '2016-07-18 11:19:53',
        id: 1468811993000,
        tags: [ 'LINUX', 'UBUNTU' ] },
    { title: 'mac:在当前文件夹打开terminal终端',
        dateAndTime: '2016-07-18 11:29:11',
        id: 1468812551000,
        tags: [ 'LINUX', 'OSX' ] } ]
//定义一个比较器 
function compare(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 < value1) {
            return -1;
        }
        else if (value2 > value1) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
//使用方法 
data.sort(compare("id"));
console.log(data);