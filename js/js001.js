//alert 部分
let oBtn_alert = document.getElementById("btn_alert");
oBtn_alert.onclick = function(){
	alert("蹦！");
}
//confirm 部分
let oBtn_confirm = document.getElementById("btn_confirm");
oBtn_confirm.onclick = function(){
	let islike = confirm("你喜欢这个网站吗？");
	if (islike) alert("谢谢支持！");
	else alert("我会继续努力的！");
}
//confirm 部分
let oBtn_prompt = document.getElementById("btn_prompt");
oBtn_prompt.onclick = function(){
	let name = prompt("请问你的姓氏是什么？");
	alert(name+"先生/女士你好！");
}
