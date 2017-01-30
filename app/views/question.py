__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import QuestionSerializer
from app.models import Question


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
