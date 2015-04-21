from django.contrib.auth.models import User, Group
from rest_framework import serializers
from superlistapi.models import Todo

class UserSerializer(serializers.HyperlinkedModelSerializer):
    todos = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='todo-detail'
    )

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'password', 'groups', 'todos')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class TodoSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Todo
		fields = ('id','name', 'iscompleted', 'user')

