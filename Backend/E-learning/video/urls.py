from django.urls import include, path
from course import views
from video.views import *
urlpatterns = [

    path('<int:pk>', GetVideo.as_view()),
    path('upload', UploadVideo.as_view()),
    path('list/<int:id>', GetListVideo.as_view()),

]
