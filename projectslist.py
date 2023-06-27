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
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/Restaurant_corta_API_hHA3ZPs.png?raw=true',
    tools_box='django',
    tools_box2='python',
    tools_box3='html',
    
)


project2.save()
