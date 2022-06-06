window.onload = function()
{
	var hiddenAT = document.getElementById("acccessToken");
	// var hiddenRT = document.getElementById("refreshToken");
	var accessToken = hiddenAT.value;
	// var refreshToken = hiddenRT.data;
	// window.top.postMessage("hi", "*"); Does not work, I can't get reference to the parent window
	var divForPlaylist = document.getElementById("insertPlaylist")
	var imagineDragonsAlbumUrl = "https://api.spotify.com/v1/playlists/3KWUs8yc1g3DBipDTWgiyL?si=0a737f7b3f394421&nd=1";

	var request = new XMLHttpRequest();
	request.open( "GET", imagineDragonsAlbumUrl, false ); // false for synchronous request
	request.setRequestHeader("Content-Type", "application/json");
	request.setRequestHeader("Authorization", "Bearer " + accessToken);
	request.send( null );
	// divForPlaylist.innerHTML = request.responseText;
	playlist = JSON.parse(request.responseText);
	playlist.tracks.items.forEach(function(item)
	{
		divForPlaylist.innerHTML += JSON.stringify(item.track.name) + "<br>";
	});
}