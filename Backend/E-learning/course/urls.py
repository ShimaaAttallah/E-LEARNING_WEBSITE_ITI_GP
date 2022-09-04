from django.urls import include, path
from course import views
from course.views import *
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register('guests', views.viewsets_guest)
urlpatterns = [

    path('api-auth/', include('rest_framework.urls')),
    path('django/jsonresponsenomodel/', views.no_rest_no_model),
    path('django/jsonresponsefrommodel/', views.no_rest_from_model),
    path('rest/fbv/', FBV_List),
    path('rest/fbv/<int:pk>', FBV_pk),
    path('rest/cbv/', CBV_List.as_view()),
    path('rest/cbv/<int:pk>', CBV_pk.as_view()),
    path('rest/mixins/', mixins_list.as_view()),
    path('rest/mixins/<int:pk>', mixins_pk.as_view()),
    path('rest/generics/', generics_list.as_view()),
    path('rest/generics/<int:pk>', generics_pk.as_view()),
    path('rest/viewsets/', include(router.urls)),
    path('fbv/findmovie', find_course),
    path('api-auth', include('rest_framework.urls')),
    path('api-token-auth', obtain_auth_token),
    # path('course/generics/',views.Course_list.as_view()),
    path('course/generics/<int:pk>', views.Course_pk.as_view()),
    #path('rest/category/', views.CategoryList.as_view()),
    path('rest/usercourses/<int:user_pk>', views.generics_userlist.as_view()),
    path('enroll/<int:id>', views.enrollCBV.as_view(), name='enroll'),
    path('upload_course/', upload_course.as_view()),
    path('studentcourses/', views.studentCourses.as_view()),
    path('instructorcourses/', views.instructorCourses.as_view()),
]
