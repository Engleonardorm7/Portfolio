# Generated by Django 4.2 on 2023-04-08 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_project_tools_box'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='tools_box2',
            field=models.CharField(blank=True, choices=[('django', 'Django'), ('javascript', 'JavaScript'), ('html', 'HTML'), ('css', 'CSS'), ('python', 'Python')], max_length=255),
        ),
        migrations.AddField(
            model_name='project',
            name='tools_box3',
            field=models.CharField(blank=True, choices=[('django', 'Django'), ('javascript', 'JavaScript'), ('html', 'HTML'), ('css', 'CSS'), ('python', 'Python')], max_length=255),
        ),
        migrations.AddField(
            model_name='project',
            name='tools_box4',
            field=models.CharField(blank=True, choices=[('django', 'Django'), ('javascript', 'JavaScript'), ('html', 'HTML'), ('css', 'CSS'), ('python', 'Python')], max_length=255),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.CharField(max_length=250, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(upload_to='portfolio/images/', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='project',
            name='image2',
            field=models.ImageField(blank=True, null=True, upload_to='portfolio/images/', verbose_name='Image - (optional)'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(max_length=100, verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='project',
            name='tools_box',
            field=models.CharField(choices=[('django', 'Django'), ('javascript', 'JavaScript'), ('html', 'HTML'), ('css', 'CSS'), ('python', 'Python')], default='django', max_length=255, verbose_name='Used tools'),
        ),
    ]
