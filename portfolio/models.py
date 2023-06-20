from django.db import models


class Project(models.Model):
    tools_choices=[
        ('django', 'Django'),
        ('javascript', 'JavaScript'),
        ('html', 'HTML'),
        ('css', 'CSS'),
        ('python', 'Python'),
        ('fastAPI','FastAPI'),
        ('Flask','Flask'),
    ]
    
    title = models.CharField(("Title"), max_length=100,)
    description = models.CharField(("Description"), max_length=250)
    image = models.ImageField(("Image"), upload_to='portfolio/images/')
    image2 = models.ImageField(("Image - (optional)"),upload_to='portfolio/images/', blank=True, null=True)
    url = models.URLField(blank=True)
    tools_box=models.CharField(max_length=255, choices=tools_choices, default='django', verbose_name='Used tools')
    tools_box2=models.CharField(max_length=255,choices=tools_choices, blank=True)
    tools_box3=models.CharField(max_length=255,choices=tools_choices, blank=True)
    tools_box4=models.CharField(max_length=255,choices=tools_choices, blank=True)
