from rest_framework import permissions
from django.contrib.auth.models import User

class IstheUser(permissions.BasePermission):
    def has_permission(self, request,  obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.get_object().user == request.user
