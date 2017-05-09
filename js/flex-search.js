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