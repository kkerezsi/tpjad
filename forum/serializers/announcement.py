from django.contrib.auth.models import User

__author__ = 'horiagalbenu'
from forum.models import Announcement, HasRead
from rest_framework import serializers
from app.models.course_group import CourseGroup


class HasSeenSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    announcement = serializers.PrimaryKeyRelatedField(queryset=Announcement.objects.all())

    class Meta:
        model = HasRead
        fields = '__all__'
        depth = 1


class AnnouncementSerializer(serializers.ModelSerializer):
    course_group = serializers.PrimaryKeyRelatedField(queryset=CourseGroup.objects.all(), required=False)
    user_reads = HasSeenSerializer(many=True, read_only=True)

    class Meta:
        model = Announcement
        fields = '__all__'
        depth = 1
