$(document).ready(function(){

	// get year and append into footer
	var getDate = new Date();
	var footerYear = getDate.getFullYear();
	var footerDateSelector = $('#footerDate');
	$(footerDateSelector).text(footerYear);

	// Slick slider
	  $('.room-images__thumbs').slick({
	  	lazyLoad: 'ondemand',
	  	slidesToShow: 1,
	  	variableWidth: true,
	  	arrows: false
	  });

	// mobile nav
	$('.mobile-nav__icon').click(function() {
		$(".main-nav").toggleClass('main-nav--active');
		$(this).find('.mobile-nav__icon-inner').toggleClass('mobile-nav__icon-inner--active');
	});	



});