# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_auto_20151115_1911'),
        ('forum', '0007_announcement'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='course_group',
            field=models.ForeignKey(related_name='announcements', blank=True, to='app.CourseGroup', null=True),
        ),
        migrations.AlterField(
            model_name='forumpost',
            name='discussion',
            field=models.ForeignKey(related_name='forum_posts', blank=True, to='forum.Discussion', null=True),
        ),
    ]
