__author__ = 'horiagalbenu'
from django.contrib.auth.models import User
from django.db import models


class ForumGroup(models.Model):
    name = models.CharField(max_length=128)
    type = models.CharField(max_length=64)
    users = models.ManyToManyField(User, related_name='forum_groups')

    def __unicode__(self):
        return self.name
