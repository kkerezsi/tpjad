# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20151115_1710'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('text', models.CharField(max_length=500)),
                ('type', models.CharField(max_length=45)),
                ('answer', models.CharField(max_length=500)),
                ('question_collection', models.ForeignKey(related_name='questions', to='app.QuestionCollection')),
            ],
        ),
    ]
