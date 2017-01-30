__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import CourseSerializer, CourseEnrollmentSerializer
from app.models import Course, CourseEnrollment


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseEnrollmentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows course enrollments to be viewed or edited
    """
    queryset = CourseEnrollment.objects.all()
    serializer_class = CourseEnrollmentSerializer
