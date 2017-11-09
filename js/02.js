window.onload=function () {
	//模块0 说明事件
	var oDiv0_btn_alert = document.getElementById("div0_btn_alert");
	oDiv0_btn_alert.onclick = function () {
		confirm("上联：一但重泥拦子路；下联：两岸夫子笑颜回");
	}

	//模块1 说明事件
	var oDiv1_btn_alert = document.getElementById("div1_btn_alert");
	oDiv1_btn_alert.onclick = function () {
		alert("弹出窗口");
	}
	
	//模块2 移入移出
	var oDiv2_p_showBtn = document.getElementById("div2_p_showBtn");
	var oDiv2_btn_hide = document.getElementById("div2_btn_hide");
	oDiv2_btn_hide.style.display = "none"; //初始化 隐藏按钮
	oDiv2_p_showBtn.onmousemove = function  (){
		oDiv2_btn_hide.style.display  ='block';
	};
	oDiv2_p_showBtn.onmouseout = function  (){
		oDiv2_btn_hide.style.display  ='none';
	};
	
	//模块3 函数 鼠标经过这个 div 执行变窄变高变色 移出再恢复
	var oDiv3_div_changeMore = document.getElementById("div3_div_changeMore");
	const oDiv3_div_height = oDiv3_div_changeMore.style.height;
	const oDiv3_div_width = oDiv3_div_changeMore.style.width;
	const oDiv3_div_bg = oDiv3_div_changeMore.style.background;
	oDiv3_div_changeMore.onmousemove = function () {
		oDiv3_div_changeMore.style.background = 'red';
		oDiv3_div_changeMore.style.height = '200px';
		oDiv3_div_changeMore.style.width = '80%';
	}
	oDiv3_div_changeMore.onmouseout = function () {
		oDiv3_div_changeMore.style.background = oDiv3_div_bg;
		oDiv3_div_changeMore.style.height = oDiv3_div_height;
		oDiv3_div_changeMore.style.width = oDiv3_div_width;
	}
	
	//模块4 鼠标经过就显示弹出层 (函数、变量)
	var oDiv4_a_showDiv = document.getElementById("div4_a_showDiv");
	var oDiv4_div_hide = document.getElementById("div4_div_hide");
	oDiv4_div_hide.style.display = "none";
	oDiv4_a_showDiv.onmousemove = function () {
		oDiv4_div_hide.style.display  ='block';
	}
	oDiv4_a_showDiv.onmouseout = function  (){
		oDiv4_div_hide.style.display  ='none';
	};
	
	//模块5 鼠标点击就显示弹出层 (函数、变量、判断)
	var oDiv5_a_showDiv = document.getElementById("div5_a_showDiv");
	var oDiv5_div_hide = document.getElementById("div5_div_hide");
	oDiv5_div_hide.style.display = "none";  //初始化 隐藏弹出层
	oDiv5_a_showDiv.onclick = function () {
		oDiv5_div_hide.style.display = oDiv5_div_hide.style.display == 'none'?'block':'none';
	}
	
	//模块6 网页换肤
	var oDiv6_btn_changeBgcToPink = document.getElementById("div6_btn_changeBgcToPink");
	var oDiv6_btn_changeBgcToYellow = document.getElementById("div6_btn_changeBgcToYellow");
	oDiv6_btn_changeBgcToPink.onclick = function () {
		document.body.style.backgroundColor= "pink";
	}
	oDiv6_btn_changeBgcToYellow.onclick = function () {
		document.body.style.backgroundColor= "yellow";
	}
	
	//模块7 显示隐藏
	var oDiv7_btn_showBtn = document.getElementById("div7_btn_showBtn");
	var oDiv7_btn_hide = document.getElementById("div7_btn_hide");
	oDiv7_btn_hide.style.display = 'none';  //初始化 隐藏按钮
	oDiv7_btn_showBtn.onclick = function () {
		oDiv7_btn_hide.style.display = oDiv7_btn_hide.style.display == 'none'?'block':'none';
	}
}

