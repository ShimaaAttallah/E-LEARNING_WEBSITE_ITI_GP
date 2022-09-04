from rest_framework import serializers
from .models import Category

# Category Serializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['cat_name']


class AllCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'cat_name']
