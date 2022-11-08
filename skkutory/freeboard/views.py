from django.shortcuts import render
from rest_framework.response import Response
from .models import Freeboard
from rest_framework.views import APIView
from .serializers import FreeboardSerializer

class FreeboardListAPI(APIView):
    def get(self, request):
        queryset = Freeboard.objects.all()
        print(queryset)
        serializer = FreeboardSerializer(queryset, many=True)
        return Response(serializer.data)
