__author__ = 'Denis'
from rest_framework import serializers
from app.models import Department
from course import CourseSerializer


class DepartmentSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True, read_only=True)

    class Meta:
        model = Department
        fields = '__all__'
        depth = 1