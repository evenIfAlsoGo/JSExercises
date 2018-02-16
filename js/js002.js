/**
 * Created by evenIfAlsoGo on 2017/11/008.
 */
//获取尺寸
let oBtn_getWindowInnerSize = document.getElementById("btn_getWindowInnerSize");
oBtn_getWindowInnerSize.onclick = function(){
	alert("浏览器窗口的内部高度是："+window.innerHeight+
		"\n浏览器窗口的内部宽度是："+window.innerWidth+
		"\n浏览器窗口的可用屏幕高度是："+window.screen.height+
		"\n浏览器窗口的可用屏幕宽度是："+window.screen.width);
}
//弹出窗口
let oBtn_openNewWindow = document.getElementById("btn_openNewWindow");
oBtn_openNewWindow.onclick = function(){
	window.open("http://evenIfAlsoGo.github.io");
}
//关闭当前窗口
let oBtn_closeThisWindow = document.getElementById("btn_closeThisWindow");
oBtn_closeThisWindow.onclick = function(){
	window.close();
}
//打开窗口
let myWindow;
let oBtn_openMyWindow = document.getElementById("btn_openMyWindow");
oBtn_openMyWindow.onclick = function () {
	myWindow = window.open('','','height=50,width=50');
	myWindow.document.write("<p>这是另一种弹出窗口</p>");
}
//移动窗口
let oBtn_moveWindow = document.getElementById("btn_moveWindow");
oBtn_moveWindow.onclick = function(){
	myWindow.moveTo(50,50);
	myWindow.resizeTo(300,200);
	myWindow.focus();
}

