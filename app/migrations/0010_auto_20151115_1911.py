# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0009_auto_20151115_1734'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseEnrollment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('grade', models.PositiveSmallIntegerField(default=0, blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='course_holder',
            field=models.ForeignKey(related_name='course_held', blank=True, to=settings.AUTH_USER_MODEL, null=True),
        ),
        migrations.AddField(
            model_name='courseenrollment',
            name='course',
            field=models.ForeignKey(related_name='enrollments', to='app.Course'),
        ),
        migrations.AddField(
            model_name='courseenrollment',
            name='user',
            field=models.ForeignKey(related_name='enrollments', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='courseenrollment',
            unique_together=set([('course', 'user')]),
        ),
    ]
