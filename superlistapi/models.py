from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=255)
	iscompleted = models.BooleanField(default=False)
	user = models.ForeignKey(User, related_name='todos', null=True)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)

	class Meta:
		ordering = ('created',)
