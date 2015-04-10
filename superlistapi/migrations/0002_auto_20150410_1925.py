# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('superlistapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='updated',
            field=models.DateTimeField(default=datetime.datetime(2015, 4, 10, 19, 25, 1, 555194, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='todo',
            name='created',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
