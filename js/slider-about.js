$(document).ready(function(){
	$('.left-slider').slick({
		asNavFor: '.right-slider'
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
