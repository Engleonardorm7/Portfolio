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
    tools_box3='html'
)

# Guardar la imagen
image_path = os.path.join(settings.MEDIA_ROOT, 'portfolio/images/Portfolio.png')

with open(image_path, 'rb') as file:
    project1.image.save('Portfolio.png', File(file), save=True)

# Guardar el proyecto en la base de datos
project1.save()

project2 = Project(
    title='weight tracking', 
    description='This is a weight tracking project using django', 
    url='https://github.com/Engleonardorm7/Django/tree/main/Gym_progression',
    tools_box='django',
    tools_box2='python',
    tools_box3='html',
    image=os.path.join(settings.MEDIA_ROOT, 'portfolio/images/gym_progression.png')
)

project2.save()
