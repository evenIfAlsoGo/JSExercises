/**
 * Created by Rainysun on 2017/10/15.
 */
window.onload = function () {
	//模块1 函数传参 一个参数
	var oDiv1 = document.getElementById("div1");
	const oDiv1_div_bg = oDiv1.style.background;
	document.getElementById("div1_btn_bgToYellow").onclick = function () {
		oDiv1.style.background = 'yellow';
	}
	document.getElementById("div1_btn_bgToRed").onclick = function () {
		oDiv1.style.background = 'red';
	}
	document.getElementById("div1_btn_bgToBlack").onclick = function () {
		oDiv1.style.background = 'black';
	}
	document.getElementById("div1_btn_bgToOriginal").onclick = function () {
		oDiv1.style.background = oDiv1_div_bg;
	}
	
	//模块2 函数传参 两个参数
	var oDiv2 = document.getElementById("div2");
	const oDiv2_div_width = oDiv2.style.width;
	const oDiv2_div_height = oDiv2.style.height;
	const oDiv2_div_bg = oDiv2.style.background;
	document.getElementById("div2_btn_bgToNarrow").onclick = function () {
		oDiv2.style.width = '80%';
	}
	document.getElementById("div2_btn_bgToYellow").onclick = function () {
		oDiv2.style.background = 'yellow';
	}
	document.getElementById("div2_btn_bgToHeighten").onclick = function () {
		oDiv2.style.height = '200px';
	}
	document.getElementById("div2_btn_bgToOriginal").onclick = function () {
		oDiv2.style.width = oDiv2_div_width;
		oDiv2.style.background = oDiv2_div_bg;
		oDiv2.style.height = oDiv2_div_height;
	}
	
	//模块3 函数传参 参数加变量
	var oDiv3_input_text = document.getElementById("div3_input_text");
	var oDiv3_btn_changeText = document.getElementById("div3_btn_changeText");
	oDiv3_btn_changeText.onclick = function () {
		oDiv3_input_text.value = '我改变啦';
	}
	
	//模块4 修改样式
	var oDiv4 = document.getElementById("div4");
	const oDiv4_div_width = oDiv4.style.width;
	const oDiv4_div_height = oDiv4.style.height;
	const oDiv4_div_bg = oDiv4.style.background;
	document.getElementById("div4_btn_changeMore").onclick = function () {
		oDiv4.style.width = '80%';
		oDiv4.style.background = 'red';
		oDiv4.style.height = '200px';
	}
	document.getElementById("div4_btn_bgToOriginal").onclick = function () {
		oDiv4.style.width = oDiv4_div_width;
		oDiv4.style.background = oDiv4_div_bg;
		oDiv4.style.height = oDiv4_div_height;
	}
}