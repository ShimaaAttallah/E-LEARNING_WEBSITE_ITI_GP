from dataclasses import field
from rest_framework import serializers
from category.serializers import CategorySerializer
from course.models import Category, Course
from django.contrib.auth.models import User

# from category.serializers import Categoryerializer


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = ['course_name', 'course_instructor',
                  'course_description', 'course_image', 'course_category']

    def to_representation(self, instance):
        representation = super(
            CourseSerializer, self).to_representation(instance)
        representation['course_category'] = CategorySerializer(
            instance.course_category).data
        print(representation)
        return representation


class Course_all_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'course_name', 'course_instructor',
                  'course_description', 'course_image', 'course_category']

    def to_representation(self, instance):
        representation = super(
            Course_all_Serializer, self).to_representation(instance)
        representation['course_category'] = CategorySerializer(
            instance.course_category).data
        print(representation)
        return representation


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    # def to_representation(self, instance):
    #     representation = super(
    #         UserSerializer, self).to_representation(instance)
    #     representation['course_instructor'] = Course_all_Serializer(
    #         instance.course_instructor).data
    #     print(representation)
    #     return representation
