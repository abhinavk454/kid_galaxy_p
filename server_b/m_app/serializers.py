# this will convert modelinstance to json format

from django.db.models import fields
from rest_framework import serializers
from .models import Data_m


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data_m
        fields = ['datas']
