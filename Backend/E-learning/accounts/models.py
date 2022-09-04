from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from rest_framework.authtoken.models import Token

# Create your models here.
from django.dispatch import receiver
from django.db.models.signals import post_save


class ResetPasswordModel(models.Model):
    user = models.ForeignKey(
        User, related_name='resetuser', on_delete=models.CASCADE)
    check = models.IntegerField()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def TokenCreate(sender, instance, created, **kwargs):
    if created:
        Token.objects.create(user=instance)
