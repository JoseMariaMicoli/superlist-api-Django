from django.db import models

# Create your models here.
class Todo(models.Model):
	id = models.IntegerField(primary_key=True)
	name = models.CharField(max_length=255)
	iscompleted = models.BooleanField(default=False)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)

	class Meta:
		ordering = ('created',)