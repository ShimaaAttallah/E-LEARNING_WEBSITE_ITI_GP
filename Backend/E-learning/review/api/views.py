from ast import Delete
from review.models import Review
from review.api.serializers import ReviewSerlizer
from rest_framework import generics

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .permissions import IstheUser

# -------------------create--view------------------------
class ReviewAPIListView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerlizer
    authentication_classes = [TokenAuthentication]
    
# -------------------update single review--delete review------------------------
# Retrieve---Show
# Destroy---Delete
# Update---Update
class SingleReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IstheUser]
    serializer_class = ReviewSerlizer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'id'
    authentication_classes = [TokenAuthentication]

# ------------------list review for each course-------------------
class CourseReview(generics.ListAPIView):
    serializer_class = ReviewSerlizer
    def get_queryset(self):
        course_id= self.kwargs['course_id']
        return Review.objects.filter(course_id=course_id)
        # return Review.objects.filter(course=course)
