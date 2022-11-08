from django.db import models

# Create your models here.


class Freeboard(models.Model):
    title = models.CharField(max_length=70)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    title = models.CharField(max_length=70)
    body = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title