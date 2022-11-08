from django.shortcuts import render, HttpResponse
from .api.serializers import FreeboardSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
#from rest_framework.views import APIView
from .models import Freeboard
from django.http import Http404
from rest_framework import status

#DRF API view -> 두 종류의 wrapper 선택 가능.
#1. 함수형 : @api_view 데코레이터 사용
#2. 클래스형 : APIView 클래스 상속

#REST API 설계 시 반드시 지켜야 할 대원칙
# 첫째, URL은 정보의 자원을 포함할 것.
# 둘째, 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현할 것


#api_view 데코레이터! -> @api_view(['method명']) 형식으로 사용
@api_view(['GET', 'POST'])
def FreeboardList(request):
    #read
    if request.method == "GET": #get요청이 왔을 때
        freeboard = Freeboard.objects.all()
        serialzer = FreeboardSerializer(freeboard, many = True)
        #many = True -> Freeboard.objects.all()로 검색한 결과는 list 형태이다.
        # serializer는 한 개의 객체만 이해할 수 있고, 리스트는 이해할 수 없다.
        # 따라서 Many = True를 추가해서 중복 표현 값에 대한 List를 받게끔 하자.

        return Response(serialzer.data)
        #response의 정체는?
        # TemplateResponse 객체의 일종으로 렌더링되지 않은 컨텐츠를 가져오고
        # 클라이언트에게 반환할 올바른 컨텐츠 유형을 결정.
        # 마구잡이로 보낸 serializer.data를 각 목적에 맞게(여기선 GET요청이니 리소스 조회) 보여줄 수 있도록 하는 것!
    
    #create
    elif request.method == "POST": #post요청이 왔을 때
        serialzer = FreeboardSerializer(data=request.data)
        #request.data의 정체는?
        # DRF가 제공한다. 기존의 HttpRequest를 request객체로 확장하여, 더 유연한 요청 피싱을 제공
        # 핵심적 기능은 form에서 썼던 request.POST와 유사하지만 웹 API에 더 유용한 속성

        if serialzer.is_valid():
            #POST요청에 유효성 검사는 필수
            serialzer.save()
            return Response(serialzer.data, status = 201)
        return Response(serialzer.errors, status=404)
        #status의 정체는? DRF가 제공하는 HTTP상태코드. 에러 종류에 따라 더욱 명시적인 식별자를 제공

@api_view(['GET', 'PUT', 'DELETE'])
def FreeboardDetail(request, pk):
    try:
        freeboard = Freeboard.objects.get(pk=pk)
    except Freeboard.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    #우선 pk에 해당하는 Freeboard가 존재하는지 체크, 없다면 404 에러를 띄운다.

    #Detail
    if request.method == "GET": #만약 FreeboardDetail함수로 GET요청이 왔다면 해당 freeboard에 대한 세부정보를 보여주도록
        serializer = FreeboardSerializer(freeboard)
        return Response(serializer.data)

    #Update
    elif request.method == "PUT": #PUT요청이 오면 request요청이 들어온 freeboard를 serializer에 담아 유효성검사 후 save
        serializer = FreeboardSerializer(freeboard, data=request.data)
        #request요청이 들어온 그 post를 serializer 틀에 담아 가져옴

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    #Delete
    elif request.method == "Delete": #DELETE요청이 오면 해당 freeboard 삭제
        freeboard.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

'''
class FreeboardListAPI(APIView):
    def get(self, request):
        queryset = Freeboard.objects.all()
        print(queryset)
        serializer = FreeboardSerializer(queryset, many=True)
        return Response(serializer.data)
'''

def index(request):
    return HttpResponse('Welcome to Lonely Backend Side!')