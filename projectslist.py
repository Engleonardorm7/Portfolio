from portfolio.models import Project
from django.core.files import File
from django.conf import settings
import os

Project.objects.all().delete()

project1 = Project(
    title='Portfolio', 
    description='Web page for project showcase with image upload and tool selection for portfolio display.', 
    url='https://github.com/Engleonardorm7/Portfolio',
    tools_box='django',
    tools_box2='python',
    tools_box3='html',
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/Portfolio.png?raw=true'
)


project1.save()

project2 = Project(
    title='weight tracking', 
    description='This is a weight tracking project using django', 
    url='https://github.com/Engleonardorm7/Django/tree/main/Gym_progression',
    tools_box='django',
    tools_box2='python',
    tools_box3='html',
    
)
image_path = os.path.join(settings.MEDIA_ROOT, 'portfolio/images/shutterstock_605291450.jpg')

with open(image_path, 'rb') as file:
    project2.image.save('shutterstock_605291450.jpg', File(file), save=True)


project2.save()
