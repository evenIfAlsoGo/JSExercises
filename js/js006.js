window.onload = function () {
	/*模块1 简易*/
	var slides = document.getElementById("swiper").getElementsByTagName("div")
	for(var i=0;i<slides.length;i++) {
		slides[i].style.display = "none"
	}
	slides[0].style.display = "block"
	slides.show = 0
	document.getElementById("next").onclick = function(){
		slides[slides.show].style.display = "none"
		slides.show = (slides.show + 1) % slides.length;
		slides[slides.show].style.display = "block"
	}
	document.getElementById("prev").onclick = function(){
		slides[slides.show].style.display = "none"
		slides.show = (slides.show - 1 + slides.length) % slides.length
		slides[slides.show].style.display = "block"
	}
	/*模块2 增加了小圆点，和自动翻页*/
	var slides2 = document.getElementById("swiper2").getElementsByTagName("div")
	var circle = document.getElementById("circle")	
	for(var i=0;i<slides2.length;i++) {
		slides2[i].style.display = "none"
		circle.innerHTML = circle.innerHTML + "<span style='font-size:30px'>·</span>"
	}
	var circles = circle.getElementsByTagName("span")
	slides2[0].style.display = "block"
	slides2.show = 0	
	circles[slides2.show].style.color = "red"
	function pageTurn(direction) {
		slides2[slides2.show].style.display = "none"
		circles[slides2.show].style.color = "black"
		if(direction=="next") {
			slides2.show = (slides2.show + 1) % slides2.length;
		} else if(direction=="prev") {
			slides2.show = (slides2.show - 1 + slides2.length) % slides2.length
		}
		slides2[slides2.show].style.display = "block"
		circles[slides2.show].style.color = "red"
	}
	window.setInterval(function(){
		pageTurn("next")
	}, 2000);
	document.getElementById("next2").onclick = function(){
		pageTurn("next")
	}
	document.getElementById("prev2").onclick = function(){
		pageTurn("prev")
	}
	
}