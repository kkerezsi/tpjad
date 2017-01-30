__author__ = 'Denis'
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from forum.serializers.discussion import DiscussionSerializer
from course import CourseEnrollmentSerializer, CourseSerializer
from event import EventSerializer

class UserSerializer(serializers.ModelSerializer):
    groups = serializers.PrimaryKeyRelatedField(queryset=Group.objects.all(), many=True)
    discussions = DiscussionSerializer(many=True, read_only=True)
    course_held = CourseSerializer(read_only=True, many=True)
    enrollments = CourseEnrollmentSerializer(many=True, read_only=True)
    events = EventSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'
        depth = 1


class GroupSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True, read_only=True)
    class Meta:
        model = Group
        fields = '__all__'
        depth = 1