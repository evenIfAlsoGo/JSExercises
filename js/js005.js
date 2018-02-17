window.onload = function(){
	/*模块1 鼠标点击切换 第一种写法*/
	var tabs1 = document.getElementById("tab1").getElementsByTagName("li")
	var tabContents1 = document.getElementById("tabContent1").getElementsByTagName("div")
	for(var i=0;i<tabContents1.length;i++) {
		tabContents1[i].style.display = "none" 
		tabs1[i].index = i 
		tabs1[i].onclick = function () {
			show1(this.index) 
		}
	}
	tabContents1[0].style.display = "block" 
	function show1(index) {
		for(var i=0;i<tabContents1.length;i++) {
			tabContents1[i].style.display = "none" //
		}
		tabContents1[index].style.display = "block"
	}

	/**********************************************************************************/
	/* 解析
	//存放列表的个数，命名是因为此个数为复数，下面同理
	var tabs1 = document.getElementById("tab1").getElementsByTagName("li")
	//存放列表内容的个数
	var tabContents1 = document.getElementById("tabContent1").getElementsByTagName("div")
	//对具体的列表内容进行操作
	for(var i=0;i<tabContents1.length;i++) {
		//隐藏此列表内容
		tabContents1[i].style.display = "none" 
		//新建 index 属性，存放对应的 i 值
		tabs1[i].index = i 
		//调用 show1() 方法，并传入对应的 index 值
		tabs1[i].onclick = function () {
			show1(this.index) 
		}
	}
	// 使第一个列表内容显示
	tabContents1[0].style.display = "block" 
	function show1(index) {
		// 使全部的列表内容隐藏
		for(var i=0;i<tabContents1.length;i++) {
			tabContents1[i].style.display = "none" //
		}
		// 使对应的列表显示
		tabContents1[index].style.display = "block"
	}*/
	/**********************************************************************************/

	/*模块2 鼠标点击切换 第二种写法*/
	//此方法采用属性来记录当前显示的列表内容，O()缩小，没必要进行多次遍历
	var tabs2 = document.getElementById("tab2").getElementsByTagName("li")
	var tabContents2 = document.getElementById("tabContent2").getElementsByTagName("div")
	for(var i=0;i<tabContents2.length;i++) {
		tabContents2[i].style.display = "none"
		tabs2[i].index = i
		tabs2[i].onclick = function () {
			show2(this.index)
		}
	}
	tabContents2[0].style.display = "block"
	tabContents2.show = 0
	function show2(index){
		tabContents2[tabContents2.show].style.display = "none"
		tabContents2[index].style.display = "block"
		tabContents2.show = index
	}

	/**********************************************************************************/
	/*模块3 封装API*/
	// 参数均为String类型。第一参为列表的id，第二参为列表内容的id	
	/* html 结构：
			<ul id="tab">
				<li>选项卡1</li>
				<li>选项卡2</li>
				<li>选项卡3</li>
			</ul>
			<div id="tabContent">
				<div>我是选项卡一的内容</div>
				<div>我是选项卡二的内容</div>
				<div>我是选项卡三的内容</div>
			</div>

	*/
	function tabs(tab,tabContent){
		var tabs = document.getElementById(tab).getElementsByTagName("li")
		var tabContents = document.getElementById(tabContent).getElementsByTagName("div")
		for(var i=0;i<tabContents.length;i++) {
			tabContents[i].style.display = "none"
			tabs[i].index = i
			tabs[i].onclick = function () {
				tabContents[tabContents.show].style.display = "none"
				tabContents[this.index].style.display = "block"
				tabContents.show = this.index
			}
		}
		tabContents[0].style.display = "block"
		tabContents.show = 0
	}
	tabs("tab3","tabContent3")
}