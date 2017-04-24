function initialize() {
var latlng = new google.maps.LatLng(56.5075,84.9801);
var settings = {
zoom: 17,
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

var companyLogo = new google.maps.MarkerImage('i/map-marker.png',
new google.maps.Size(91,138),
new google.maps.Point(0,0),
new google.maps.Point(50,50)
);
var companyPos = new google.maps.LatLng(56.5079,84.9781);
var companyPos_irk = new google.maps.LatLng(56.514293,85.0462039);
var companyPos_perv = new google.maps.LatLng(56.5200287,84.9617992);
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

google.maps.event.addListener(companyMarker, 'click', function() {
$('.map-cont').removeClass("hide");
$('.map-cont').addClass("show");
});
}

google.maps.event.addDomListener(window, 'load', initialize);