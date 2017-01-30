__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import QuestionCollectionSerializer
from app.models import QuestionCollection


class QuestionCollectionViewSet(viewsets.ModelViewSet):
    queryset = QuestionCollection.objects.all()
    serializer_class = QuestionCollectionSerializer
