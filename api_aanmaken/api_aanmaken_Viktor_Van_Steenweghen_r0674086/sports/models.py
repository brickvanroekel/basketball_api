from django.db import models

# Create your models here.
class Sport(models.Model):
    name = models.CharField(max_length=50)
    players_in_team = models.IntegerField(default = 5)