from django.utils import timezone
from django.db import models
from course import Course

__author__ = 'Denis'


class Lesson(models.Model):
    name = models.CharField(max_length=200)
    date_start = models.DateTimeField(default=timezone.now)
    date_end = models.DateTimeField(blank=True, null=True)
    description = models.TextField(null=True)
    content = models.TextField(null=True)
    course = models.ForeignKey('Course', related_name='lessons')