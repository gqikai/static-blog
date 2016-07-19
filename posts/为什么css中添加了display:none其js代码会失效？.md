---
title: 为什么css中添加了display:none其js代码会失效？
date: 2016-07-18 09:13:30
tags:
- CSS
- JS
---
`display：none`以后，元素相当于已经不存在了，如果你有针对该元素的js代码，肯定无法获取到对象，自然代码就会失效。  
`display：none`与`visibility：hidden`不同，前者表示元素已经不在文档流中，不占据任何位置，而后者只是隐藏，元素依然在文档流中，占据着位置。