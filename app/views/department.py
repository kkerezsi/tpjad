__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import DepartmentSerializer
from app.models import Department


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
