var currentSlide = 1;
$(document).ready(function() {
	$('.back').on('click', function() {
		if (currentSlide > 1) {

			$('.slide-' + currentSlide).removeClass('active-slide');
			currentSlide--;
			$('.slide-' + currentSlide).addClass('active-slide');
		} else {
			return false;
		}
	});

	$('.forward').on('click', function() {
		if (currentSlide < 30) {
			$('.slide-' + currentSlide).removeClass('active-slide');
			currentSlide++;
			$('.slide-' + currentSlide).addClass('active-slide');
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