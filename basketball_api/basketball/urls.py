from django.urls import path, include 
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('teams', views.TeamsView)
router.register('players', views.PlayersView)
router.register('games', views.GamesView)




urlpatterns = [  
    path('',include(router.urls))
]