# Generated by Django 4.2.6 on 2024-09-30 15:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_remove_project_tools_box2_remove_project_tools_box3_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='image2',
        ),
    ]