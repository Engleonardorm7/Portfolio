from portfolio.models import Project

project1 = Project(
    title='Portfolio', 
    description='Web page for project showcase with image upload and tool selection for portfolio display.', 
    url='https://github.com/Engleonardorm7/Portfolio')
project1.image.save('media/portfolio/images/Portfolio.png', open('media/portfolio/images/Portfolio.png', 'rb'), 
save=True)
tools_box='django'
tools_box2='python'
tools_box3='html'


project1.save()

project2 = Project(title='Weight', description='Aplicación para trackear peso')
project2.save()