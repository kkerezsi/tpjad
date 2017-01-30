from django.utils import timezone
from django.contrib.auth.models import User

__author__ = 'Denis'
from django.db import models
from app.models import Lesson

class Test(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=255)
    deadline_date = models.DateTimeField(blank=True, null=True)
    test_type = models.CharField(max_length=65)
    password = models.CharField(max_length=511)
    max_grade = models.IntegerField(default=0)
    test_code = models.TextField(null=True)	
    last_grade = models.IntegerField(blank=True, null=True)
    lesson = models.ForeignKey('Lesson', related_name='tests')


class TookTest(models.Model):
    user = models.ForeignKey(User, related_name='tests')
    test = models.ForeignKey('Test', related_name='grades')
    date = models.DateTimeField(default=timezone.now)
    grade = models.FloatField(default=5.0)
