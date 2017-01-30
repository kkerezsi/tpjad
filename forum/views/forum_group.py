__author__ = 'horiagalbenu'
from forum.models import ForumGroup
from forum.serializers import ForumGroupSerializer
from rest_framework import viewsets


class ForumGroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows forum groups to be viewed or edited
    """
    queryset = ForumGroup.objects.all()
    serializer_class = ForumGroupSerializer