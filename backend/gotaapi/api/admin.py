from django.contrib import admin
from .models.comentario import Comentario
from .models.foro import Foro
from .models.planta import Planta
from .models.usuario import Usuario

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Foro)
admin.site.register(Comentario)
admin.site.register(Planta)