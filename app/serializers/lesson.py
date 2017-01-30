from rest_framework import serializers
from app.models import Lesson, Course
from test import TestSerializer
__author__ = 'Denis'


class LessonSerializer(serializers.ModelSerializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    tests = TestSerializer(many=True, read_only=True)

    class Meta:
        model = Lesson
        fields = '__all__'
        depth = 1