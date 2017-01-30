# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0003_forumgroup_users'),
    ]

    operations = [
        migrations.CreateModel(
            name='ForumGroupPage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('forum_group', models.ForeignKey(related_name='pages', to='forum.ForumGroup')),
            ],
        ),
    ]
