from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DataSerializer
from .models import Data_m


class DataView(viewsets.ModelViewSet):
    serializer_class = DataSerializer
    queryset = Data_m.objects.all()
