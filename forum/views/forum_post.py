__author__ = 'horiagalbenu'
from forum.models import ForumPost
from forum.serializers import ForumPostSerializer
from rest_framework import viewsets


class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer