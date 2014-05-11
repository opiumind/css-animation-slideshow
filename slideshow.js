$(document).ready(function() {
	var currentSlide = 0;
	$('.back').on('click', function() {
		if (currentSlide > 0) {

			currentSlide--;
		} else {
			return false;
		}
	});

	$('.forward').on('click', function() {
		if (currentSlide < 30) {

			currentSlide++;
		} else {
			return false;
		}
	});
});