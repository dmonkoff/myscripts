jQuery(document).on("click",'.btn-contact', function(){
		jQuery('.fader').animate({
					opacity: "toggle"
  					}, 100, function() {});
		jQuery('.send-message-wrap').animate({
					opacity: "toggle"
  					}, 100, function() {});
		return false
	})
	jQuery(document).on("click",'.close-write', function(){
		jQuery('.fader').animate({
					opacity: "toggle"
  					}, 100, function() {});
		jQuery('.send-message-wrap').animate({
					opacity: "toggle"
  					}, 100, function() {});
		return false
	})
