"""elearning URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from app import views
from forum import views as forum_views


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'courses', views.CourseViewSet)
router.register(r'course-groups', views.CourseGroupViewSet)
router.register(r'question-collections', views.QuestionCollectionViewSet)
router.register(r'questions', views.QuestionViewSet)
router.register(r'departments', views.DepartmentViewSet)
router.register(r'messages', forum_views.MessageViewSet)
router.register(r'forum-groups', forum_views.ForumGroupViewSet)
router.register(r'forum-group-pages', forum_views.ForumGroupPageViewSet)
router.register(r'forum-posts', forum_views.ForumPostViewSet)
router.register(r'discussions', forum_views.DiscussionViewSet)
router.register(r'announcements', forum_views.AnnouncementViewSet)
router.register(r'enrollments', views.CourseEnrollmentViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'lessons', views.LessonViewSet)
router.register(r'tests', views.TestViewSet)
router.register(r'logs', views.LogViewSet)
router.register(r'homeworks', views.HomeworkViewSet)
router.register(r'exams', views.TookTestViewSet)
router.register(r'reads', forum_views.HasReadViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
]
