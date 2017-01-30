__author__ = 'Denis'
from app.views.users import UserViewSet, GroupViewSet
from course import CourseViewSet, CourseEnrollmentViewSet
from course_group import CourseGroupViewSet
from questions_collection import QuestionCollectionViewSet
from question import QuestionViewSet
from department import DepartmentViewSet
from event import EventViewSet
from lesson import LessonViewSet
from test import TestViewSet, TookTestViewSet
from log import LogViewSet
from homework import HomeworkViewSet