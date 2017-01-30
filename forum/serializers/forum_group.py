__author__ = 'horiagalbenu'
from forum.models import ForumGroup
from rest_framework import serializers


class ForumGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumGroup
        fields = '__all__'
        depth = 1
