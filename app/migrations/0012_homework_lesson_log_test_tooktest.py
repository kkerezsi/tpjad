# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0011_event'),
    ]

    operations = [
        migrations.CreateModel(
            name='Homework',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=65)),
                ('description', models.CharField(max_length=255)),
                ('deadline', models.DateTimeField()),
                ('points', models.PositiveIntegerField(default=0)),
                ('type', models.CharField(max_length=31)),
            ],
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('date_start', models.DateTimeField(default=django.utils.timezone.now)),
                ('date_end', models.DateTimeField(null=True, blank=True)),
                ('course', models.ForeignKey(related_name='lessons', to='app.Course')),
            ],
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('entity_id', models.IntegerField(null=True, blank=True)),
                ('Entity_name', models.CharField(max_length=65)),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=255)),
                ('deadline_date', models.DateTimeField(null=True, blank=True)),
                ('test_type', models.CharField(max_length=65)),
                ('password', models.CharField(max_length=511)),
                ('max_grade', models.IntegerField(default=0)),
                ('last_grade', models.IntegerField(null=True, blank=True)),
                ('lesson', models.ForeignKey(related_name='tests', to='app.Lesson')),
            ],
        ),
        migrations.CreateModel(
            name='TookTest',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('grade', models.FloatField(default=5.0)),
                ('test', models.ForeignKey(related_name='grades', to='app.Test')),
                ('user', models.ForeignKey(related_name='tests', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
