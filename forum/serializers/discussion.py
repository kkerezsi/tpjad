__author__ = 'horiagalbenu'
from forum.models import Discussion
from rest_framework import serializers
from forum_group_page import ForumGroupPage
from django.contrib.auth.models import User
from forum_post import ForumPostSerializer


class DiscussionSerializer(serializers.ModelSerializer):
    forum_group_page = serializers.PrimaryKeyRelatedField(queryset=ForumGroupPage.objects.all())
    poster = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    forum_posts = ForumPostSerializer(many=True, read_only=True)

    class Meta:
        model = Discussion
        fields = '__all__'
        depth = 1