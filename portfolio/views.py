from rest_framework import generics
from django.shortcuts import render
from .models import Project
from .serializers import ProjectSerializer

# # Create your views here.

# def home(request):
#     projects= Project.objects.all()
#     return render(request, "home.html",{'projects':projects})

class ProjectList(generics.ListCreateAPIView):
    queryset=Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer