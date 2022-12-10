from django.shortcuts import render
from rest_framework import viewsets
from .models import Teams, Players, Games
from .serializers import TeamsSerializer, PlayersSerializer, GamesSerializer

# Create your views here.
class TeamsView(viewsets.ModelViewSet):
    queryset = Teams.objects.all()
    serializer_class = TeamsSerializer

class PlayersView(viewsets.ModelViewSet):
    queryset = Players.objects.all()
    serializer_class = PlayersSerializer

class GamesView(viewsets.ModelViewSet):
    queryset = Games.objects.all()
    serializer_class = GamesSerializer