import requests
import urllib
import base64
import json
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting

# Create your views here.
def index(request):
    # r = requests.get('https://httpbin.org/status/418')
    # print(r.text)
    # 4fZIyJn2wKb51QPNnWYnqt
    # r = requests.get("https://api.spotify.com/v1/playlists/4fZIyJn2wKb51QPNnWYnqt", headers={"Content-Type" : "application/json", "Authorization":""})
    return render(request, "index.html")

def loggedCallback(request):
    secretKey = settings.SECRET_KEY
    clientKey = settings.CLIENT_KEY

    urlRequestToken = "https://accounts.spotify.com/api/token"
    
    code = request.GET.get("code")
    grantType = "client_credentials"

    dataToPass = { "grant_type" : grantType}
    dataToPass = urllib.parse.urlencode(dataToPass)

    authorization = str(clientKey + ":" + secretKey)
    authorizationBytes = authorization.encode("utf-8")
    authorizationBytes64 = base64.b64encode(authorizationBytes)
    authorizationBytesDecoded = authorizationBytes64.decode("utf-8")
    authorizationPayload = 'Basic ' + str(authorizationBytesDecoded)

    contentType = "application/x-www-form-urlencoded"

    grantMeToken = requests.post(urlRequestToken, data=dataToPass, headers={"Authorization" : authorizationPayload, "Content-Type" : contentType})
    grantMeToken = json.loads(grantMeToken.text)
    token = grantMeToken["access_token"]

    return render(request, "loadToken.html", {"token" : token, "refreshToken" : tokenRefresh})

def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
