$(document).ready(function(){
	$('.back-slider').slick({
		dots: true,
		asNavFor: '.front-slider',
		prevArrow:false,
		nextArrow:false	
	});
	$('.front-slider').slick({
		fade: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		asNavFor: '.back-slider',
		prevArrow:false,
		nextArrow:false		
	});
});
