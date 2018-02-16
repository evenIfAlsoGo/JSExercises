window.onload=function () {
	//模块1 鼠标经过 div 执行变窄变高变色 移出再恢复
	var oDiv1 = document.getElementById("div1");
	var oDiv1_style = oDiv1.style
	oDiv1.onmousemove = function () {
		oDiv1.style.background = 'red';
		oDiv1.style.height = '100px';
		oDiv1.style.width = '80%';
	}
	oDiv1.onmouseout = function () {
		oDiv1.style = oDiv1_style
	}

	//模块2 鼠标经过出现按钮
	var oDiv2_showBtn = document.getElementById("div2_showBtn");
	var oDiv2_hideBtn = document.getElementById("div2_hideBtn");
	oDiv2_hideBtn.style.display = "none"; //初始化 隐藏按钮
	oDiv2_showBtn.onmousemove = function  (){
		oDiv2_hideBtn.style.display  ='block';
	};
	oDiv2_showBtn.onmouseout = function  (){
		oDiv2_hideBtn.style.display  ='none';
	};

	//模块3 鼠标经过就显示弹出层
	var oDiv3_showDiv = document.getElementById("div3_showDiv");
	var oDiv3_hideDiv = document.getElementById("div3_hideDiv");
	oDiv3_hideDiv.style.display = "none"; //初始化 隐藏弹出层
	oDiv3_showDiv.onmousemove = function () {
		oDiv3_hideDiv.style.display  ='block';
	}
	oDiv3_showDiv.onmouseout = function  (){
		oDiv3_hideDiv.style.display  ='none';
	};
	
	//模块4 鼠标点击就显示弹出层
	var oDiv4_hideDiv = document.getElementById("div4_hideDiv");
	oDiv4_hideDiv.style.display = "none";  //初始化 隐藏弹出层
	document.getElementById("div4_showDiv").onclick = function () {
		oDiv4_hideDiv.style.display = oDiv4_hideDiv.style.display == 'none'?'block':'none';
	}
	
	//模块5 网页换肤
	var bodyBgc = document.body.style.backgroundColor;
	document.getElementById("div5_changeBgcToPink").onclick = function () {
		document.body.style.backgroundColor= "pink"
	}
	document.getElementById("div5_changeBgcToYellow").onclick = function () {
		document.body.style.backgroundColor= "yellow"
	}
	document.getElementById("div5_changeBGcToOriginal").onclick = function(){
		document.body.style.backgroundColor = bodyBgc	
	}
}

