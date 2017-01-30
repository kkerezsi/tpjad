__author__ = 'horiagalbenu'
from forum.models import ForumGroupPage
from rest_framework import serializers
from forum_group import ForumGroup
from discussion import DiscussionSerializer


class ForumGroupPageSerializer(serializers.ModelSerializer):
    forum_group = serializers.PrimaryKeyRelatedField(queryset=ForumGroup.objects.all())
    discussions = DiscussionSerializer(many=True, read_only=True)

    class Meta:
        model = ForumGroupPage
        fields = '__all__'
        depth = 1
