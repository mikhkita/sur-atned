
//---------clone mobile menu into mobile menu block
	$('.mobile-menu').append($('.filials').clone());
	$('.mobile-menu').append($('.main-menu .b-block>ul').clone());
	$('.mobile-menu>ul:nth-child(2)').addClass('mobile-menu-ul left');
	var lngth = ($('.mobile-menu-ul>li:nth-child(1n)').length);
	for (var i = lngth; i >= 1; i--) {
		if ($('.mobile-menu-ul>li:nth-child('+i+') ul li').length > 0 ) {

			$('.mobile-menu-ul>li:nth-child('+i+')>a').addClass('mmarrow');
		}
	}

$('.mobile-menu-button').click(function() {
	$('.mobile-menu').addClass('visible');	
});
jQuery(function($){
	$(document).mouseup(function (e){ 
		var div = $(".mobile-menu"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$('.mobile-menu').removeClass("visible");
		}
	});
});

