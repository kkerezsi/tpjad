__author__ = 'Denis'
from django.db import models
from course import Course


class QuestionCollection(models.Model):
    title = models.CharField(max_length=200)
    type = models.CharField(max_length=50)
    deadline = models.DateTimeField(blank=True, null=True)
    course = models.ForeignKey('Course', related_name='question_collections')

    def __unicode__(self):
        return self.title