# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_questioncollection'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questioncollection',
            name='course',
            field=models.ForeignKey(related_name='question_collections', to='app.Course'),
        ),
        migrations.AlterField(
            model_name='questioncollection',
            name='deadline',
            field=models.DateTimeField(null=True, blank=True),
        ),
    ]
