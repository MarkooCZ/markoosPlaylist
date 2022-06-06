function spotifyLogin()
{
	var clientID = "70b92749bfca4ddda75007ee40cc841d";
	var redirectURL = "https://markoosplaylist.herokuapp.com/logged"
	var spotifyLoginWindow = window.open('https://accounts.spotify.com/authorize?client_id=' + clientID + 
		'&redirect_uri=' + redirectURL + '&response_type=code',
	 'Spotify Login', 'width=750, height=850');
	spotifyLoginWindow.onbeforunload = function()
	{
		var accessToken = localStorage.setItem("acccessToken");
		var refreshToken = localStorage.setItem("refreshToken");
		var divForPlaylist = document.getElementById("insertPlaylist")
		var imagineDragonsAlbumUrl = "https://api.spotify.com/v1/albums/4fZIyJn2wKb51QPNnWYnqt";

		var request = new XMLHttpRequest();
    	request.open( "GET", imagineDragonsAlbumUrl, false ); // false for synchronous request
    	request.setRequestHeader("Content-Type", "application/json");
    	request.setRequestHeader("Authorization", "Bearer" + accessToken);
    	request.send( null );
    	divForPlaylist.innerHTML = request.responseText;
	}
}