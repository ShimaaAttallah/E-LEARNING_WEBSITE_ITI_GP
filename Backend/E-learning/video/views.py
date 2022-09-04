from .serializers import VideoSerializer
from .models import *
from .permissions import IstheUser, IsInstractor
from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView
from rest_framework.authentication import TokenAuthentication


class GetVideo(RetrieveAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [IsInstractor, IstheUser]
    authentication_classes = [TokenAuthentication, ]


class GetListVideo(ListAPIView):
    serializer_class = VideoSerializer
    permission_classes = [IsInstractor, ]
    authentication_classes = [TokenAuthentication, ]

    def get_queryset(self):
        return Video.objects.filter(course__id=self.kwargs['id'])


class UploadVideo(CreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [IsInstractor]
    authentication_classes = [TokenAuthentication, ]
# class GetCourseVideos(ListAPIView):
#     serializer_class = VideoSerializer
#     permission_classes = [IsInstractor, IstheUser]
#     authentication_classes = [TokenAuthentication, ]