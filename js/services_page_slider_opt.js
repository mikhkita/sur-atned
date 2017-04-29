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
			$( '.p_services_menu_item:eq('+pos+')' ).after( $('.footer .p_services_menu_info_container').clone().attr('data-nrow-block',block));//'<div data-nrow='+block+' class="dummy-box"></div>' 
			console.log('row - ' + columns + 'pos - ' + pos + 'block - ' + block)
		}
//---------------------- вставляем слайды в блоки
		for (var blockToFill = 1; blockToFill <= block; blockToFill = blockToFill + 1 ) {
			var columnToFill = 1;
			if ( blockToFill > 1 ) {
				columnToFill = ((blockToFill - 1) * next_it)+1;
			}
			for ( columnToFill; columnToFill <= next_it*blockToFill; columnToFill = columnToFill + 1) {
				$('.footer [data-slide-id='+columnToFill+']' ).clone().appendTo( $('[data-nrow-block='+blockToFill+'] .p_services_menu_info .b-block .p_services_menu_info_slider').attr('data-nslider',blockToFill));
				$('[data-msbtn='+columnToFill+']').attr('data-eventBlock',blockToFill);	
			}


//------ подключаем слайдер				
			$('.p_services_menu [data-nslider='+blockToFill+']').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fadein: true,
				dots: false,
				prevArrow:false,
				nextArrow:false
			});
		}

		$('.p_services_menu').click(function(event) {
			var dataEventVal = $(event.target).attr("data-eventblock");
				console.log ('dataEventVal - ' + dataEventVal);
				$('[data-nrow-block='+dataEventVal+']').addClass("serv_info_show");
				$('data-nrow-block:not([data-nrow-block='+dataEventVal+'])').removeClass("serv_info_show");
			// $('.p_services_menu_info_container').addClass("serv_info_show");
			// });

			// jQuery(function($){
			// 	$(document).mouseup(function (e){ 
			// 		var div = $(".p_services_menu");
			// 		var div2 = $(".p_services_menu_info_container");
			// 		if ((!div.is(e.target) 
			// 		    && div.has(e.target).length === 0) && (!div2.is(e.target) 
			// 		    && div2.has(e.target).length === 0)) { 
			// 			$('.p_services_menu_info_container').removeClass("serv_info_show");
			// 		}	
			// 	});
		});

		// $('.p_services-menu button').click(function(event){
		// // $("[data-id = event.data]").addClass('hide');
		// var dataVal = $(event.target).attr("data-id");
		// $('.services-menu ul li button').removeClass('active');
		// $('.services-menu ul li [data-id ='+dataVal+']').addClass('active');
		// $('.services-image').addClass('hide').removeClass('show');
		// $('.services-images [data-id ='+dataVal+']').addClass('show').removeClass('hide');
		// $('.services-text-container').addClass('hide').removeClass('show');
		// $('.services-texts [data-id ='+dataVal+']').addClass('show').removeClass('hide');
		//   // alert('Вы нажали на элемент "foo"' + dataVal);
		// });

//--------------------подключение слайдера



		
	// $('.p_services_menu_info_slider').slick({
	//        customPaging: function (slider, i)
	//  {
	//  		if ( i == 0 ) {return '<a class="icon-diagnostic"> <span>Диагностика</span></a>';}
	//  		if ( i == 1 ) {return '<a class="icon-orthopedic"> <span>ортопедия</span></a>';}
	//  		if ( i == 2 ) {return '<a class="icon-orthodontic"> <span>Ортодонтия</span></a>';}
	//  		if ( i == 3 ) {return '<a class="icon-profgigiena"> <span>Профгигиена и отбеливание</span></a>';}
	//  		if ( i == 4 ) {return '<a class="icon-terapevt"> <span>Терапевтическая стоматология</span></a>';}
	//  		if ( i == 5 ) {return '<a class="icon-estetic"> <span>Эстетическая стоматология</span></a>';}
	//  		if ( i == 6 ) {return '<a class="icon-surgery"> <span>хирургия и имплантация</span></a>';}
	//  		if ( i == 7 ) {return '<a class="icon-childrens"> <span>детская стоматология</span></a>';}          
	//   },
	//        dots:true,
	// 		prevArrow:false,
	// 		nextArrow:false,	       
	//        appendDots:$('.p_services_menu')
	//    });	



});