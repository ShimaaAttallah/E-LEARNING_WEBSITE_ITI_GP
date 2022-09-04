from rest_framework import serializers
from review.models import Review

class ReviewSerlizer(serializers.ModelSerializer):
    class Meta:
        model = Review
        # fields = '__all__'
        # depth =1
        fields = ['id', 'rate', 'description', 'created_at', 'course', 'user']


