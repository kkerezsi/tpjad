# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('date_start', models.DateField(default=datetime.datetime(2015, 11, 15, 16, 7, 49, 630733, tzinfo=utc))),
                ('date_end', models.DateField(null=True, blank=True)),
            ],
        ),
    ]
