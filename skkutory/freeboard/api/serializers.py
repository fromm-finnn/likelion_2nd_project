from rest_framework import serializers
from ..models import Freeboard
#로그인 관련


class FreeboardSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Freeboard        # Freeboard 모델 사용
        fields = '__all__'            # 모든 필드 포함
