jQuery(document).ready(function() {
	jQuery('a.page-scroll').bind('click', function(event) {
		var  anchor = jQuery(this);
		jQuery('html, body').stop().animate({
			scrollTop: jQuery(anchor.attr('href')).offset().top
		}, 1500, 'easeOutExpo');
		event.preventDefault();
	});
});
