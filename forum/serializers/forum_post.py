__author__ = 'horiagalbenu'
from forum.models.forum_post import ForumPost
from rest_framework import serializers
from django.contrib.auth.models import User
from discussion import Discussion


class ForumPostSerializer(serializers.ModelSerializer):
    poster = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    discussion = serializers.PrimaryKeyRelatedField(queryset=Discussion.objects.all())

    class Meta:
        model = ForumPost
        fields = '__all__'
        depth = 1
