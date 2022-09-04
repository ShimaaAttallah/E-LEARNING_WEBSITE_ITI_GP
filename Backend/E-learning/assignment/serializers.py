from rest_framework import serializers
from .models import Assignment


class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id','upload_assign','assignment_video']


class AssignmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id','upload_assign','grades']
        # fields = ['id','upload_assign']


class UpdategradSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id','grades']