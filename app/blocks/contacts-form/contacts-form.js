import $ from 'jquery';

$(() => {
	$('#contactsForm').submit(function (e) {
		e.preventDefault();
		const $this = $(this);
		const formBtn = $this.find('button');
		$.ajax({
			url: '//formspree.io/saryk.lav@gmail.com',
			method: 'POST',
			data: $this.serialize(),
			dataType: 'json',
			cache: false,
			success: () => {
				formBtn.html('Отправленно');
				setTimeout(() => {
					formBtn.html('Отправить');
				}, 2000);
				$('#contactsForm').trigger('reset');

			},
			error: () => {
				formBtn.html('Ошибка');
				setTimeout(() => {
					formBtn.html('Отправить');
				}, 2000);
				// $('#contactsForm').trigger('reset');

			}
		});
	});

});
