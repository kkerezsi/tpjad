# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20151115_1655'),
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionCollection',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=50)),
                ('deadline', models.DateTimeField()),
                ('course', models.ForeignKey(to='app.Course')),
            ],
        ),
    ]
