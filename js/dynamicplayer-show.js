(function($){
	if($.fn.dynamicAudioPlayer) {
		$("#dynamic-player-container").dynamicAudioPlayer({
			dynTotalWidth: dynamic_options.dynTotalWidth,
			dynPosition: dynamic_options.dynPosition,
			dynPlaylistVisible: dynamic_options.dynPlaylistVisible,
			dynPlaylistHeight: dynamic_options.dynPlaylistHeight,
			dynAutoplayEnabled: dynamic_options.dynAutoplayEnabled,
			dynPlayerMarginFrom: dynamic_options.dynPlayerMarginFrom,
			dynPlayerMargin: dynamic_options.dynPlayerMargin,
			dynPlayerHorMarginFrom: dynamic_options.dynPlayerHorMarginFrom,
			dynPlayerHorMargin: dynamic_options.dynPlayerHorMargin,
			dynTitle: [dynamic_options.dynTitle[0], dynamic_options.dynTitle[1], dynamic_options.dynTitle[2], dynamic_options.dynTitle[3], dynamic_options.dynTitle[4]],
			dynArtist: [dynamic_options.dynArtist[0], dynamic_options.dynArtist[1], dynamic_options.dynArtist[2], dynamic_options.dynArtist[3],dynamic_options.dynArtist[4]],
			dynAlbum: [dynamic_options.dynAlbum[0], dynamic_options.dynAlbum[1], dynamic_options.dynAlbum[2], dynamic_options.dynAlbum[3], dynamic_options.dynAlbum[4]],
			dynDate: [dynamic_options.dynDate[0], dynamic_options.dynDate[1], dynamic_options.dynDate[2], dynamic_options.dynDate[3], dynamic_options.dynDate[4]],
			dynOggFile: [dynamic_options.dynOggFile[0],  dynamic_options.dynOggFile[1], dynamic_options.dynOggFile[2],  dynamic_options.dynOggFile[3], dynamic_options.dynOggFile[4]],
			dynMp3File: [dynamic_options.dynMp3File[0], dynamic_options.dynMp3File[1], dynamic_options.dynMp3File[2], dynamic_options.dynMp3File[3], dynamic_options.dynMp3File[4]],
			dynImageFile: [dynamic_options.dynImageFile[0], dynamic_options.dynImageFile[1], dynamic_options.dynImageFile[2], dynamic_options.dynImageFile[3], dynamic_options.dynImageFile[4]]		
		});
	}
})(jQuery);
