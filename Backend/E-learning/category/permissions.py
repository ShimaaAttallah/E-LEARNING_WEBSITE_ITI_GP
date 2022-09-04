from rest_framework import permissions


class IstheUser(permissions.BasePermission):
    def has_permission(self, request,  obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.get_object().course_instructor == request.user


class IsInstractor(permissions.BasePermission):
    def has_permission(self, request,  obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        print(request.user.is_staff)
        return request.user.is_staff == True
    
    