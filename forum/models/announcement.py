from django.utils import timezone

__author__ = 'horiagalbenu'
from django.db import models
from app.models.course_group import CourseGroup
from django.contrib.auth.models import User


class Announcement(models.Model):
    course_group = models.ForeignKey(CourseGroup, related_name='announcements', blank=True, null=True)
    title = models.CharField(max_length=128)
    text = models.CharField(max_length=4096)


class HasRead(models.Model):
    user = models.ForeignKey(User, related_name='read_announcements')
    announcement = models.ForeignKey(Announcement, related_name='user_reads')
    seen_date = models.DateTimeField(default=timezone.now)