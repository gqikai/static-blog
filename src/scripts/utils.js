/**
 * Created by gaoqikai on 7/19/16.
 */
var RainyDay = require('./rainyday').RainyDay;

console.log(RainyDay);
function createXMLHTTPRequest() {
    //1.创建XMLHttpRequest对象
    //这是XMLHttpReuquest对象无部使用中最复杂的一步
    //需要针对IE和其他类型的浏览器建立这个对象的不同方式写不同的代码
    var xmlHttpRequest;
    if (window.XMLHttpRequest) {
        //针对FireFox，Mozillar，Opera，Safari，IE7，IE8
        xmlHttpRequest = new XMLHttpRequest();
        //针对某些特定版本的mozillar浏览器的BUG进行修正
        if (xmlHttpRequest.overrideMimeType) {
            xmlHttpRequest.overrideMimeType("text/xml");
        }
    } else if (window.ActiveXObject) {
        //针对IE6，IE5.5，IE5
        //两个可以用于创建XMLHTTPRequest对象的控件名称，保存在一个js的数组中
        //排在前面的版本较新
        var activexName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        for (var i = 0; i < activexName.length; i++) {
            try {
                //取出一个控件名进行创建，如果创建成功就终止循环
                //如果创建失败，回抛出异常，然后可以继续循环，继续尝试创建
                xmlHttpRequest = new ActiveXObject(activexName[i]);
                if (xmlHttpRequest) {
                    break;
                }
            } catch (e) {
            }
        }
    }
    return xmlHttpRequest;
}
function doGet(URL, type) {
    var req = createXMLHTTPRequest();
    if (req) {
        req.open("GET", URL, true);
        req.setRequestHeader("Content-Type", "text/html;charset:utf-8;");
        req.setRequestHeader("Accept", "text/html,application/xml,application/json");

        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    document.querySelector('#page-contents').innerHTML = req.responseText;
                    switch (type) {
                        case 'content':
                        {
                            var contents = document.querySelectorAll('.content li a:nth-of-type(1)');
                            for (var i = 0; i < contents.length; i++) {
                                contents[i].onclick = function () {
                                    getArticle(this.getAttribute('data-url'));
                                }
                            }
                            break;
                        }
                        case 'article':
                        {
                            document.querySelector('.backicon i').onclick = function () {
                                getContent();
                            }
                            break;
                        }
                    }
                } else {
                    console.log('error');
                }
            }
        }
        req.send(null);
    }
}
var getContent = function () {
    doGet('content.html', 'content');
}
var getArticle = function (URL) {
    console.log('get article:' + URL);
    doGet(URL, 'article');
}

function initRain() {
    var oHomePage = document.querySelector('#page-home');
    var animating = false;
    var image = document.getElementById('background');
    image.onload = function () {
        var engine = new RainyDay({
            image: this,
            parentElement: document.querySelector('#page-home')
        });
        engine.trail = engine.TRAIL_SMUDGE;
        engine.rain([[4, 6, 0.5]], 33);


        var oCanvas = document.getElementsByTagName('canvas')[0];
        oCanvas.style.transition = 'all 0.5s ease-out';

        var deltaWidth = 500;
        var deltaHeight = 0;

        var canvasHeight = 0;
        var canvasWidth = 0;

        var windowHeight = 0;
        var windowWidth = 0;


        oHomePage.onmousemove = function (event) {
            if (animating) {
                return;
            } else {
                if (window.innerHeight != windowHeight || window.innerWidth != windowWidth) {
                    windowHeight = window.innerHeight;
                    windowWidth = window.innerWidth;
                    if (windowHeight / windowWidth > 1120 / 1673) {
                        oCanvas.style.height = windowHeight + 300 + 'px';
                    } else {
                        oCanvas.style.width = windowWidth + 500 + 'px';
                    }

                    var computedHeight = document.defaultView.getComputedStyle(oCanvas, null).height;
                    var computedWidth = document.defaultView.getComputedStyle(oCanvas, null).width;

                    canvasHeight = Number.parseInt(computedHeight.slice(0, computedHeight.length - 1));
                    canvasWidth = Number.parseInt(computedWidth.slice(0, computedWidth.length - 1));

                    deltaHeight = canvasHeight - windowHeight;
                }

                animating = true;
                oCanvas.style.left = event.clientX / windowWidth * -deltaWidth + 'px';
                oCanvas.style.top = event.clientY / windowHeight * -deltaHeight + 'px';
                setTimeout(function () {
                    animating = false;
                }, 200);
            }

        }

    };
    image.crossOrigin = 'anonymous';
    image.src = 'images/bg.jpg';
}

module.exports = {
    getContent: getContent,
    getArticle: getArticle,
    initRain: initRain
}