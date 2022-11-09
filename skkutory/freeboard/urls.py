from django.urls import path
from .views import FreeboardList, FreeboardDetail, UserList, UserDetail
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('freeboards/', FreeboardList.as_view(), name='post_list'),
    path('freeboards/<int:pk>', FreeboardDetail.as_view(), name='post_detail'),

    path('user/', UserDetail.as_view()),
    path('user/<int:pk>', UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
#view에서 사용한 Format=None과 urls의 format_suffix_patterns는 세트로 붙어다니며
#파일 형식 접미사를 url에서 어떻게 할 것인가를 결정짓는다고 생각하면 될 것 같다.