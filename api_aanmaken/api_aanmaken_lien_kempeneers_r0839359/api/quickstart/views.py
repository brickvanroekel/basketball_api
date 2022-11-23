from rest_framework import viewsets
from .models import FootballGames
from .serializers import FootballSerializer

class FootballViewSet(viewsets.ModelViewSet):
    queryset = FootballGames.objects.all()
    serializer_class = FootballSerializer
