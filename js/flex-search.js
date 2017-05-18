
if ($(window).width()<768) {
	$('.search').addClass('search-mobile');
	$('.search').removeClass('search');
	$('.search-mobile').append('<a class="search-mobile-link" href="search.html"></a>');
}




//----------
$('.search').click(function() {
$('.header .b-block .filials').addClass("maxopacity");
$('.header .b-block .search').addClass("maxopacity");
$('.search-text').focus();
});
jQuery(function($){
	$(document).mouseup(function (e){ 
		var div = $("#search"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$('.search').removeClass("maxopacity");
			$('.filials').removeClass("maxopacity");
		}
	});
});