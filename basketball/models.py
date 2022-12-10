from django.db import models

# Create your models here.
class Teams(models.Model):
    name = models.CharField(max_length=30, unique=True)
    gamesPlayed = models.IntegerField()
    wins = models.IntegerField()
    losses = models.IntegerField()
    ranking = models.IntegerField()

    def __str__(self):
        return self.name

class Players(models.Model):
    name = models.CharField(max_length=30)
    team = models.ForeignKey(Teams, on_delete=models.SET_NULL, to_field='name', null=True)
    number = models.IntegerField()
    position = models.CharField(max_length=5)
    height = models.IntegerField()
    weight = models.IntegerField()
    country = models.CharField(max_length=30)

class Games(models.Model):
    homeTeam = models.CharField(max_length=30)
    roadTeam = models.CharField(max_length=30)
    homeTeamPoints = models.IntegerField()
    roadTeamPoints = models.IntegerField()
    date = models.DateField()

