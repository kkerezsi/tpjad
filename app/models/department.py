__author__ = 'Denis'
from django.db import models


class Department(models.Model):
    name = models.CharField(max_length=45)

    def __unicode__(self):
        return self.name