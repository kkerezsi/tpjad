# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forum', '0005_forumpost'),
    ]

    operations = [
        migrations.CreateModel(
            name='Discussion',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('forum_group_page', models.ForeignKey(related_name='discussions', to='forum.ForumGroupPage')),
                ('poster', models.ForeignKey(related_name='discussions', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='forumpost',
            name='forum_group_page',
        ),
        migrations.AddField(
            model_name='forumpost',
            name='discussion',
            field=models.ForeignKey(related_name='forum_posts', to='forum.Discussion', null=True),
        ),
    ]
