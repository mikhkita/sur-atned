$(document).ready(function (){
	function mainf () {
		var menu_items = $('.p_practice_menu_item').length;
		var first_off = $('.p_practice_menu_item:eq(0)').offset().top;
		var offset = first_off;
		var i = 0;
		while ( i < menu_items-1 && offset == first_off) {
			offset = $('.p_practice_menu_item:eq('+i+')').offset().top;
			i++;
		}
		//-----on hover vcards
		$('.p_practice_menu_item').hover(function () {
			var heghtid = $(this).attr('data-mdbtn');
			if ($(window).width()>1241) {
				var vcardheight = 271 - 26 - $('[data-mdbtn='+heghtid+'] .p_practice_menu_vcard p').height();
			}
			else {
				var vcardheight = 206 - 26 - $('[data-mdbtn='+heghtid+'] .p_practice_menu_vcard p').height();
			}
			var ad = $('[data-mdbtn='+heghtid+'] .p_practice_menu_vcard').css('top',''+vcardheight+'px');
			},
			function ()	{
				var heghtid = $(this).attr('data-mdbtn');
				$('[data-mdbtn='+heghtid+'] .p_practice_menu_vcard').css('top','');					
			}
		);	
		//---------------------- определяем количество элементов в строке (первой)
		for (var it = 0; it < menu_items; it++) {
			var param_top = $('.p_practice_menu_item:eq('+it+')').offset().top;
			var next_it = it+1;
			var next_param_top = $('.p_practice_menu_item:eq('+next_it+')').offset().top;
			if ( param_top == next_param_top  ) {
			}
			else {
				var columns = next_it;
				// console.log(next_it)
				break
			}
		}
		//---------------------- вставляем пустой блок поле каждого ряда кнопок количество рядов block количество элементов next_it у боксов data-nrow
		for ( columns; columns < menu_items+next_it; columns = columns+next_it) {
			var pos = columns - 1;
			if (pos>=menu_items) {pos=menu_items-1;}
			var block = columns/next_it; // number of row
			$( '.p_practice_menu_item:eq('+pos+')' ).after( $('.footer .p_practice_slider_cont').clone().attr('data-nrow-block',block).attr('offset',$( '.p_practice_menu_item:eq('+pos+')' ).offset().top+$( '.p_practice_menu_item:eq('+pos+')' ).height()));//'<div data-nrow='+block+' class="dummy-box"></div>' 
			// console.log('row - ' + columns + 'pos - ' + pos + 'block - ' + block)
		}
		//---------------------- вставляем слайды в блоки
		for (var blockToFill = 1; blockToFill <= block; blockToFill = blockToFill + 1 ) {
			var columnToFill = 1;
			if ( blockToFill > 1 ) {
				columnToFill = ((blockToFill - 1) * next_it)+1;
			}
			var cnt = 0;
			for ( columnToFill; columnToFill <= next_it*blockToFill; columnToFill = columnToFill + 1) {
				$('.footer [data-slide-id='+columnToFill+']' ).clone().appendTo( $('[data-nrow-block='+blockToFill+']').attr('data-nslider',blockToFill));
				$('[data-mdbtn='+columnToFill+']').attr('data-eventBlock',blockToFill);
				//$('[data-msbtn='+columnToFill+'] a span').attr('data-eventBlock',blockToFill);
				$('[data-mdbtn='+columnToFill+']').attr('data-sldots',cnt);	
				cnt = cnt + 1;				
			}


			//------ подключаем слайдер				
			$('.p_practice_menu [data-nslider='+blockToFill+']').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				dots: true,
				prevArrow:false,
				nextArrow:false,
				adaptiveHeight: true
			});
		}
		//----------  slider drop bottom rules
		$('.p_practice_menu_item').click(function() {
			 if ($(this).hasClass('active')) {
			 	$('.p_practice_menu_item').removeClass('active');
			 	$(".p_practice_slider_cont").removeClass("pract_info_show");
			 	// console.log('closed must be');
			 }
			 else {			
				var dataEventVal = $(this).attr("data-eventblock");
				var actButt = $(this).attr('data-mdbtn');
				actButt = actButt-1;
				$('.p_practice_menu_item').removeClass('active');
				$('.p_practice_menu_item:eq('+actButt+')').addClass('active');				
				var currentRow = dataEventVal;
				var currentCell = $(this).attr('data-sldots');
				$('[data-nrow-block = '+currentRow+'] .slick-dots li:eq('+currentCell+')').click();
				$('.p_practice_menu_info_triangle_im').removeClass('item_1').removeClass('item_2').removeClass('item_3').removeClass('item_0');
				$('.p_practice_menu_info_triangle_im').addClass('item_'+currentCell+'');
				$(".p_practice_slider_cont").removeClass("pract_info_show");
				$('[data-nrow-block='+dataEventVal+']').addClass("pract_info_show");

				function scrll () {  
					var actscrll = $('.active').attr('data-eventblock')
					var offs = $('[data-nrow-block='+actscrll+']').attr('offset')
					//var offs = $('.p_practice_menu_item:eq('+actButt+')').offset().top; 
					$('html, body').animate({
				        scrollTop: offs
				    }, 400);
				}
				setTimeout(scrll, 0);
				}
		});

		$('.map-cont-close').click(function() {
			$('.p_practice_menu_item').removeClass('active');
			$(".p_practice_slider_cont").removeClass("pract_info_show");
				function scrlClose () {  
					//var offs = $('.p_practice_menu_item:eq('+actButt+')').offset().top; 
					var offsc = $('[data-eventblock="1"]').offset().top;
					$('html, body').animate({
				        scrollTop: offsc
				    }, 400);
				}	
				setTimeout(scrlClose, 0);	
		});
		winsize = $(window).width();
	}
	function mainfMobile (){		
		var items = $(".p_practice_menu_item") ;
		var itemslen = items.length;
		for (var i = itemslen-1; i >= 0; i--) {
			$('.pract-'+(i+1)+'').wrap('<div class = "doctwrap" data-fancybox data-src="#pract-'+(i+1)+'" href="javascript:;"></div>');
			$('#pract-'+(i+1)+'').css("display","none").clone().appendTo($('.pract-'+(i+1)+''));
			//console.log($('.doc-'+(i+1)+''));
			}	
			winsize = $(window).width();
	}	
	if ($(window).width()>768) {
		mainf();	
	}
	else {
		mainfMobile();
	}
		//------------------ 
		var winsize = $(window).width();
		window.onresize = resizes;	
		function resizes () {
			if (
				(($(window).width()<1241) && (winsize>=1241))||(($(window).width()>1241) && (winsize<1241))
				) {	
				$('.p_practice_menu .p_practice_slider_cont').remove();
				$('.map-cont-close').off( "click" );
				$('.p_practice_menu_item').off( "click" );
				$('.p_practice_menu_item').removeClass('active');
				$(".p_practice_slider_cont").removeClass("serv_info_show");	
				mainf();
			}
			if (
				(($(window).width()<768) && (winsize>=768))
				) {	
				$('.p_practice_menu .p_practice_slider_cont').remove();
				$( ".p_practice_menu_item" ).off( "mouseenter mouseleave" );
				$('.map-cont-close').off( "click" );
				$('.p_practice_menu_item').off( "click" );
				$('.p_practice_menu_item').removeClass('active');
				$(".p_practice_slider_cont").removeClass("serv_info_show");		
				$(".p_practice_menu_item .p_practice_slider").remove();
				$('.p_practice_menu_item').unwrap(".doctwrap");
				$('.p_practice_slider_cont .slick-initialized').remove();			
					//----------mobile-----------
					mainfMobile();
					//----------mobile-----------
			}
			if (($(window).width()>768) && (winsize<768)) {
				$('.p_practice_menu .p_practice_slider_cont').remove();
				$( ".p_practice_menu_item" ).off( "mouseenter mouseleave" );
				$('.map-cont-close').off( "click" );
				$('.p_practice_menu_item').off( "click" );
				$('.p_practice_menu_item').removeClass('active');
				$(".p_practice_slider_cont").removeClass("serv_info_show");	
				$(".p_practice_menu_item .p_practice_slider").remove();
				$('.p_practice_menu_item').unwrap(".doctwrap");
				$('.p_practice_slider_cont .slick-initialized').remove();
				$('.p_practice_slider').css('display','initial');
				mainf();
			}						
		}


});