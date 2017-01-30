__author__ = 'Denis'
from django.db import models
from django.utils import timezone
from department import Department
from django.contrib.auth.models import User


class Course(models.Model):
    name = models.CharField(max_length=200)
    date_start = models.DateTimeField(default=timezone.now)
    date_end = models.DateTimeField(blank=True, null=True)
    department = models.ForeignKey('Department', related_name='courses', blank=True, null=True)
    content = models.TextField(null=True)	
    contact = models.CharField(max_length=200, null=True)
    syllabus = models.TextField(null=True)
    course_holder = models.ForeignKey(User, related_name='course_held', blank=True, null=True)

    def __unicode__(self):
        return self.name


class CourseEnrollment(models.Model):
    course = models.ForeignKey('Course', related_name='enrollments')
    user = models.ForeignKey(User, related_name='enrollments')
    grade = models.PositiveSmallIntegerField(blank=True, default=0)

    class Meta:
        unique_together = (
            'course',
            'user',
        )

    def __unicode__(self):
        return 'course ' + unicode(self.course) + ' student ' + unicode(self.user)
