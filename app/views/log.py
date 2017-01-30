__author__ = 'Denis'
from rest_framework import viewsets
from app.serializers import LogSerializer
from app.models import Log


class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer