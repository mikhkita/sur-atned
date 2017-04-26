$('.services-menu button').click(function(event){
	// $("[data-id = event.data]").addClass('hide');
var dataVal = $(event.target).attr("data-id");
$('.services-menu ul li button').removeClass('active');
$('.services-menu ul li [data-id ='+dataVal+']').addClass('active');
$('.services-image').addClass('hide').removeClass('show');
$('.services-images [data-id ='+dataVal+']').addClass('show').removeClass('hide');
$('.services-text-container').addClass('hide').removeClass('show');
$('.services-texts [data-id ='+dataVal+']').addClass('show').removeClass('hide');
  // alert('Вы нажали на элемент "foo"' + dataVal);
});