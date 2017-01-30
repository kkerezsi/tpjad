__author__ = 'horiagalbenu'
from forum.models import Message
from rest_framework import viewsets
from forum.serializers import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows messages to be viewed or edited
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
