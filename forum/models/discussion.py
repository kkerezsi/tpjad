__author__ = 'horiagalbenu'
from django.db import models
from forum_group_page import ForumGroupPage
from django.contrib.auth.models import User


class Discussion(models.Model):
    title = models.CharField(max_length=128)
    forum_group_page = models.ForeignKey(ForumGroupPage, related_name='discussions')
    poster = models.ForeignKey(User, related_name='discussions')

    def __unicode__(self):
        return self.title