from rest_framework import serializers
from .models import Freeboard

class FreeboardSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Freeboard        # Freeboard 모델 사용
        fields = '__all__'            # 모든 필드 포함
