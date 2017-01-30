__author__ = 'horiagalbenu'
from django.db import models
from django.contrib.auth.models import User
from discussion import Discussion


class ForumPost(models.Model):
    poster = models.ForeignKey(User, related_name='forum_posts')
    discussion = models.ForeignKey(Discussion, related_name='forum_posts', blank=True, null=True)
    time_stamp = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=64)
    text = models.CharField(max_length=4096)

