$(document).ready(function mainf (){
	var pcs = $('.p_about_b_about_stats_graphic_progressbar').length;
	for (var i = 1; i <= pcs; i++) {
		var vall = $('[data-bar='+i+']').attr('data-year');
		$('[data-bar='+i+'] .start').append(''+vall+'')
	}
	$('.p_about_b_about_stats_menu_item').click(function() {
		var menuid = $(this).attr('data-aboutid');
		$('.p_about_b_about_stats_menu_item').removeClass('active');
		$(this).addClass('active');				
		var valarray = ($(this).attr('data-stats')).split(',');	
		var max = Math.max.apply(null, valarray);
		var mmaxind = -1;
		$.each(valarray,function(index,value){
		 	if (value == max) {
		 		mmaxind = index;	
		 	}
		});	
		var minvalue = 150;
		var widths = [];
		var width = $('.p_about_b_about_stats_graphic').width()-minvalue;
	    for (var i = 0; i < valarray.length; i++) {
	    	
	    	if (i!=mmaxind) {
	    		widths[i] = Math.round(width*valarray[i]/max)+minvalue;
	    			
	    	}	
	    	else {
	    		widths[i] = width+minvalue;
	    	}
	    	var dumm = i + 1;
	    	var opacity = 1 - i*0.1;
	    	$('[data-bar='+dumm+']').css({'width':''+widths[i]+'px', 'opacity':''+opacity+''});
	    	//$('[data-bar='+dumm+']').css({'width':''+widths[i]+'px', 'opacity':''+opacity+''});
	    	$('[data-bar='+dumm+']').addClass('after');
			$('[data-bar='+dumm+'] .end span').remove();
	    	$('[data-bar='+dumm+'] .end').append('<span>'+valarray[i]+'</span>')
	    }
	});	
	$('[data-aboutid=1]').click();

});