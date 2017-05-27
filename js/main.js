$(document).ready(function(){
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
    $('#date').datepicker({
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        firstDay: 1,
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNamesShort: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        dateFormat: "d M yy",
        prevText: "",
        nextText: ""
    });
    customHandlers["myFunc"] = function($form){
        
    }
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
});
$(window).resize(function(){
    $('.b-popup').width( $(window).width() - 17 );
})