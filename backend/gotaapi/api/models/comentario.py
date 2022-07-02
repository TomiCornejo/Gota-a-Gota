from distutils.command.upload import upload
from django.db import models
from .usuario import Usuario
from .foro import Foro

class Comentario(models.Model):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    foro = models.ForeignKey(Foro,on_delete=models.CASCADE)
    comentario = models.CharField(max_length=100)