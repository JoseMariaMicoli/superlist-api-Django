# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('superlistapi', '0002_auto_20150410_1925'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='iscompleted',
            field=models.BooleanField(default=False),
        ),
    ]
