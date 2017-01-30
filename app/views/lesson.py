__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import LessonSerializer
from app.models import Lesson


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer