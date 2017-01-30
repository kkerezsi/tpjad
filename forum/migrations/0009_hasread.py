# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forum', '0008_auto_20151115_1911'),
    ]

    operations = [
        migrations.CreateModel(
            name='HasRead',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('seen_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('announcement', models.ForeignKey(related_name='user_reads', to='forum.Announcement')),
                ('user', models.ForeignKey(related_name='read_announcements', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
