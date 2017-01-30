__author__ = 'Denis'
from rest_framework import serializers
from app.models import Course, Department, CourseEnrollment
from course_group import CourseGroupSerializer
from questions_collection import QuestionCollectionSerializer
from event import EventSerializer
from lesson import LessonSerializer
from django.contrib.auth.models import User

class CourseEnrollmentSerializer(serializers.ModelSerializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = CourseEnrollment
        fields = '__all__'
        depth = 1

class CourseSerializer(serializers.ModelSerializer):
    groups = CourseGroupSerializer(many=True, read_only=True)
    question_collections = QuestionCollectionSerializer(many=True, read_only=True)
    department = serializers.PrimaryKeyRelatedField(queryset=Department.objects.all())
    course_holder = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    enrollments = CourseEnrollmentSerializer(many=True, read_only=True)
    events = EventSerializer(many=True, read_only=True)
    lessons = LessonSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'
        depth = 1
