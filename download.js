(function(jwplayer){
	var template = function(player, div, config){
		var goDownload = function(){
			var item = player.getPlaylistItem();
			document.location = item.file;
		};
		function setup(evt){
			player.addButton(
				"http://www.pluginsbyethan.com/github/download.png",
				"Download Media",
				goDownload,
				"download"
			);
		};
		player.onReady(setup);
		this.resize = function(width, height){
		};
	};
	jwplayer().registerPlugin('download', '6.0', template);
})(jwplayer);
