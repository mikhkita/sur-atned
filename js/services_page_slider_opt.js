$(document).ready(function(){
	var menu_items = $('.p_services_menu_item').length;
		console.log (menu_items);
	
		var dataVal = $('.p_services_menu_item:eq(1)').attr('data-msbtn');
		// var obj = $('.p_services_menu div:eq(0)');
		// var offset = $('.p_services_menu div [data-id = msbtn'+dataVal+']').offset();
		
		
		var first_off = $('.p_services_menu_item:eq(0)').offset().top;
		var offset = first_off;
		var i = 0;
		while ( i < menu_items-1 && offset == first_off) {
			offset = $('.p_services_menu_item:eq('+i+')').offset().top;
			i++;

		// console.log (offset);
		}
		
//---------------------- определяем количество элементов в строке (первой)
		for (var it = 0; it < menu_items; it++) {
			var param_top = $('.p_services_menu_item:eq('+it+')').offset().top;
			var next_it = it+1;
			var next_param_top = $('.p_services_menu_item:eq('+next_it+')').offset().top;
			if ( param_top == next_param_top  ) {
			}
			else {
				var columns = next_it;
				// console.log(next_it)
				break
			}
		}
//---------------------- вставляем пустой блок поле каждого ряда кнопок количество рядов block количество элементов next_it у боксов data-nrow
		for ( columns; columns < menu_items+next_it; columns = columns+columns) {
			var pos = columns - 1;
			var block = columns/next_it; // number of row
			$( '.p_services_menu_item:eq('+pos+')' ).after( $('.footer .p_services_menu_info').clone().attr('data-nrow-block',block));//'<div data-nrow='+block+' class="dummy-box"></div>' 
			console.log('row - ' + columns + 'pos - ' + pos + 'block - ' + block)
		}
//---------------------- вставляем слайды в блоки
		for (var blockToFill = 1; blockToFill <= block; blockToFill = blockToFill + 1 ) {
			var columnToFill = 1;
			if ( blockToFill > 1 ) {
				columnToFill = ((blockToFill - 1) * next_it)+1;
			}
			var cnt = 0;
			for ( columnToFill; columnToFill <= next_it*blockToFill; columnToFill = columnToFill + 1) {
				$('.footer [data-slide-id='+columnToFill+']' ).clone().appendTo( $('[data-nrow-block='+blockToFill+'] .b-block .p_services_menu_info_slider').attr('data-nslider',blockToFill));
				$('[data-msbtn='+columnToFill+'] a').attr('data-eventBlock',blockToFill);
				//$('[data-msbtn='+columnToFill+'] a span').attr('data-eventBlock',blockToFill);
				$('[data-msbtn='+columnToFill+'] a').attr('data-sldots',cnt);	
				cnt = cnt + 1;				
			}


//------ подключаем слайдер				
			$('.p_services_menu [data-nslider='+blockToFill+']').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				dots: true,
				prevArrow:false,
				nextArrow:false
			});
		}
//----------  slider drop bottom rules
		$('.p_services_menu_item a').click(function() {
			 if ($(this).parent().hasClass('active')) {
			 	$('.p_services_menu_item').removeClass('active');
			 	$(".p_services_menu_info").removeClass("serv_info_show");
			 	console.log()
			 }
			 else {
				var dataEventVal = $(this).attr("data-eventblock");
				var actButt = $(this).parent().attr('data-msbtn');
				actButt = actButt-1;
				$('.p_services_menu_item').removeClass('active');
				$('.p_services_menu_item:eq('+actButt+')').addClass('active');
//			var elem = $(event.target);
				var currentRow = dataEventVal;
				var currentCell = $(this).attr('data-sldots');
				$('[data-nrow-block = '+currentRow+'] .slick-dots li:eq('+currentCell+')').click();
				$('.p_services_menu_info_triangle_im').removeClass('item_1').removeClass('item_2').removeClass('item_3').removeClass('item_0');
				$('.p_services_menu_info_triangle_im').addClass('item_'+currentCell+'');
				$(".p_services_menu_info").removeClass("serv_info_show");
				$('[data-nrow-block='+dataEventVal+']').addClass("serv_info_show");
		}
		});

		$('.map-cont-close').click(function() {
			$('.p_services_menu_item').removeClass('active');
			$(".p_services_menu_info").removeClass("serv_info_show");
		});



//------------------ 


});