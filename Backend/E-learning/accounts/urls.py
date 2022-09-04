from django import views
from django.urls import path
from . import views

urlpatterns = [
    path('signin/', views.CustomLogin.as_view(), name='login'),
    path('signup/', views.SignUp.as_view(), name='login'),
    path('changepassword/', views.ChangePasswordView.as_view(), name='login'),
    path('resetpassword/', views.ResetPassword.as_view(), name='reset'),
    path('resetpasswordcode/', views.ResetPasswordCode.as_view(), name='resetcode'),
    # path('boards/<int:board_id>/new/', views.new_topic, name='new_topic')
]
