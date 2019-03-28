'use strict';	
	
(function($){
	
	// $("html, body").scrollTop($(element).offset().top);
	
	function navClick() {
		$('a.jsNavLink').click(function(event) {
			event.preventDefault();
			let positionOne = $($(this).attr('href')).offset().top;
			$('html, body').animate({
				scrollTop: positionOne
			}, 700);
		});
	};
	
	function backToTop() {
		$('a.jsTopLink').click(function(event) {
			event.preventDefault();
			let positionTwo = $($(this).attr('href')).offset().top;
			$('html, body').animate({
				scrollTop: positionTwo
			}, 700);
		});
	};
	
	navClick();
	backToTop();
	
}(jQuery));