__author__ = 'Denis'
from django.db import models
from question_collection import QuestionCollection


class Question(models.Model):
    text = models.CharField(max_length=500)
    type = models.CharField(max_length=45)
    answer = models.CharField(max_length=500)
    question_collection = models.ForeignKey('QuestionCollection', related_name='questions')

    def __unicode__(self):
        return self.text