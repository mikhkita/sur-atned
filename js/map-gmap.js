function initialize() {
	var latlng = new google.maps.LatLng(56.5154711,85.0050281);
	var settings = {
		zoom: 13,
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
	map.panTo(coords); 
	map.setZoom(17); 
	$('.gov').removeClass("hide");
	$('.irk').removeClass("show");
	$('.perv').removeClass("show");
	$('.gov').addClass("show");
	$('.irk').addClass("hide");
	$('.perv').addClass("hide");
	});
	google.maps.event.addListener(companyMarker_irk, 'click', function() {
	map.panTo(coords); 
	map.setZoom(17); 
	$('.irk').removeClass("hide");
	$('.gov').removeClass("show");
	$('.perv').removeClass("show");	
	$('.irk').addClass("show");
	$('.gov').addClass("hide");
	$('.perv').addClass("hide");	
	});
	google.maps.event.addListener(companyMarker_perv, 'click', function() {
	map.panTo(coords); 
	map.setZoom(17); 
	$('.perv').removeClass("hide");
	$('.irk').removeClass("show");
	$('.gov').removeClass("show");	
	$('.perv').addClass("show");
	$('.irk').addClass("hide");
	$('.gov').addClass("hide");	
	});
}

google.maps.event.addDomListener(window, 'load', initialize);