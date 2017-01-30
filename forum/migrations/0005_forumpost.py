# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forum', '0004_forumgrouppage'),
    ]

    operations = [
        migrations.CreateModel(
            name='ForumPost',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('time_stamp', models.DateTimeField(auto_now_add=True)),
                ('type', models.CharField(max_length=64)),
                ('text', models.CharField(max_length=4096)),
                ('forum_group_page', models.ForeignKey(related_name='forum_posts', to='forum.ForumGroupPage')),
                ('poster', models.ForeignKey(related_name='forum_posts', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
