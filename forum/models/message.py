__author__ = 'horiagalbenu'
from django.db import models
from django.contrib.auth.models import User


class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages')
    receiver = models.ForeignKey(User, related_name='received_messages')
    text = models.CharField(max_length=256)

    def __unicode__(self):
        return 'from ' + unicode(self.sender) + ' to ' + unicode(self.receiver) + ' text ' + self.text
