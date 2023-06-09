# Generated by Django 4.2 on 2023-04-04 03:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='')),
                ('description', models.TextField(verbose_name='')),
                ('image', models.ImageField(upload_to='blog/images', verbose_name='')),
                ('date', models.DateField(verbose_name=datetime.date.today)),
            ],
        ),
    ]
