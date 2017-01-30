__author__ = 'Denis'
from rest_framework import serializers
from app.models import CourseGroup, Course
from forum.serializers.announcement import AnnouncementSerializer


class CourseGroupSerializer(serializers.ModelSerializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    announcements = AnnouncementSerializer(many=True, read_only=True)

    class Meta:
        model = CourseGroup
        fields = '__all__'
        depth = 1