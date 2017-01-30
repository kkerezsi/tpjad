__author__ = 'Denis'
from rest_framework import viewsets
from app.models import Test, TookTest
from app.serializers import TestSerializer, TookTestSerializer


class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer


class TookTestViewSet(viewsets.ModelViewSet):
    queryset = TookTest.objects.all()
    serializer_class = TookTestSerializer

    def get_queryset(self):
        queryset = super(TookTestViewSet, self).get_queryset()
        user_id = self.request.query_params.get('user', None)
        if user_id is None:
            return queryset
        return queryset.filter(user__id=user_id)