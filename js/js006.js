window.onload = function () {
	//slide 数量
	var slides = document.getElementById("swiper").getElementsByTagName("div")
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
}