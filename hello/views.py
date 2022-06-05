import requests
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


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
