from distutils.command.upload import upload
from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=55,unique=True)
    clave = models.CharField(max_length=255)
    admin = models.BooleanField(default=False)
    icono = models.ImageField(null=True,upload_to='img/')