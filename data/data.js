
var $BASE_ASSET_URL = "img/";

(function() {

	var data = {
		config: {
			grid_count: 12,
			grid_colors: [
				"red darken-4",
				"deep-purple darken-4",
				"blue darken-4",
				"green darken-4",
				"pink darken-4",
				"light-green darken-4",
				"blue-grey darken-4",
				"grey darken-4",
				"cyan darken-4",
				"teal darken-4",
				"brown darken-4",
				"deep-orange darken-4"
			]
		},

		grid_data: {
			1: {
				// $.get
			}
		}

	}

	App = {
		get: function(type, key) {
			if(type!==null&&type!==undefined&&key!==null&&key!==undefined)
				return data[type][key];
			else {
				console.error('App.get does not accept \'null\' parameters.');
				return false;
			}
		},

		util: {
			shuffle: function(o){
				for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			}
		}
	}
})();