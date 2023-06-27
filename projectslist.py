from portfolio.models import Project
from django.core.files import File

project1 = Project(
    title='Portfolio', 
    description='Web page for project showcase with image upload and tool selection for portfolio display.', 
    url='https://github.com/Engleonardorm7/Portfolio',
    tools_box='django',
    tools_box2='python',
    tools_box3='html'
)

# Guardar la imagen
with open('media/portfolio/images/Portfolio.png', 'rb') as file:
    project1.image.save('portfolio/images/Portfolio.png', File(file), save=True)

# Guardar el proyecto en la base de datos
project1.save()

project2 = Project(
    title='weight tracking', 
    description='This is a weight tracking project using django', 
    url='https://github.com/Engleonardorm7/Django/tree/main/Gym_progression',
    tools_box='django',
    tools_box2='python',
    tools_box3='html')
with open('media/portfolio/images/gym_progression.png', 'rb') as file:
    project2.image.save('portfolio/images/gym_progression.png', File(file), save=True)

project2.save()
