from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from ..models.planta import Planta

class PlantaSerializer(serializers.ModelSerializer):
    img = Base64ImageField(required=False)
    class Meta:
        model =Planta
        fields = '__all__'
    
@api_view(['GET','POST'])
def planta_api_view(request):
    
    if request.method == 'GET':
        plantas = Planta.objects.all()
        plantas_serializer = PlantaSerializer(plantas,many = True)
        return Response(plantas_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        planta_serializer = PlantaSerializer(data = request.data)
        if planta_serializer.is_valid():
            planta_serializer.save()
            return Response(planta_serializer.data,status = status.HTTP_201_CREATED)
        return Response(planta_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def planta_detail_api_view(request,pk=None):
    
    planta = Planta.objects.filter(id = pk).first()
    if planta:
    
        if request.method == 'GET':
            planta_serializer = PlantaSerializer(planta)
            return Response(planta_serializer.data,status = status.HTTP_200_OK)

        elif request.method == 'PUT':
            planta_serializer = PlantaSerializer(planta,data = request.data)
            if planta_serializer.is_valid():
                planta_serializer.save()
                return Response(planta_serializer.data,status = status.HTTP_200_OK)
            return Response(planta_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            planta.img.delete(save=True)
            planta.delete()
            return Response({'message':'Planta deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'Planta not found'},status = status.HTTP_400_BAD_REQUEST)