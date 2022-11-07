from rest_framework import serializers
from .models import RugbyGames

class RugbyGamesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RugbyGames
        fields = ('id', 'url', 'home_team', 'away_team', 'home_score', 'away_score', 'referee_name', 'game_date')