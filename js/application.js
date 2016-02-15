
$(function() {
	
	App.display.grids();

	$('body').unbind('contextmenu').on('contextmenu', function(e) {
		e.preventDefault();
	}).flowtype({
		minFont: 14,
		maxFont: 20
	});

	if($(window).width()>$(window).height())
		$('body').removeClass('portrait').addClass('landscape');
	else	
		$('body').removeClass('landscape').addClass('portrait');

	$(window).resize(function(e) {
		if($(e.currentTarget).width()>$(e.currentTarget).height())
			$('body').removeClass('portrait').addClass('landscape');
		else
			$('body').removeClass('landscape').addClass('portrait');
	});
});


(function() {

	App.modal = {
		show: function() {
			$('.cs-modal-container').velocity('stop',true).velocity('transition.bounceUpIn');
		},

		hide: function() {
			$('.cs-modal-container').velocity('stop',true).velocity('transition.bounceDownOut');	
		}
	}

	App.display = {
		grids: function() {

			function loadGrids() {
				$('.page-loading').velocity('fadeIn').find('.message').text('Loading grid: 1 of 12');
				var grid_colors = App.util.shuffle(App.get('config', 'grid_colors').slice());
				
				function loadImg(e, i, len) {
					$('.grid-box').eq(i).addClass(grid_colors[i]).find('.bg-img').css({backgroundImage:'url(' + img.src + ')' }).parent().velocity('transition.expandIn', 200, function(e) {
						var indx = $(e).index('.grid-box');
						if(indx+1===len) {
							$('.page-loading').velocity('fadeOut');
							bindHover();
						}
					});

					$('.page-loading').find('.message').text('Loading grid: ' + (i+1) + ' of ' + len)
				}

				for(var i=0,len=grid_colors.length; i<len; i++) {
					var img = new Image();
					img.src = $BASE_ASSET_URL + "grid/" + (i+1) + ".jpg";
					img.classNames = "load-img"

					img.onload = loadImg(this, i, len)
				}
			}

			function bindHover() {
				$('.grid-box').hover(function(e, indx) {
					$(e.currentTarget).velocity('stop', true).velocity({opacity:1}).find('.bg-img').velocity('stop', true).velocity({opacity:0.05, scale: 1.5}).parent().find('.overlay').velocity('stop', true).velocity('transition.expandIn');
				}, function(e, indx) {
					$(e.currentTarget).velocity('stop', true).velocity({opacity:1}).find('.bg-img').velocity('stop', true).velocity({opacity:0.2, scale: 1}).parent().find('.overlay').velocity('stop', true).velocity('transition.expandOut');
				});
			}

			loadGrids();
		}
	}
})();