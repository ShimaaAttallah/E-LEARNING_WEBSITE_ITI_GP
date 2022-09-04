from .models import Assignment
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from .serializers import AssignmentSerializer,AssignmentsSerializer,UpdategradSerializer
from rest_framework import status, filters
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, UpdateAPIView
from .permissions import IstheUser,IsInstractor
from rest_framework.authentication import TokenAuthentication
from django.http import Http404

# Create your views here.
#----------------------------------------------------------to get all assignments only ---------------------------->
class Assignment_List(APIView):
    def get(self,request):
        assigment = Assignment.objects.all()
        serializer = AssignmentsSerializer(assigment, many=True)
        return Response(serializer.data)

#-------------------------------------------------------to get all assignments ---------------------------------------->
class Assignments_List(APIView):
    def get(self,request,course_id):
        assigment = Assignment.objects.filter(assignment_video__course=course_id,grades__isnull=True)
        serializer = AssignmentsSerializer(assigment, many=True)
        return Response(serializer.data)

#----------------------------------------------------------to upload assignment ------------------------------------>
class Uploade_assignment(CreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication, ]

#--------------------------------------------------------to update gread in assignment :---------------------------->
class Update_assignment(UpdateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = UpdategradSerializer
    # permission_classes = [IsInstractor]
    # authentication_classes = [TokenAuthentication]




