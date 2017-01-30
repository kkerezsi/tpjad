__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import CourseGroupSerializer
from app.models import CourseGroup


class CourseGroupViewSet(viewsets.ModelViewSet):
    queryset = CourseGroup.objects.all()
    serializer_class = CourseGroupSerializer