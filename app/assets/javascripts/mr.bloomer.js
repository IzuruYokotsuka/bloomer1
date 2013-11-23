$(function() {
			
			$('header').hide();
						
			$(window).scroll(function() {
				$('#pos').text($(this).scrollTop());
				$('#pos').hide();

				if ($(this).scrollTop() > 1140) {
					$('header').fadeIn();
				} else {
					$('header').fadeOut();
				}

			});

			$('#back-to-top a').click(function() {
				$('body').animate({
					scrollTop : 0
				}, 800);
				return false;
			});

			$('#back-to-what a').click(function() {
				$('body').animate({
					scrollTop : 1383
				}, 800);
				return false;
			});

			$('#back-to-account a').click(function() {
				$('body').animate({
					scrollTop : 3736
				}, 800);
				return false;
			});

			$('#back-to-who a').click(function() {
				$('body').animate({
					scrollTop : 4501
				}, 800);
				return false;
			});

			$('#back-to-contact a').click(function() {
				$('body').animate({
					scrollTop : 5636
				}, 800);
				return false;
			});

			$('#back-to-top a').mouseover(function() {
				$(this).css('background', '#f0f0f0');
			}).mouseout(function() {
				$(this).css('background', '#ffffff');
			});

			$('#back-to-what a').mouseover(function() {
				$(this).css('background', '#f0f0f0');
			}).mouseout(function() {
				$(this).css('background', '#ffffff');
			});

			$('#back-to-who a').mouseover(function() {
				$(this).css('background', '#f0f0f0');
			}).mouseout(function() {
				$(this).css('background', '#ffffff');
			});

			$('#back-to-contact a').mouseover(function() {
				$(this).css('background', '#f0f0f0');
			}).mouseout(function() {
				$(this).css('background', '#ffffff');
			});

			$('#back-to-account a').mouseover(function() {
				$(this).css('background', 'yellow');
			}).mouseout(function() {
				$(this).css('background', '#f0f0f0');
			});
			
            //$('#colorful').hide().fadeIn(8000);
            
            setInterval(function(){
            $('#colorful').fadeOut(1500,function() {
            	$(this).fadeIn(1500);
            });
            },1000);
			
		});