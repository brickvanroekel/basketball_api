from django.shortcuts import render
from rest_framework import viewsets
from .models import Sport
from .serializers import SportSerializer

# Create your views here.
class SportView(viewsets.ModelViewSet):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer