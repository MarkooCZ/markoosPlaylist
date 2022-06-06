window.onload = function()
{
	var hiddenAT = document.getElementById("acccessToken");
	var hiddenRT = document.getElementById("refreshToken");
	var accessToken = hiddenAT.data;
	var refreshToken = hiddenRT.data;
	localStorage.setItem("acccessToken", accessToken);
	localStorage.setItem("refreshToken", refreshToken);
	window.postMessage("hi", "https://accounts.spotify.com");
	window.close()
}