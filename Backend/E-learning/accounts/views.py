from random import randint
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, UpdateAPIView
from django.contrib.auth import get_user_model, authenticate
from .serialiers import ChangePasswordSerializer, LoginSerialiser, ResetCodeSerializer, UserSerializer
from rest_framework import permissions
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from .helper import send_forget_password_mail
from .models import ResetPasswordModel
# Create your views here.


class SignUp(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny  # Or anon users can't register
    ]
    serializer_class = UserSerializer


class ChangePasswordView(UpdateAPIView):
    """
    An endpoint for changing password.
    """
    serializer_class = ChangePasswordSerializer
    model = User
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({'message': "Wrong password."}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'Password updated successfully',
            }

            return Response(response, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomLogin(APIView):
    model = User

    def post(self, request, *args, **kwargs):
        serializer = LoginSerialiser(data=request.data)
        if serializer.is_valid():

            user = authenticate(username=serializer.data.get(
                'username'), password=serializer.data.get('password'))
            if user is None:
                return Response({'message': 'user and password are not matched'}, status=status.HTTP_404_NOT_FOUND)
            token, create = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'username': user.username,
                'id': user.id,
                'is_staff': user.is_staff
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResetPassword(APIView):

    def post(self, request):
        username = request.data['username']
        if not User.objects.filter(username=username).first():
            return Response({'message': 'user not found'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.get(username=username)
        email = user.email
        print(email)
        check = randint(1000, 9999)
        oldList = ResetPasswordModel.objects.filter(user=user)
        oldList.delete()
        reset = ResetPasswordModel(user=user, check=check)
        reset.save()
        try:
            send_forget_password_mail(email, check)
        except Exception:
            return Response({'message': 'Invalid header found.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(
            {'message': 'email is sent'},
            status=status.HTTP_201_CREATED
        )


class ResetPasswordCode(APIView):

    def put(self, request):
        serializer = ResetCodeSerializer(data=request.data)
        if serializer.is_valid():
            try:
                reset = ResetPasswordModel.objects.get(
                    user__username=serializer.data['username'], check=serializer.data['code'])
            except:
                return Response({'message': 'error code'}, status=status.HTTP_404_NOT_FOUND)
            reset.user.set_password(serializer.data.get("new_password"))
            reset.user.save()
            reset.delete()
            response = {
                'message': 'Password updated successfully',
            }

            return Response(response, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
