# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20151115_1608'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='date_end',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='date_start',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
