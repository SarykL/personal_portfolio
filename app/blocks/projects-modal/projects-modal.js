import $ from 'jquery';
import 'magnific-popup';

$(() => {
	$('.projects-thumbnail__link').magnificPopup({
		type: 'inline',
		midClick: true
	});
});
