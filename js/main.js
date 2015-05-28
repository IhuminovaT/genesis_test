		(function(){
			var users = [];

			users[0] = {
				name : 'Виктория',
				image : 'images/photo1.jpg',
				online: true,
				age : '23',
				zodiak : 'Дева',
				city : 'Киев',
				compatibility: '57',
				info : 'Lorem ipsum Laborum ad sint Excepteur ut eiusmod anim nulla in proident consectetur minim voluptate esse Duis in Excepteur officia.',
			};
			users[1] = {
				name : 'Елизаветта',
				image : 'images/photo2.jpg',
				online: true,
				age : '18',
				zodiak : 'Рак',
				city : 'Донецк',
				compatibility: '13',
				info : 'Lorem ipsum Laborum ad sint Excepteur.',
			};
			users[2] = {
				name : 'Анна',
				image : 'images/photo3.jpg',
				online: false,
				age : '26',
				zodiak : 'Весы',
				city : 'Львов',
				compatibility: '75',
				info : 'Lorem ipsum Laborum ad sint Excepteur ut eiusmod anim nulla in proident consectetur minim voluptate esse Duis in Excepteur officia. Lorem ipsum Laborum ad sint Excepteur.',
			};
			users[3] = {
				name : 'Дмитрий',
				image : 'images/photo4.jpg',
				online: true,
				age : '28',
				zodiak : 'Скорпион',
				city : 'Киев',
				compatibility: '4',
				info : 'Lorem ipsum Laborum ad sint Excepteur ut eiusmod anim nulla in proident consectetur minim voluptate esse Duis in Excepteur officia.',
			};
			users[4] = {
				name : 'Олег',
				image : 'images/photo5.jpg',
				online: true,
				age : '20',
				zodiak : 'Лев',
				city : 'Днепропетровск',
				compatibility: '21',
				info : 'Lorem ipsum Laborum ad sint Excepteur ut eiusmod anim nulla in proident consectetur minim voluptate.',
			};
			users[5] = {
				name : 'Екатерина',
				image : 'images/photo6.jpg',
				online: false,
				age : '19',
				zodiak : 'Овен',
				city : 'Киев',
				compatibility: '90',
				info : 'Lorem ipsum Laborum ad sint Excepteur ut eiusmod anim nulla in proident consectetur minim voluptate esse Duis in Excepteur officia.',
			};

			$(document).ready(function(){

				var currentUser = 0;

				$('.scale_full').css({'height': users[currentUser].compatibility + '%'});

				$('#dislike, #like').click(function(){

					// определяем следующий индекс
					if (currentUser + 1 < users.length) {

						currentUser += 1;
					} else {

						currentUser = 0;
					}

					// меняем проценты совместимости
					$('.data_percent').fadeOut('slow', function() {$(this).text(users[currentUser].compatibility + '%')}).fadeIn('slow');

					// меняем имя пользователя
					$('.name').fadeOut('slow', function() {$(this).text(users[currentUser].name +',')}).fadeIn('slow');

					// возраст
					$('.age').fadeOut('slow', function() {$(this).text(users[currentUser].age)}).fadeIn('slow');

					// знак зодиака
					$('.zodiak').text(users[currentUser].zodiak);

					// город
					$('.adress').text(users[currentUser].city);

					// описание
					$('.desc').text(users[currentUser].info);

					// онлайн
					if (users[currentUser].online) {

						$('.status').addClass('online');
					} else {

						$('.status').removeClass('online');
					}

					// меняем шкалу
					$('.scale_full').animate({'height' : users[currentUser].compatibility + '%'});

					// меняем фото
					$('.photo_bg').after('<img src="' + users[currentUser].image + '" alt="'+users[currentUser].name +'" class="photo_bg" />');

					var photo_width = $('.photo_bg').outerWidth();

					$('.photo_bg:first').css({
						'position' : 'absolute',
						'top' : '0px',
						'left' : '0px'
					}).animate({'left' : -photo_width + 'px'}, function() {

						$(this).remove();
					});

					$('.photo_bg:last').css({
						'position' : 'absolute',
						'top' : '0px',
						'left' : photo_width
					}).animate({'left' : '0px'}, function() {

						$(this).css({'position' : 'relative'});
					});
				})

				var height_info = $('#info').outerHeight();
				$('#info').css({'bottom': -height_info +'px'});

				$('#info_ico').click(function() {

					height_info = $('#info').outerHeight();

					if (!$('#info').is(':visible')) {

						$('#info').show().animate({'bottom': '0px'});
						$('#like, #dislike').css({
							'position': 'relative',
							'bottom': '0px'
						}).animate({'bottom': (height_info - 20) + 'px'});
					}
				})

				$('body').click(function(e) {

					var clicked = e.target;

					if ($(clicked).parents('#info').length == 0 && $(clicked).attr('id') != 'info_ico' && $(clicked).attr('id') != 'info') {

						$('#info').animate({'bottom': -height_info +'px'}, function() {
							$(this).hide();
						});

						$('#like, #dislike').animate({'bottom': '0px'}, function() {
							$(this).css({'position': 'static'});
						});
					}
				})

				$('#pull_down, .mat_glass').click(function() {

					if ($('nav').is(':visible')) {

						$('nav').animate({'left' : '-320px'}, function() {
								$(this).hide();
						});
						$('.heading, .mat_glass, footer, .scale_container, .scale, .photo_bg').removeClass('blur');
					}
				});

				$('#pull').click(function() {

					if (!$('nav').is(':visible')) {

						$('nav').show().animate({'left' : '0'});
						$('.heading, .mat_glass, footer, .scale_container, .scale, .photo_bg').addClass('blur');
					}
				});

			})
		}())