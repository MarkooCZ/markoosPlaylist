function spotifyLogin()
{
	var spotifyLoginWindow = window.open('https://accounts.spotify.com/authorize?client_id=clientID&redirect_uri=logged&response_type=code',
	 'Spotify Login', 'width=750, height=850');
}