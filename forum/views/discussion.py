__author__ = 'horiagalbenu'
from forum.models import Discussion
from forum.serializers import DiscussionSerializer
from rest_framework import viewsets


class DiscussionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows discussions to be viewed or edited
    """
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer
