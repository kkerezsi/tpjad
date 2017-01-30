__author__ = 'Denis'
from app.models import Homework
from rest_framework import serializers


class HomeworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homework
        fields = '__all__'
        depth = 1