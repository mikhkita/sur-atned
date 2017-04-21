$(document).ready(function(){
	$('.back-slider').slick({
		dots: true,
		asNavFor: '.front-slider'
	});
	$('.front-slider').slick({
		fade: true,
		asNavFor: '.back-slider'
	});
});
