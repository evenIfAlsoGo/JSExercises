window.onload=function () {
	document.getElementById("js001_02").style.display = "none";
	document.getElementById("js001_04").style.display = "none";
	document.getElementById("js001_05").style.display = "none";
	document.getElementById("js001_07").style.display = "none";
}
function js001_01() {
	alert("弹出窗口");
}
function js001_02() {
	var div = document.getElementById('js001_02').style;
	div.display = div.display == 'none'?'block':'none';
}
function js001_03() {
	var div = document.getElementById('js001_03').style;
	var bgc = document.body.style.backgroundColor;
	div.background = div.background=='red'?bgc:'red';
	div.color = div.color=='white'?'black':'white';
}
function js001_04() {
	var div = document.getElementById('js001_04').style;
	div.display = div.display == 'none'?'block':'none';
}
function js001_05() {
	var div = document.getElementById('js001_05').style;
	div.display = div.display == 'none'?'block':'none';
}
function js001_06_01() {
	document.body.style.backgroundColor= "#ff9999";
}
function js001_06_02() {
	document.body.style.backgroundColor= "yellow";
}
function js001_07() {
	var div = document.getElementById('js001_07').style;
	div.background = "red";
	div.display = div.display == 'none'?'block':'none';
}
