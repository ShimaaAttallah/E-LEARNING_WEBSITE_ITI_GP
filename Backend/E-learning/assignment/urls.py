from django.urls import path
from . import views

urlpatterns = [
    # path("",views.Assign_List),
    path("assignments/<int:course_id>",views.Assignments_List.as_view()),
    path("allassignment/", views.Assignment_List.as_view()),
    path("assignmentm/",views.Uploade_assignment.as_view()),
    path("updategrad/<int:pk>",views.Update_assignment.as_view()),
    # path("assignment/<int:id>/",views.Assignment_List),
]