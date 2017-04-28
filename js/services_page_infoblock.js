
$('.p_services_menu').click(function() {
$('.p_services_menu_info_container').addClass("serv_info_show");
});
jQuery(function($){
	$(document).mouseup(function (e){ 
		var div = $(".p_services_menu");
		var div2 = $(".p_services_menu_info_container");
		if ((!div.is(e.target) 
		    && div.has(e.target).length === 0) && (!div2.is(e.target) 
		    && div2.has(e.target).length === 0)) { 
			$('.p_services_menu_info_container').removeClass("serv_info_show");
		}	
	});
});
