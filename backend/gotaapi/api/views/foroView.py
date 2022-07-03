from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from ..models.foro import Foro

class ForoSerializer(serializers.ModelSerializer):
    img = Base64ImageField(required=False)
    class Meta:
        model =Foro
        fields = '__all__'
    
@api_view(['GET','POST'])
def foro_api_view(request):
    
    if request.method == 'GET':
        foros = Foro.objects.all()
        foros_serializer = ForoSerializer(foros,many = True)
        return Response(foros_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        foro_serializer = ForoSerializer(data = request.data)
        if foro_serializer.is_valid():
            foro_serializer.save()
            return Response(foro_serializer.data,status = status.HTTP_201_CREATED)
        return Response(foro_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def foro_detail_api_view(request,pk=None):
    
    foro = Foro.objects.filter(id = pk).first()
    if foro:
    
        if request.method == 'GET':
            foro_serializer = ForoSerializer(foro)
            return Response(foro_serializer.data,status = status.HTTP_200_OK)

        elif request.method == 'PUT':
            foro_serializer = ForoSerializer(foro,data = request.data)
            if foro_serializer.is_valid():
                foro_serializer.save()
                return Response(foro_serializer.data,status = status.HTTP_200_OK)
            return Response(foro_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            foro.img.delete(save=True)
            foro.delete()
            return Response({'message':'Foro deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'Foro not found'},status = status.HTTP_400_BAD_REQUEST)