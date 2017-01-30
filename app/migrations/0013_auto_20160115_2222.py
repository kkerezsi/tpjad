# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_homework_lesson_log_test_tooktest'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='contact',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='content',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='syllabus',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='lesson',
            name='content',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='lesson',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='test',
            name='test_code',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='date_end',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
