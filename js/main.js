$(document).ready(function(){
    var isDesktop = isTablet = isMobile = false; 
    function resizeMain(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        isDesktop = isTablet = isMobile = false; 

        if( myWidth > 1240 ){ 
            isDesktop = true; 
        } else if( myWidth > 768 ){ 
            isTablet = true; 
        } else{ 
            isMobile = true; 
        } 
    }
    $(window).resize(resizeMain);
    resizeMain();

    var nowyear= new Date().getFullYear();
    var nowmonth= new Date().getMonth();
    var nowday= new Date().getDate();
    switch(nowmonth) {
        case 0: nowmonth="января"
        break;
        case 1: nowmonth="февраля"
        break;
        case 2: nowmonth="марта"
        break;
        case 3: nowmonth="апреля"
        break;
        case 4: nowmonth="мая"
        break;
        case 5: nowmonth="июня"
        break;
        case 6: nowmonth="июля"
        break;
        case 7: nowmonth="августа"
        break;
        case 8: nowmonth="сентября"
        break;
        case 9: nowmonth="октября"
        break;
        case 10: nowmonth="ноября"
        break;
        case 11: nowmonth="декабря"
        break;
    }
    $('#date').val(nowday+" "+nowmonth+" "+nowyear);
    $('.div-cal').datepicker({
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        firstDay: 1,
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNamesShort: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        dateFormat: "d M yy",
        prevText: "",
        nextText: "",
        onSelect: function(dateText){
            $('#date').val(dateText);
            $('.div-cal').removeClass("open-cal");
        }
    });
    customHandlers["myFunc"] = function($form){}
    $(function() {
          [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {   
             new SelectFx(el);
          } );
        });
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
    
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);
    $(function(){
        var Morphing = function( $btn, opts ) {

            this.opts = opts;

            this._init( $btn );

        }

        Morphing.prototype._init = function( $btn ) {
            var that = this;

            that.$btn = $btn.width( $btn.width() ).addClass('morphing-btn');

            // Add wrapping element and set initial width used for positioning
            $btn.wrap(function() {
                var $wrap = $('<div class="morphing-btn-wrap"></div>');

                $wrap.width( $(this).outerWidth( true ) );

                return $wrap;
            });

            that.$clone = $('<div />')
                .hide()
                .addClass('morphing-btn-clone')
                .insertAfter( $btn );

            $btn.on('click', function(e) {
                e.preventDefault();

                that.open();
            });
        };

        Morphing.prototype.open = function() {
          var that = this;

          if ( that.$btn.hasClass('morphing-btn_circle') ) {
            return;
          }

          // First, animate button to the circle
            that.$btn.one("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {

                // if ( e.originalEvent.propertyName !== 'width' ) {
                //     return;
                // }

                $(this).off(".fm");

                that._animate();

            });

            that.$btn.width( that.$btn.width() ).addClass('morphing-btn_circle');

        };

        Morphing.prototype._animate = function() {
            var that   = this;
            var $btn   = that.$btn;
            var $clone = that.$clone;
            var scale  = this._retrieveScale( $btn );
            var pos    = $btn[0].getBoundingClientRect();

            $clone.css({
                top       : pos.top  + $btn.outerHeight() * 0.5 - ( ($btn.outerHeight() * scale + 400) * 0.5 ),
                left      : pos.left + $btn.outerWidth()  * 0.5 - ( ($btn.outerHeight() * scale + 400) * 0.5 ),
                width     : $btn.outerWidth()  * scale + 400,
                height    : $btn.outerHeight() * scale + 400,
                transform : 'scale(' + 1 / scale + ')'
            });
            $clone.one("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {
                $(this).off(".fm");

                // Open fancyBox
                $.fancybox.open({ src : $btn.data('src') || $btn.attr('href') }, $.extend({}, that.opts, {
                    infobar  : false,
                    buttons  : false,
                    smallBtn : false,
                    touch    : false,
                    closeClickOutside : false,
                    modal : true,
                    onInit : function( instance ) {
                        instance.$refs.slider_wrap.append('<button class="morphing-close" data-fancybox-close>X</button>');
                        instance.$refs.bg.remove();
                    },
                    afterClose : function() {
                        that.close();
                    }
                }));

            });

            // Trigger expanding of the cloned element
            $clone.show().addClass('morphing-btn-clone_visible');

        };

        Morphing.prototype.close = function() {
            var that   = this;
            var $btn   = that.$btn;
            var $clone = that.$clone;
            var scale  = that._retrieveScale( $btn );
            var pos    = $btn[0].getBoundingClientRect();

            $clone.css({
                top       : pos.top  + $btn.outerHeight() * 0.5 -  ( $btn.outerHeight() * scale * 0.5 ),
                left      : pos.left + $btn.outerWidth()  * 0.5  - ( $btn.outerWidth()  * scale * 0.5 ),
                width     : $btn.outerWidth()  * scale,
                height    : $btn.outerHeight() * scale,
                transform : 'scale(' + ( 1 / scale ) + ')'
            });

            $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
                $clone.hide();

                $btn.removeClass('morphing-btn_circle');
            });

            $clone.removeClass('morphing-btn-clone_visible');
        };

        Morphing.prototype._retrieveScale = function( $btn ) {
            var rez = Math.max( $(window).height() * 2 / $btn.height() , $(window).width() * 2 / $btn.width() );

            return rez;
        };

        $.fn.fancyMorph = function( opts ) {
            this.each(function() {
                var $this = $(this);

                if ( !$this.data('morphing') ) {
                    $this.data('morphing', new Morphing( $this, opts ));
                }

            });

            return this;
        };

        $("[data-morphing]").fancyMorph({
            hash : 'morphing'
        });
    });

    //---flex search form
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
    //---flex search form
    //---callback-btn-hover-func
    $('.callback').hover(function() {
        $('.callback .callback-btn').addClass("onhover");
        $('.callback p').addClass("onhover");
        $('.callback .icon-callback').addClass("onhover");
        },
        function(){
        $('.callback .callback-btn').removeClass("onhover");
        $('.callback p').removeClass("onhover");
        $('.callback .icon-callback').removeClass("onhover");
        }
    );
    //---callback-btn-hover-func   
    //---gmap-map
    if ($('.map').length) {

        if ($(window).width()<768) {
            var zoomm = 12;
            var panto = new google.maps.LatLng(56.508741,84.97861);
            var panto_irk = new google.maps.LatLng(56.5151726,85.0482779);
            var panto_perv = new google.maps.LatLng(56.5209287,84.9628989);
        }
        else {
            var zoomm = 13;
            var panto = new google.maps.LatLng(56.507841,84.97861);
            var panto_irk = new google.maps.LatLng(56.5142726,85.0482779);
            var panto_perv = new google.maps.LatLng(56.5200287,84.9628989);
        }
        var latlng = new google.maps.LatLng(56.5154711,85.0050281);
        var settings = {
            zoom: zoomm,
            center: latlng,
            mapTypeControl: false,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: true,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}, mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            scrollwheel: false
            };
        var map = new google.maps.Map(document.getElementById("map_canvas"), 
        settings);



        var companyLogo = new google.maps.MarkerImage('/bitrix/templates/main/i/map-marker.png',
        new google.maps.Size(91,138),
        new google.maps.Point(0,0),
        new google.maps.Point(22,68),
        new google.maps.Size(45,68)
        );
            var companyPos = new google.maps.LatLng(56.507841,84.97861);
            var companyPos_irk = new google.maps.LatLng(56.5142726,85.0482779);
            var companyPos_perv = new google.maps.LatLng(56.5200287,84.9628989);

        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            icon: companyLogo,
            title:"Дента-Русь на Говорова"
            });
        var companyMarker_irk = new google.maps.Marker({
            position: companyPos_irk,
            map: map,
            icon: companyLogo,
            title:"Дента-Русь на Иркутском"
            });
        var companyMarker_perv = new google.maps.Marker({
            position: companyPos_perv,
            map: map,
            icon: companyLogo,
            title:"Дента-Русь на Первомайской"
            });

        var coords = new google.maps.LatLng(56.508041,84.98091)

        google.maps.event.addListener(companyMarker, 'click', function() {
        map.panTo(panto); 
        map.setZoom(17); 
        $('.gov').removeClass("hide");
        $('.irk').removeClass("show");
        $('.perv').removeClass("show");
        $('.gov').addClass("show");
        $('.irk').addClass("hide");
        $('.perv').addClass("hide");
        });
        google.maps.event.addListener(companyMarker_irk, 'click', function() {
        map.panTo(panto_irk); 
        map.setZoom(17); 
        $('.irk').removeClass("hide");
        $('.gov').removeClass("show");
        $('.perv').removeClass("show"); 
        $('.irk').addClass("show");
        $('.gov').addClass("hide");
        $('.perv').addClass("hide");    
        });
        google.maps.event.addListener(companyMarker_perv, 'click', function() {
        map.panTo(panto_perv); 
        map.setZoom(17); 
        $('.perv').removeClass("hide");
        $('.irk').removeClass("show");
        $('.gov').removeClass("show");  
        $('.perv').addClass("show");
        $('.irk').addClass("hide");
        $('.gov').addClass("hide"); 
        });
    //---gmap-map      
    //---top-slider on index page
        $('.back-slider').slick({
            dots: true,
            asNavFor: '.front-slider',
            prevArrow:false,
            nextArrow:false 
        });
        $('.front-slider').slick({
            fade: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            asNavFor: '.back-slider',
            prevArrow: '<div class="b-btn-prev"></div>',
            nextArrow: '<div class="b-btn-next"></div>'         
        });
    //---top-slider on index page
    //---about-slider on index page
        $('.left-slider').slick({
            dots: true,
            asNavFor: '.right-slider',
            prevArrow: '<div class="b-btn-prev"></div>',
            nextArrow: '<div class="b-btn-next"></div>'
        });
        $('.right-slider').slick({
            speed: 500,
            fade: true,
            cssEase: 'linear',
            asNavFor: '.left-slider',
            prevArrow: false,
            nextArrow: false,
            adaptiveHeight: isMobile
        });
    //---about-slider on index page
    //---menu services index page
    $('.services-menu button').click(function(event){
    var dataVal = $(event.target).attr("data-id");
    $('.services-menu ul li button').removeClass('active');
    $('.services-menu ul li [data-id ='+dataVal+']').addClass('active');
    $('.services-image').addClass('hide').removeClass('show');
    $('.services-images [data-id ='+dataVal+']').addClass('show').removeClass('hide');
    $('.services-text-container').addClass('hide').removeClass('show');
    $('.services-texts [data-id ='+dataVal+']').addClass('show').removeClass('hide');
    });
    if ($(window).width()<768) {
        $('.services-menu ul li button').removeClass('active');
    }   
    //---menu services index page
    //---reviews slider index page
    function mainfrev(){
        var how_many_slides = 0;
        if ($(window).width()<768) {
            how_many_slides = 1;
        }
        else {
            how_many_slides = 2;
        }
        $('.review-slide-block').slick({
            slidesToShow: how_many_slides,
            slidesToScroll: how_many_slides,
            nextArrow: '<div class="b-btn-next"></div>',
            prevArrow: '<div class="b-btn-prev"></div>'
        });
    var winsize = $(window).width();
    window.onresize = resizesrev;  
    function resizesrev () {
        if (
            (($(window).width()<768) && (winsize>=768))||(($(window).width()>768) && (winsize<768))
            ) { 
            $('.review-slide-block').slick('unslick');
            mainfrev();
        }
    }
    }
    mainfrev();
    //---reviews slider index page
    }//---end validation index page
    //---mapcontclose
    $('.map-cont-close').click(function() {
    $('.map-cont').addClass("hide");
    $('.map-cont').removeClass("show");
    }); 
    //---mapcontclose  
    //---page-about-progressbar
    if ($('.p_about_b_about').length) 
        {
            function mainfprogress (){
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
            window.onresize = resizes1;  
            function resizes1 () {
                $('.start').empty();
                $('.p_about_b_about_stats_menu_item').off( "click" );
                mainfprogress();
                }
            }
            mainfprogress();
        }
    //---page-about-progressbar   
    //---doctors-page-slider
    if ($('.p_doctors').length)
        {
            function mainfdoc () {     
                var menu_items = $('.p_doctors_menu_item').length;
                var first_off = $('.p_doctors_menu_item:eq(0)').offset().top;
                var offset = first_off;
                var i = 0;
                while ( i < menu_items-1 && offset == first_off) {
                    offset = $('.p_doctors_menu_item:eq('+i+')').offset().top;
                    i++;
                }
                //-----on hover vcards
                $('.p_doctors_menu_item').hover(function () {
                    var heghtid = $(this).attr('data-mdbtn');
                        if (window.innerWidth>1241) {
                            var vcardheight = 271 - 26 - $('[data-mdbtn='+heghtid+'] .p_doctors_menu_vcard p').height();
                        }
                        else {
                            var vcardheight = 206 - 26 - $('[data-mdbtn='+heghtid+'] .p_doctors_menu_vcard p').height();
                        }
                    var ad = $('[data-mdbtn='+heghtid+'] .p_doctors_menu_vcard').css('top',''+vcardheight+'px');
                    },
                    function () {
                        var heghtid = $(this).attr('data-mdbtn');
                        $('[data-mdbtn='+heghtid+'] .p_doctors_menu_vcard').css('top','');                  
                    }
                );  
                //---------------------- определяем количество элементов в строке (первой)
                for (var it = 0; it < menu_items; it++) {
                    var param_top = $('.p_doctors_menu_item:eq('+it+')').offset().top;
                    var next_it = it+1;
                    var next_param_top = $('.p_doctors_menu_item:eq('+next_it+')').offset().top;
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
                    $( '.p_doctors_menu_item:eq('+pos+')' ).after( $('.hidden .p_doctors_slider_cont').clone().attr('data-nrow-block',block).attr('offset',$( '.p_doctors_menu_item:eq('+pos+')' ).offset().top+$( '.p_doctors_menu_item:eq('+pos+')' ).height()));//'<div data-nrow='+block+' class="dummy-box"></div>' 
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
                        $('.hidden [data-slide-id='+columnToFill+']' ).clone().appendTo( $('[data-nrow-block='+blockToFill+']').attr('data-nslider',blockToFill));
                        $('[data-mdbtn='+columnToFill+']').attr('data-eventBlock',blockToFill);
                        //$('[data-msbtn='+columnToFill+'] a span').attr('data-eventBlock',blockToFill);
                        $('[data-mdbtn='+columnToFill+']').attr('data-sldots',cnt); 
                        cnt = cnt + 1;              
                    }


                    //------ подключаем слайдер             
                    $('.p_doctors_menu [data-nslider='+blockToFill+']').slick({
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
                $('.p_doctors_menu_item').click(function() {
                     if ($(this).hasClass('active')) {
                        $('.p_doctors_menu_item').removeClass('active');
                        $(".p_doctors_slider_cont").removeClass("doct_info_show");
                        // console.log('closed must be');
                     }
                     else {         
                        var dataEventVal = $(this).attr("data-eventblock");
                        var actButt = $(this).attr('data-mdbtn');
                        actButt = actButt-1;
                        $('.p_doctors_menu_item').removeClass('active');
                        $('.p_doctors_menu_item:eq('+actButt+')').addClass('active');               
                        var currentRow = dataEventVal;
                        var currentCell = $(this).attr('data-sldots');
                        $('[data-nrow-block = '+currentRow+'] .slick-dots li:eq('+currentCell+')').click();
                        $('.p_doctors_menu_info_triangle_im').removeClass('item_1').removeClass('item_2').removeClass('item_3').removeClass('item_0');
                        $('.p_doctors_menu_info_triangle_im').addClass('item_'+currentCell+'');
                        $(".p_doctors_slider_cont").removeClass("doct_info_show");
                        $('[data-nrow-block='+dataEventVal+']').addClass("doct_info_show");

                        function scrll () {  
                            var actscrll = $('.active').attr('data-eventblock')
                            var offs = $('[data-nrow-block='+actscrll+']').attr('offset')
                            //var offs = $('.p_doctors_menu_item:eq('+actButt+')').offset().top; 
                            $('html, body').animate({
                                scrollTop: offs
                            }, 400);
                        }
                        setTimeout(scrll, 0);
                    }
                });

                $('.map-cont-close').click(function() {
                    $('.p_doctors_menu_item').removeClass('active');
                    $(".p_doctors_slider_cont").removeClass("doct_info_show");
                        function scrlClose () {  
                            //var offs = $('.p_doctors_menu_item:eq('+actButt+')').offset().top; 
                            var offsc = $('[data-eventblock="1"]').offset().top;
                            $('html, body').animate({
                                scrollTop: offsc
                            }, 400);
                        }   
                        setTimeout(scrlClose, 0);   
                });
                winsize = window.innerWidth;
            }
            function mainfdocMobile (){        
                var items = $(".p_doctors_menu_item") ;
                var itemslen = items.length;
                for (var i = itemslen-1; i >= 0; i--) {
                    $('.doc-'+(i+1)+'').wrap('<div class = "doctwrap" data-fancybox data-src="#doc-'+(i+1)+'" href="javascript:;"></div>');
                    $('#doc-'+(i+1)+'').css("display","none").clone().appendTo($('.doc-'+(i+1)+''));
                    //console.log($('.doc-'+(i+1)+''));
                    }   
                    winsize = window.innerWidth;
            }   
            if (window.innerWidth>768) {
                mainfdoc();    
            }
            else {
                mainfdocMobile();
            }
            //------------------ 
            winsize = window.innerWidth;
            window.onresize = resizesdoc;  
            function resizesdoc () {
                if (
                    ((window.innerWidth<1241) && (winsize>=1241))||((window.innerWidth>1241) && (winsize<1241))
                    ) { 
                    $('.p_doctors .p_doctors_menu .p_doctors_slider_cont').remove();
                    $('.map-cont-close').off( "click" );
                    $('.p_doctors_menu_item').off( "click" );
                    $('.p_doctors_menu_item').removeClass('active');
                    $('.p_doctors_menu_item').unwrap(".doctwrap");
                    $(".p_doctors_slider_cont").removeClass("serv_info_show");              
                    mainfdoc();
                }
                if (
                    ((window.innerWidth<768) && (winsize>=768))
                    ) { 
                    $('.p_doctors .p_doctors_menu .p_doctors_slider_cont').remove();
                    $( ".p_doctors_menu_item" ).off( "mouseenter mouseleave" );
                    $('.map-cont-close').off( "click" );
                    $('.p_doctors_menu_item').off( "click" );
                    $('.p_doctors_menu_item').removeClass('active');
                    $(".p_doctors_slider_cont").removeClass("serv_info_show");  
                    $(".p_doctors_menu_item .p_doctors_slide").remove();
                    $('.p_doctors_menu_item').unwrap(".doctwrap");
                    $('.p_doctors_slider_cont .slick-initialized').remove();            
                        //----------mobile-----------
                        mainfdocMobile();
                        //----------mobile-----------
                }
                if ((window.innerWidth>768) && (winsize<768)) {
                    $('.p_doctors .p_doctors_menu .p_doctors_slider_cont').remove();
                    $( ".p_doctors_menu_item" ).off( "mouseenter mouseleave" );
                    $('.map-cont-close').off( "click" );
                    $('.p_doctors_menu_item').off( "click" );
                    $('.p_doctors_menu_item').removeClass('active');
                    $(".p_doctors_slider_cont").removeClass("serv_info_show");  
                    $(".p_doctors_menu_item .p_doctors_slide").remove();
                    $('.p_doctors_menu_item').unwrap(".doctwrap");
                    $('.p_doctors_slider_cont .slick-initialized').remove();
                    $('.p_doctors_slide').css('display','initial');
                    mainfdoc();
                }
            }  
        }
    //---doctors-page-slider  
    //---practice-page-slider 
    if ($(".p_practice").length)
        {
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
                if (window.innerWidth>1241) {
                    var vcardheight = 271 - 26 - $('[data-mdbtn='+heghtid+'] .p_practice_menu_vcard p').height();
                }
                else {
                    var vcardheight = 206 - 26 - $('[data-mdbtn='+heghtid+'] .p_practice_menu_vcard p').height();
                }
                var ad = $('[data-mdbtn='+heghtid+'] .p_practice_menu_vcard').css('top',''+vcardheight+'px');
                },
                function () {
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
                var tmpoffset = $( '.p_practice_menu_item:eq('+pos+')' ).offset().top+$( '.p_practice_menu_item:eq('+pos+')' ).height();
                $( '.p_practice_menu_item:eq('+pos+')' ).after( '<div data-nrow-block='+block+' offset='+tmpoffset+' class="p_practice_slider_cont"></div>');//'<div data-nrow='+block+' class="dummy-box"></div>' 
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
                    $(' [data-slide-id='+columnToFill+']' ).clone().appendTo( $('[data-nrow-block='+blockToFill+']').attr('data-nslider',blockToFill));
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
            winsize = window.innerWidth;
        }
        function mainfMobile (){        
            var items = $(".p_practice_menu_item") ;
            var itemslen = items.length;
            for (var i = itemslen-1; i >= 0; i--) {
                $('.pract-'+(i+1)+'').wrap('<div class = "doctwrap" data-fancybox data-src="#pract-'+(i+1)+'" href="javascript:;"></div>');
                $('#pract-'+(i+1)+'').css("display","none").clone().appendTo($('.pract-'+(i+1)+''));
                //console.log($('.doc-'+(i+1)+''));
                }   
                winsize = window.innerWidth;
        }   
        if (window.innerWidth>768) {
            mainf();    
        }
        else {
            mainfMobile();
        }
            //------------------ 
            var winsize = window.innerWidth;
            window.onresize = resizespract;  
            function resizespract () {
                if (
                    ((window.innerWidth<1241) && (winsize>=1241))||((window.innerWidth>1241) && (winsize<1241))
                    ) { 
                    $('.p_practice_menu .p_practice_slider_cont').remove();
                    $('.map-cont-close').off( "click" );
                    $('.p_practice_menu_item').off( "click" );
                    $('.p_practice_menu_item').removeClass('active');
                    $(".p_practice_slider_cont").removeClass("serv_info_show"); 
                    mainf();
                }
                if (
                    ((window.innerWidth<768) && (winsize>=768))
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
                if ((window.innerWidth>768) && (winsize<768)) {
                    $('.p_practice_menu .p_practice_slider_cont').remove();
                    $( ".p_practice_menu_item" ).off( "mouseenter mouseleave" );
                    $('.map-cont-close').off( "click" );
                    $('.p_practice_menu_item').off( "click" );
                    $('.p_practice_menu_item').removeClass('active');
                    $(".p_practice_slider_cont").removeClass("serv_info_show"); 
                    $(".p_practice_menu_item .p_practice_slider").remove();
                    $('.p_practice_menu_item').unwrap(".doctwrap");
                    $('.p_practice_slider_cont .slick-initialized').remove();
                    $('.p_practice_slider').css('display','none');
                    mainf();
                }                       
            }    
        }    
    //---practice-page-slider     
    //---fastclick
    window.addEventListener('load', function() {
        new FastClick(document.body);
    }, false); 
    //---fastclick
    //---service page slider
    if ($('.p_services').length)
        {
        function mainfserv (){
            var menu_items = $('.p_services_menu_item').length;
            var first_off = $('.p_services_menu_item:eq(0)').offset().top;
            var offset = first_off;
            var i = 0;
            while ( i < menu_items-1 && offset == first_off) {
                offset = $('.p_services_menu_item:eq('+i+')').offset().top;
                i++;
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
            for ( columns; columns < menu_items+next_it; columns = columns+next_it) {
                var pos = columns - 1;
                if (pos>=menu_items) {pos=menu_items-1;}
                var block = columns/next_it; // number of row
                $( '.p_services_menu_item:eq('+pos+')' ).after( $('.p_services_menu_info_container .p_services_menu_info').clone().attr('data-nrow-block',block).attr('offset',$( '.p_services_menu_item:eq('+pos+')' ).offset().top));//'<div data-nrow='+block+' class="dummy-box"></div>' 
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
                    $('.p_services_menu_info_slider [data-slide-id='+columnToFill+']' ).clone().appendTo( $('[data-nrow-block='+blockToFill+'] .b-block .p_services_menu_info_slider').attr('data-nslider',blockToFill));
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
                    nextArrow:false,
                    adaptiveHeight: true
                });
            }
            //----------  slider drop bottom rules
            $('.p_services_menu_item a').click(function() {
                 if ($(this).parent().hasClass('active')) {
                    $('.p_services_menu_item').removeClass('active');
                    $(".p_services_menu_info").removeClass("serv_info_show");
                 }
                 else {
                    var dataEventVal = $(this).attr("data-eventblock");
                    var actButt = $(this).parent().attr('data-msbtn');
                    actButt = actButt-1;
                    $('.p_services_menu_item').removeClass('active');
                    $('.p_services_menu_item:eq('+actButt+')').addClass('active');
                    var currentRow = dataEventVal;
                    var currentCell = $(this).attr('data-sldots');
                    $('[data-nrow-block = '+currentRow+'] .slick-dots li:eq('+currentCell+')').click();
                    $('.p_services_menu_info_triangle_im').removeClass('item_1').removeClass('item_2').removeClass('item_3').removeClass('item_0');
                    $('.p_services_menu_info_triangle_im').addClass('item_'+currentCell+'');
                    $(".p_services_menu_info").removeClass("serv_info_show");
                    $('[data-nrow-block='+dataEventVal+']').addClass("serv_info_show");
                    function scrll () {  
                        var actscrll = $('.active a').attr('data-eventblock')
                        var offs = $('[data-nrow-block='+actscrll+']').attr('offset')                   
                        $('html, body').animate({
                            scrollTop: offs
                        }, 300);
                    }
                    setTimeout(scrll, 0);
                }
            });
            $('.map-cont-close').click(function() {
                $('.p_services_menu_item').removeClass('active');
                $(".p_services_menu_info").removeClass("serv_info_show");
                    function scrlClose () {  
                        //var offs = $('.p_doctors_menu_item:eq('+actButt+')').offset().top; 
                        var offsc = $('[data-eventblock="1"]').offset().top;
                        $('html, body').animate({
                            scrollTop: offsc
                        }, 400);
                    }   
                    setTimeout(scrlClose, 0);           
            });
        }
            var winsizeserv = $(window).width();
            window.onresize = resizes;  
            function resizes () {
                if (
                    (($(window).width()<1241) && (winsizeserv>=1241) && (($(window).width())>768))||(($(window).width()>1241) && (winsizeserv<1241) && (($(window).width())>768))
                    ) 
                    {   
                        $('.p_services_menu .p_services_menu_info').remove();
                        $('.map-cont-close').off( "click" );
                        $('.p_services_menu_item a').off( "click" );
                        $('.p_services_menu_item').removeClass('active');
                        $(".p_services_menu_info").removeClass("serv_info_show");   
                        mainfserv();
                        winsizeserv = $(window).width();
                    }
                    winsizeserv = $(window).width();
                }
        if ($(window).width()>768) {mainfserv();}
    }
    //---service page slider
    //---service page accordion mobile
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
        icons: false
    });
    //---service page accordion mobile
    // $(".p_services .p_services_menu").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });
    var currentlocation = window.location.href;
    var startposition = currentlocation.indexOf("#");
    if (startposition>0) {
        var resultword = currentlocation.substring(startposition);
        $(''+resultword +' a').click();
    }

});

$(function(){
    $(document).click( function(event){
        if ( $(event.target).closest(".date-div").length ) {
            return;
        } else {
            if ( $(event.target).closest("a,tr,.ui-datepicker-title,.ui-datepicker-calendar").length ) return;
            $('.div-cal').removeClass("open-cal");
            event.stopPropagation();
        }
    });
    $('.date-div').click(function(){
        $('.div-cal').addClass("open-cal");
    });
});