$(document).ready(function(){
//==============================================================================





/*==============================================================================
	jQuery events
==============================================================================*/

	// Change wrapper and <li> color on wrapper dblclick
	jQuery("body").on("click", "h2", function() {
		jQuery(this).next().slideToggle();
	});
	jQuery("body").on("click", "button", function() {
		jQuery(this).next().slideToggle();
	});
//==============================================================================
});
