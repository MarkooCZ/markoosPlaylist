window.onload = function()
{
	var hiddenAT = document.getElementById("acccessToken");
	// var hiddenRT = document.getElementById("refreshToken");
	var accessToken = hiddenAT.data;
	// var refreshToken = hiddenRT.data;
	// window.top.postMessage("hi", "*"); Does not work, I can't get reference to the parent window
	var divForPlaylist = document.getElementById("insertPlaylist")
	var imagineDragonsAlbumUrl = "https://api.spotify.com/v1/albums/4fZIyJn2wKb51QPNnWYnqt";

	var request = new XMLHttpRequest();
	request.open( "GET", imagineDragonsAlbumUrl, false ); // false for synchronous request
	request.setRequestHeader("Content-Type", "application/json");
	request.setRequestHeader("Authorization", "Bearer " + accessToken);
	request.send( null );
	divForPlaylist.innerHTML = request.responseText;
}