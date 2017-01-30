__author__ = 'Denis'
from rest_framework import serializers
from app.models import Log


class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = '__all__'
        depth = 1