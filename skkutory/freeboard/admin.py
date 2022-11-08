from django.contrib import admin

# Register your models here.

from .models import Freeboard, Comment


admin.site.register(Freeboard)
admin.site.register(Comment)

