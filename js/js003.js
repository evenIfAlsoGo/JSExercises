/**
 * Created by evenIfAlsoGo on 2018/02/16.
 */
window.onload = function () {
	//模块1 背景变色
	var oDiv1 = document.getElementById("div1")
	var oDiv1_style = oDiv1.style
	document.getElementById("div1_btn_bgToYellow").onclick = function () {
		oDiv1.style.background = 'yellow'
	}
	document.getElementById("div1_btn_bgToRed").onclick = function () {
		oDiv1.style.background = 'red'
	}
	document.getElementById("div1_btn_bgToBlack").onclick = function () {
		oDiv1.style.background = 'black'
	}
	document.getElementById("div1_btn_bgToOriginal").onclick = function () {
		oDiv1.style = oDiv1_style
	}
	
	//模块2 框体改变
	var oDiv2 = document.getElementById("div2")
	var oDiv2_style = oDiv2.style
	document.getElementById("div2_btn_bgToNarrow").onclick = function () {
		oDiv2.style.width = '80%'
	}
	document.getElementById("div2_btn_bgToYellow").onclick = function () {
		oDiv2.style.background = 'yellow'
	}
	document.getElementById("div2_btn_bgToHeighten").onclick = function () {
		oDiv2.style.height = '200px'
	}
	document.getElementById("div2_btn_bgToOriginal").onclick = function () {
		oDiv2.style = oDiv2_style
	}
	
	//模块3 函数传参 参数加变量
	var oDiv3_input_text = document.getElementById("div3_input_text")
	var oDiv3_btn_changeText = document.getElementById("div3_btn_changeText")
	oDiv3_btn_changeText.onclick = function () {
		oDiv3_input_text.value = '我改变啦'
	}
	
	//模块4 集体修改
	var oDiv4 = document.getElementById("div4")
	var oDiv4_style = oDiv4.style
	document.getElementById("div4_btn_changeMore").onclick = function () {
		oDiv4.style.width = '80%'
		oDiv4.style.background = 'red'
		oDiv4.style.height = '200px'
	}
	document.getElementById("div4_btn_bgToOriginal").onclick = function () {
		oDiv4.style = oDiv4_style
	}
}