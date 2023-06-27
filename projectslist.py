from portfolio.models import Project

project1 = Project(
    title='Portfolio', 
    description='Web page for project showcase with image upload and tool selection for portfolio display.', 
    url='https://github.com/Engleonardorm7/Portfolio',
    tools_box='django',
    tools_box2='python',
    tools_box3='html'),
project1.image.save('media/portfolio/images/Portfolio.png', open('media/portfolio/images/Portfolio.png', 'rb'), 
save=True)
project1.save()

project2 = Project(
    title='weight tracking', 
    description='This is a weight tracking project using django', 
    url='https://github.com/Engleonardorm7/Django/tree/main/Gym_progression',
    tools_box='django',
    tools_box2='python',
    tools_box3='html'),
project1.image.save('media/portfolio/images/gym_progression.png', open('media/portfolio/images/gym_progression.png', 'rb'), 
save=True)
project1.save()
