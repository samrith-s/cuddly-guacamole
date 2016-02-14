
$(function() {
	
	App.display.grids();

	$('body').unbind('contextmenu').on('contextmenu', function(e) {
		e.preventDefault();
	}).flowtype({
		minFont: 14
	})

	$(window).resize(function(e) {
		if($(e.currentTarget).width()>$(e.currentTarget).height())
			$('body').removeClass('portrait').addClass('landscape');
		else
			$('body').removeClass('landscape').addClass('portrait');
	});
});


(function() {
	App.display = {
		grids: function() {

			function loadGrids() {
				$('.page-loading').velocity('fadeIn').find('.message').text('Loading grid: 1 of 12');
				var grid_colors = App.util.shuffle(App.get('config', 'grid_colors').slice());
				
				function loadImg(e, i) {
					$('.grid-box').eq(i).addClass(grid_colors[i]).find('.bg-img').css({backgroundImage:'url(' + img.src + ')' }).parent().velocity('transition.expandIn', 200);
					$('.page-loading').find('.message').text('Loading grid: ' + (i+1) + ' of ' + len)

					if((i+1)==len)
						$('.page-loading').velocity('fadeOut');
				}

				for(var i=0,len=grid_colors.length; i<len; i++) {
					var img = new Image();
					img.src = $BASE_ASSET_URL + "grid/" + (i+1) + ".jpg";
					img.classNames = "load-img"

					img.onload = loadImg(this, i)
				}
			}

			function bindHover() {
				$('.grid-box').hover(function(e, indx) {
					$(e.currentTarget).find('.bg-img').velocity('stop', true).velocity({scale: 1.5});
				}, function(e, indx) {
					$(e.currentTarget).find('.bg-img').velocity('stop', true).velocity({scale: 1});
				});
			}

			loadGrids();
			bindHover();
		}
	}
})();