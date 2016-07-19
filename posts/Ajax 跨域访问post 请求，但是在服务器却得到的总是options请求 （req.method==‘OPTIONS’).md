---
title: Ajax 跨域访问post 请求，但是在服务器却得到的总是options请求 （req.method==‘OPTIONS’)
date: 2016-07-17 22:43:53
tags:
- JS
---
原因有俩：

1. 跨域
2. 此post请求的 content-type不是one of the “application/x-www-form-urlencoded,multipart/form-data, or text/plain”

解决办法：

添加代码

``` javascript
if (req.method === 'OPTIONS') {
console.log('!OPTIONS');
var headers = {};
// IE8 does not allow domains to be specified, just the *
// headers["Access-Control-Allow-Origin"] = req.headers.origin;
headers["Access-Control-Allow-Origin"] = "*";
headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
headers["Access-Control-Allow-Credentials"] = false;
headers["Access-Control-Max-Age"] = '86400'; // 24 hours
headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
res.writeHead(200, headers);
res.end();
} else {
//...other requests
}
```