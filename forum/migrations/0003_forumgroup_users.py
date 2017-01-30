# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forum', '0002_forumgroup'),
    ]

    operations = [
        migrations.AddField(
            model_name='forumgroup',
            name='users',
            field=models.ManyToManyField(related_name='forum_groups', to=settings.AUTH_USER_MODEL),
        ),
    ]
