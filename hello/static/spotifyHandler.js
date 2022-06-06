function spotifyLogin()
{
	var clientID = "70b92749bfca4ddda75007ee40cc841d";
	var redirectURL = "https://markoosplaylist.herokuapp.com/logged"
	var spotifyLoginWindow = window.open('https://accounts.spotify.com/authorize?client_id=' + clientID + 
		'&redirect_uri=' + redirectURL + '&response_type=code',
	 'Spotify Login', 'width=750, height=850');
}

window.onload = function()
{
	// to be used
}

window.addEventListener('message', event =>
{
	if (event.origin.startsWith('https://markoosplaylist.herokuapp.com'))
	{
		// I will maybe finish some other day
	}
	else
	{
		return;
	}
});