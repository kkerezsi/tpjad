__author__ = 'Denis'
from app.serializers.users import UserSerializer, GroupSerializer
from course import CourseSerializer, CourseEnrollmentSerializer
from course_group import CourseGroupSerializer
from questions_collection import QuestionCollectionSerializer
from question import QuestionSerializer
from department import DepartmentSerializer
from event import EventSerializer
from lesson import LessonSerializer
from test import TestSerializer, TookTestSerializer
from log import LogSerializer
from homework import HomeworkSerializer