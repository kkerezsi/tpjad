__author__ = 'horiagalbenu'
from forum.models import ForumGroupPage
from forum.serializers import ForumGroupPageSerializer
from rest_framework import viewsets


class ForumGroupPageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows forum group pages to be viewed or edited
    """
    queryset = ForumGroupPage.objects.all()
    serializer_class = ForumGroupPageSerializer
