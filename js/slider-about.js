$(document).ready(function(){
	$('.left-slider').slick({
		asNavFor: '.right-slider',
		nextArrow: '<div class="b-btn-next"></div>',
		prevArrow: '<div class="b-btn-prev"></div>'
	});
	$('.right-slider').slick({
		dots: true,
		fade: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		asNavFor: '.left-slider'
	});
});
