# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_coursegroup'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursegroup',
            name='course',
            field=models.ForeignKey(related_name='groups', to='app.Course'),
        ),
    ]
