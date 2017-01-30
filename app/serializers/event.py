__author__ = 'horiagalbenu'
from rest_framework import serializers
from app.models import Course, Event
from django.contrib.auth.models import User

class EventSerializer(serializers.ModelSerializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all(), required=False)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), required=False)

    class Meta:
        model = Event
        fields = '__all__'
        depth = 1