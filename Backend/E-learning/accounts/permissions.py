from rest_framework import permissions
from django.contrib.auth.models import User


class IstheUser(permissions.BasePermission):
    def has_permission(self, request,  obj):
        print()
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        print(obj)
        return obj.user == request.user
