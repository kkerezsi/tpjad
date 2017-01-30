__author__ = 'horiagalbenu'
from django.db import models
from django.utils import timezone
from course import Course
from django.contrib.auth.models import User


class Event(models.Model):
    description = models.CharField(max_length=1024)
    date_start = models.DateTimeField(default=timezone.now)
    date_end = models.DateTimeField(default=timezone.now)
    course = models.ForeignKey('Course', related_name='events', blank=True, null=True)
    user = models.ForeignKey(User, related_name='events', blank=True, null=True)

    def __unicode__(self):
        return self.description