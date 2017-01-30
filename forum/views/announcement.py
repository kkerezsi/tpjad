__author__ = 'horiagalbenu'
from rest_framework import viewsets
from forum.models import Announcement, HasRead
from forum.serializers import AnnouncementSerializer, HasSeenSerializer


class AnnouncementViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows announcements to be viewed or edited
    """
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer


class HasReadViewSet(viewsets.ModelViewSet):
    queryset =HasRead.objects.all()
    serializer_class = HasSeenSerializer

    def get_queryset(self):
        queryset = super(HasReadViewSet, self).get_queryset()
        user_id = self.request.query_params.get('user', None)
        if user_id is None:
            return queryset
        return queryset.filter(user__id=user_id)