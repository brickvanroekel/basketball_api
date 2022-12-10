from rest_framework import serializers
from .models import Teams, Players, Games

#Serializers
class TeamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teams
        fields = ('id', 'name', 'gamesPlayed', 'wins', 'losses', 'ranking')

class PlayersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ('id', 'name', 'team', 'number', 'position', 'height' , 'weight', 'country')

class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ('id', 'homeTeam', 'roadTeam', 'homeTeamPoints', 'roadTeamPoints', 'date')