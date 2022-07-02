from distutils.command.upload import upload
from django.db import models

class Planta(models.Model):
    nombre = models.CharField(max_length=55)
    tipo = models.CharField(max_length=55)
    categoria = models.CharField(max_length=55)
    informacion = models.CharField(max_length=255)
    fuente = models.CharField(max_length=255)
    img = models.ImageField(blank='',default="",upload_to='img/')