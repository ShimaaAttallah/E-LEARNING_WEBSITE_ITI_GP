from django.db import models
from django.contrib.auth.models import User
from video.models import Video
# Create your models here.
class Assignment(models.Model):
    grades = models.FloatField(null=True)
    upload_assign = models.FileField(upload_to=None, max_length=254)
    assignment_student = models.ManyToManyField(User,related_name = 'student')
    assignment_video = models.ForeignKey(Video,related_name = 'video',on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.username


# class Stuent_course(models.Model):
#     course = models.ManyToManyField(Course,related_name = 'course')
#     course = models.ManyToManyField(User,related_name = 'student')