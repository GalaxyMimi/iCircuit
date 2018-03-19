// JavaScript Document

// ######################################################################################
// Scrolling
// ######################################################################################

$(function(){
	$('a[href*=#]').stop().click(function () {

		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

			var HASH = this.hash;
			var ZIEL = $(this.hash);

			if (ZIEL.length) {

				var ABSTAND_TOP = ZIEL.offset().top + 60;

				$('html,body').animate({scrollTop: ABSTAND_TOP}, 750, function () {
					window.location.hash = HASH;
				});

				return false;
			}
		}
	});
});
