from django.db import models

# Create your models here.
class Sport(models.Model):
    name = models.CharField(max_length=30)
    teamSize = models.IntegerField()
    gameDuration = models.IntegerField()
    goal = models.CharField(max_length=150)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name