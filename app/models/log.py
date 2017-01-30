from django.utils import timezone

__author__ = 'Denis'
from django.db import models


class Log(models.Model):
    entity_id = models.IntegerField(null=True, blank=True)
    Entity_name = models.CharField(max_length=65)
    date_created = models.DateTimeField(default=timezone.now)
    description = models.CharField(max_length=255)