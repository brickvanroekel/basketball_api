from rest_framework import serializers
from .models import FootballGames

class FootballSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FootballGames
        fields = ['id', 'url', 'home_team', 'away_team', 'home_score', 'away_score', 'game_start_time', 'game_end_time']