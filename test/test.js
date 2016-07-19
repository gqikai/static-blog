/**
 * Created by gaoqikai on 7/19/16.
 */
'use strict';

let content = "---\
title: 使用单引号还是双引号？\
date: 2016-07-17 23:06:35\
tags:\
    - CSS\
    - JS\
    - HTML\
---\
\
**js中用单引号  html里用双引号**\
";
let header = content.split('---')[1];
let regTitle = /title:\s*(.*)date:/;
let title = regTitle.exec(header)[1];
let regDateAndTime = /date:\s*(\d{4}-\d{2}-\d{2}\s*\d{2}:\d{2}:\d{2})/;
let dateAndTime = regDateAndTime.exec(content)[1];
let tags = header.split('tags:')[1];
let regTag = /\b[a-z]+\b/gi;
let arrTag = tags.match(regTag);
let id = new Date(dateAndTime).getTime();
console.log(index);