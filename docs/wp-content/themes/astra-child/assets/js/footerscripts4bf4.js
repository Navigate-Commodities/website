jQuery(document).ready(function($) {
	$('.ct-form ._form_element').each(function() {
		var label = $(this).find('._form-label').text();
		$(this).find('option:first').text(label);
		$(this).find('option:first').attr('value','');
	});

});
    
jQuery(document).ready(function($) {
	var subs_count = 0;

	$('.ct-form-nav-plus ._checkbox-radio input[type=checkbox]').click(function(){

		var check_active = $(this);

		if (check_active.is(':checked')) {
			subs_count++;

			if (subs_count == 2) {
				$('.ct-form-nav-plus ._checkbox-radio input[type=checkbox]').attr('disabled', true);
				$('.ct-form-nav-plus ._checkbox-radio input[type=checkbox]:checked').attr('disabled', false);
			} 

		} else {
			subs_count--;

			if (subs_count == 1) {
				$('.ct-form-nav-plus ._checkbox-radio input[type=checkbox]').attr('disabled', false);
			}
			
		} 

	});

	$('.ct-form-nav-pro ._checkbox-radio input[type=checkbox]').click(function(){

		var check_active = $(this);

		if (check_active.is(':checked')) {
			subs_count++;

			if (subs_count == 3) {
				$('.ct-form-nav-pro ._checkbox-radio input[type=checkbox]').attr('disabled', true);
				$('.ct-form-nav-pro ._checkbox-radio input[type=checkbox]:checked').attr('disabled', false);
			} 

		} else {
			subs_count--;

			if (subs_count == 2) {
				$('.ct-form-nav-pro ._checkbox-radio input[type=checkbox]').attr('disabled', false);
			}
			
		} 

	});

	$('.ct-form-nav-enterprise ._checkbox-radio input[type=checkbox]').click(function(){

		var check_active = $(this);

		if (check_active.is(':checked')) {
			subs_count++;

			if (subs_count == 4) {
				$('.ct-form-nav-enterprise ._checkbox-radio input[type=checkbox]').attr('disabled', true);
				$('.ct-form-nav-enterprise ._checkbox-radio input[type=checkbox]:checked').attr('disabled', false);
			} 

		} else {
			subs_count--;

			if (subs_count == 3) {
				$('.ct-form-nav-enterprise ._checkbox-radio input[type=checkbox]').attr('disabled', false);
			}
			
		} 

	});

});


jQuery(document).ready(function($) {
	$('.team-leader-section form').click(function() {
		$(this).submit();
	});
});
jQuery(document).ready(function($) {
	$('.selected-team').click();
	$('.carousel-indicators, .slideshow-container').removeClass('visible-hidden');
});


jQuery(document).ready(function($) {
	$(window).scrollTop($(window).scrollTop()+1);	
});