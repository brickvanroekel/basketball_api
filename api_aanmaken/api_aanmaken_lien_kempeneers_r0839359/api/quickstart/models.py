from django.db import models

class FootballGames(models.Model):
    home_team = models.CharField(max_length=50)
    away_team = models.CharField(max_length=50)
    home_score = models.IntegerField()
    away_score = models.IntegerField()
    game_start_time = models.DateField()
    game_end_time = models.DateField()
