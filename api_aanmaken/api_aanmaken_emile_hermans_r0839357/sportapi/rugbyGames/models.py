from django.db import models

class RugbyGames(models.Model):
    home_team = models.CharField(max_length=100)
    away_team = models.CharField(max_length=100)
    home_score = models.IntegerField()
    away_score = models.IntegerField()
    referee_name = models.CharField(max_length=100)
    game_date = models.DateField()

    def __str__(self):
        return self.home_team, self.away_team