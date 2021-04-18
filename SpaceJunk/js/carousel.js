// making animated counter //
const counters = document.querySelectorAll('.counter');
const speed = 500;

counters.forEach(counter => {
	const startCount = () => {
		const target = +counter.getAttribute('data-target')
		const count = +counter.innerText;
		const inc = target / speed;
	
		if(count < target){
			counter.innerText = count + inc;
			setTimeout(startCount, 10);
		} else {
			count.innerText = target;
		}
	}
	startCount() 
});


// image slides page 3 space junk //
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
 }
 
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName('image-slides');

	if(n > slides.length){
		 slideIndex = 1
	 }
	if(n < 1){
		 slideIndex = slides.length
	 }
	for(i = 0; i < slides.length; i++){
		 slides[i].style.display = "none"; 
	}
	 
 	slides[slideIndex-1].style.display = "block";
}

