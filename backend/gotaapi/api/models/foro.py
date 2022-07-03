from distutils.command.upload import upload
from django.db import models
from .usuario import Usuario

class Foro(models.Model):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    titulo = models.CharField(max_length=55)
    texto = models.TextField()
    img = models.ImageField(blank='',default="",upload_to='img/')