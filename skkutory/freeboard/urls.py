from django.urls import path
from .views import FreeboardList, FreeboardDetail

urlpatterns = [
    path('freeboards/', FreeboardList, name='post_list'),
    path('freeboards/<int:pk>', FreeboardDetail, name='post_detail'),
]