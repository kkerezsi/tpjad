from django.contrib.auth.models import User

__author__ = 'Denis'
from rest_framework import serializers
from app.models import Test, Lesson, TookTest


class TookTestSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    test = serializers.PrimaryKeyRelatedField(queryset=Test.objects.all())

    class Meta:
        model = TookTest
        fields = '__all__'
        depth = 1


class TestSerializer(serializers.ModelSerializer):
    lesson = serializers.PrimaryKeyRelatedField(queryset=Lesson.objects.all())
    grades = TookTestSerializer(many=True, read_only=True)

    class Meta:
        model = Test
        fields = '__all__'
        depth = 1