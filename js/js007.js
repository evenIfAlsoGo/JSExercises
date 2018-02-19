$(document).ready(function (argument) {
	/*模块1 选项卡*/
	$("#tabContent div:not(':first')").hide()
	$("#tab li").click(function(){
		$("#tabContent div").hide()
		$($("#tabContent div").get($(this).index())).show()
	})	
	/***********************解析**************************/
	/*//隐藏 id="tabContent" 的元素内的每一个 div 元素，除了第一个 div 元素
	$("#tabContent div:not(':first')").hide()
	//为 id="tab" 的元素内的每一个 li 元素添加点击事件
	$("#tab li").click(function(){
		//隐藏 id="tabContent" 的元素内的每一个 div 元素
		$("#tabContent div").hide()
		//显示 id="tabContent" 的元素内的第 index 个 div 元素
		$($("#tabContent div").get($(this).index())).show()
	})
	*/

	/*模块2 剪辑轮播图*/
	$("#swiper div:not(':first')").hide()
	var swipers = $("#swiper div")
	swipers.show = 0
	$("#prev").click(function(){
		$(swipers[swipers.show]).hide()
		swipers.show = (swipers.show - 1 + swipers.length) % swipers.length
		$(swipers[swipers.show]).show()
	})
	$("#next").click(function(){
		$(swipers[swipers.show]).hide()
		swipers.show = (swipers.show + 1) % swipers.length
		$(swipers[swipers.show]).show()
	})
	

	/*模块3 进阶轮播图*/
	var swipers2 = $("#swiper2 div")
	for(var i=0;i<swipers2.length;i++){
		$("#circle2").append("<span style='font-size:30px'>·</span>")
	}
	var circles = $("#circle2 span")	
	//初始化数据
	$("#swiper2 div:not(':first')").hide()
	swipers2.show = 0;
	$(circles[0]).css("color","red")
	//方法	
	function pageTurn(direction) {
		$(swipers2[swipers2.show]).hide()
		$(circles[swipers2.show]).css("color","black")
		if(direction=="prev") {
			swipers2.show = (swipers2.show - 1 + swipers2.length) % swipers2.length
		} else if (direction=="next") {
			swipers2.show = (swipers2.show + 1) % swipers2.length
		}
		$(swipers2[swipers2.show]).show()
		$(circles[swipers2.show]).css("color","red")
	}
	$("#prev2").click(function(){
		pageTurn("prev")
	})
	$("#next2").click(function(){
		pageTurn("next")
	})
	window.setInterval(function(){
		pageTurn("next")
	}, 2000);
})