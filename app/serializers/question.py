__author__ = 'Denis'
from rest_framework import serializers
from app.models import Question, QuestionCollection


class QuestionSerializer(serializers.ModelSerializer):
    question_collection = serializers.PrimaryKeyRelatedField(queryset=QuestionCollection.objects.all())

    class Meta:
        model = Question
        fields = '__all__'
        depth = 1