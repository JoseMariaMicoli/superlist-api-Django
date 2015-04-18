from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User, Group
from superlistapi.models import Todo
from rest_framework import viewsets
from superlistapi.serializers import UserSerializer, GroupSerializer, TodoSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be created, viewed, edited or deleted.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be created, viewed, edited or deleted.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allow todos to be created, viewed, edited, or deleted.
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer