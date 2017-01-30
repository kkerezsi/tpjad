__author__ = 'Denis'
from rest_framework import serializers
from app.models import QuestionCollection, Course
from question import QuestionSerializer


class QuestionCollectionSerializer(serializers.ModelSerializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    questions = QuestionSerializer(read_only=True, many=True)

    class Meta:
        model = QuestionCollection
        fields = '__all__'
        depth = 1

