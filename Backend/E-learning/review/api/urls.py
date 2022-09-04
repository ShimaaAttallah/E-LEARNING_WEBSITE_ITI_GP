from django.urls import path, include
from review.api.views import ReviewAPIListView, SingleReviewDetailView, CourseReview

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("index/", ReviewAPIListView.as_view()),
    path("index/<int:id>", SingleReviewDetailView.as_view()),
    path("index/course/<int:course_id>", CourseReview.as_view()),
    
    # rest auth url -- to give option logout
    path('api-auth', include('rest_framework.urls')),
    # Token authentication
    path('api-token-auth', obtain_auth_token),
]