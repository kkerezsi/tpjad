__author__ = 'Denis'
from django.db import models
from course import Course


class CourseGroup(models.Model):
    name = models.CharField(max_length=200)
    course = models.ForeignKey('Course', related_name='groups')

    def __unicode__(self):
        return self.name