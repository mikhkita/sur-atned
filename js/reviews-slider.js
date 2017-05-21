$(document).ready(function mainf(){
	var how_many_slides = 0;
	if ($(window).width()<768) {
		how_many_slides = 1;
		console.log ('oops', $(window).width())
	}
	else {
		how_many_slides = 2;
	}
	$('.review-slide-block').slick({
		slidesToShow: how_many_slides,
		slidesToScroll: how_many_slides,
		nextArrow: '<div class="b-btn-next"></div>',
		prevArrow: '<div class="b-btn-prev"></div>'
	});
//---------------
var winsize = $(window).width();
window.onresize = resizes;	
function resizes () {
if (
	(($(window).width()<768) && (winsize>=768))||(($(window).width()>768) && (winsize<768))
	) {	
	$('.review-slide-block').slick('unslick');
	mainf();
}
}

});
