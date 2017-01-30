__author__ = 'horiagalbenu'
from django.db import models
from forum_group import ForumGroup


class ForumGroupPage(models.Model):
    title = models.CharField(max_length=128)
    forum_group = models.ForeignKey(ForumGroup, related_name='pages')

    def __unicode__(self):
        return self.title
