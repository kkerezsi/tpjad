__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import HomeworkSerializer
from app.models import Homework


class HomeworkViewSet(viewsets.ModelViewSet):
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer