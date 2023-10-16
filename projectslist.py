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

project11 = Project(
    title='Canvas API', 
    description='This project aims to read and update student grades in Canvas based on an Excel file.', 
    url='https://github.com/Engleonardorm7/Canvas-API',
    image='https://github.com/Engleonardorm7/Portfolio/blob/main/media/portfolio/images/scrapping%20from%20bbc.png?raw=true',
    tools_box='python',
      
)
project11.save()


project2 = Project(
    title='Restaurant API', 
    description='This is a Django REST API that allows you to interact with a simple restaurant management system.', 
    url='https://github.com/Engleonardorm7/RestaurantProjectAPI',
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/Restaurant_API.png?raw=true',
    tools_box='django',
    tools_box2='python',   
)
project2.save()

project3 = Project(
    title='Weight tracking', 
    description='This is a weight tracking project using django', 
    url='https://github.com/Engleonardorm7/Django/tree/main/Gym_progression',
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/gym_progression.png?raw=true',
    tools_box='django',
    tools_box2='python',
    tools_box3='html',
    
)
project3.save()

project4 = Project(
    title='Twitter API', 
    description='This is a twitter api clone developed in FastAPI Features included: Data validation, CRUD of users, CRUD of Tweets.', 
    url='https://github.com/Engleonardorm7/Twitter-API-FastApi',
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/Twitter_API.png?raw=true',
    tools_box='django',
    tools_box2='fastAPI',    
)
project4.save()

project5 = Project(
    title='Survey', 
    description='Survey on the consumption of different types of protein', 
    url='https://github.com/Engleonardorm7/Survery-Django',
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/Survey_Django_N0rYy4H.png?raw=true',
    tools_box='django',
    tools_box2='python',
    tools_box3='html',
    
)
project5.save()

project6 = Project(
    title='TO DO LIST', 
    description='A Flask application that allows the user to perform basic tasks on a todo list.', 
    url='https://github.com/Engleonardorm7/Flask',
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/TO_DO_LIST.png?raw=true',
    tools_box='Flask',
    tools_box2='python',    
)
project6.save()

project7 = Project(
    title='Movies-CRUD', 
    description='This project is a REST API made with FastAPI. To create, read, update and delete movies.', 
    url='https://github.com/Engleonardorm7/Movies_CRUD_FastAPI',
    image='https://github.com/Engleonardorm7/Portfolio/blob/Deploy/media/portfolio/images/Movies-CRUD-API.png?raw=true',
    tools_box='fastAPI',
    tools_box2='python',    
)
project7.save()

project8 = Project(
    title='Hindi Translator', 
    description='Script created using scraping to download the content of a web page and translate it into Hindi', 
    url='https://github.com/Engleonardorm7/html-to-hindi-translator',
    image='https://github.com/Engleonardorm7/Portfolio/blob/main/media/portfolio/images/Hindi.png?raw=true',
    tools_box='python',
      
)
project8.save()

project9 = Project(
    title='Move data from GitHub to Freshdesk', 
    description='Script created for Transfer all compatible fields from a GitHub User to the Freshdesk Contact', 
    url='https://github.com/Engleonardorm7/Python-Developer-test/tree/main/4',
    image='https://github.com/Engleonardorm7/Portfolio/blob/main/media/portfolio/images/github-freshdesk.png?raw=true',
    tools_box='python',
      
)
project9.save()

project10 = Project(
    title='Extract bbc articles', 
    description='Program created using selenium to extract articles from certain sections of https://www.bbc.com/news', 
    url='https://github.com/Engleonardorm7/Python-Developer-test/blob/main/3.py',
    image='https://github.com/Engleonardorm7/Portfolio/blob/main/media/portfolio/images/scrapping%20from%20bbc.png?raw=true',
    tools_box='python',
      
)
project10.save()

