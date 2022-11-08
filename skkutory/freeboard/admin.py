from django.contrib import admin

# Register your models here.

from .models import Freeboard
from .models import Comment

admin.site.register(Freeboard)
admin.site.register(Comment)