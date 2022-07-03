from django.urls import path
from .views.foroView import foro_api_view, foro_detail_api_view
from .views.plantaView import planta_api_view, planta_detail_api_view
from .views.usuarioView import usuario_api_view,usuario_detail_api_view, usuario_id_api_view


urlpatterns = [
    path('usuario/',usuario_api_view,name='usuario_api'),
    path('usuario/<str:nombre>/<str:clave>',usuario_detail_api_view,name='usuario_detail_api'),
    path('usuario/<int:pk>',usuario_id_api_view,name='usuario_id_api'),

    path('planta/',planta_api_view,name='planta_api'),
    path('planta/<int:pk>',planta_detail_api_view,name='planta_detail_api'),

    path('foro/',foro_api_view,name='foro_api'),
    path('foro/<int:pk>',foro_detail_api_view,name='foro_detail_api'),
]
