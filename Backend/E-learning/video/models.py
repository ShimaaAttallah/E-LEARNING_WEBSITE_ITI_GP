from django.db import models
from course.models import Course
# Create your models here.


class Video(models.Model):
    title = models.CharField(max_length=70)
    url = models.FileField(upload_to='./media/video')
    created_at = models.DateTimeField(auto_now_add=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
