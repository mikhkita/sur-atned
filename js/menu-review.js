$('.review-menu li a').click(function() {
$('.review-text').addClass("show");
$('.review-image').addClass("show");
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