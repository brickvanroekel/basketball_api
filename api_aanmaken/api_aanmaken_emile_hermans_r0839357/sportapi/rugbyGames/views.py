from django.shortcuts import render
from rest_framework import viewsets
from .models import RugbyGames
from .serializers import RugbyGamesSerializer

class RugbyGamesView(viewsets.ModelViewSet):
    queryset = RugbyGames.objects.all()
    serializer_class = RugbyGamesSerializer
