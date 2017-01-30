__author__ = 'horiagalbenu'
from rest_framework import viewsets
from app.serializers import EventSerializer
from app.models import Event


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer