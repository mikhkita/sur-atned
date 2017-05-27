$(document).ready(function(){
	$('.left-slider').slick({
		asNavFor: '.right-slider',
		prevArrow: '<div class="b-btn-prev"></div>',
		nextArrow: '<div class="b-btn-next"></div>',
		adaptiveHeight: true
		
	});
	$('.right-slider').slick({
		dots: true,
		fade: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		asNavFor: '.left-slider',
		prevArrow: false,
		nextArrow: false,
		adaptiveHeight: true
	});
});
