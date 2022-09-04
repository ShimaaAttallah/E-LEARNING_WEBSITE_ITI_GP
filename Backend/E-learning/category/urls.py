from django.urls import path, include
from category import views
urlpatterns = [
    path('list/', views.Category_List),
    path('<int:pk>/', views.Category_pk),
    path('generics/category/', views.generics_category.as_view()),
    path('generics/category/<int:pk>', views.generics_cat_pk.as_view()),
    path('generics/allcategory', views.generics_allcategory.as_view())
]
