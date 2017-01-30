from django.db import models
__author__ = 'Denis'


class Homework(models.Model):
    title = models.CharField(max_length=65)
    description = models.CharField(max_length=255)
    deadline = models.DateTimeField()
    points = models.PositiveIntegerField(default=0)
    type = models.CharField(max_length=31)
