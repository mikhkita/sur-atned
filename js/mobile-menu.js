
if ($(window).width()<768) {
	$('body').prepend('<div class="mobile-menu"></div>');
	$('.mobile-menu').append($('.filials'));
	$('.mobile-menu').append($('.main-menu .b-block>ul'));
	$('.mobile-menu>ul:nth-child(2)').addClass('mobile-menu-ul left');
	var lngth = ($('.mobile-menu-ul>li:nth-child(1n)').length);
	for (var i = lngth; i >= 1; i--) {
		if ($('.mobile-menu-ul>li:nth-child('+i+') ul li').length > 0 ) {

			$('.mobile-menu-ul>li:nth-child('+i+')>a').addClass('mmarrow');
		}
	}
}
