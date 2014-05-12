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

	// $('.slide-keyframes__title').on('click', function() {
	// 	$('.slide-keyframes__night-sky').css('display','block');
	// 	$('.slide-keyframes__button').css('background','#1a0235');
	// 	return false;
	// });
});