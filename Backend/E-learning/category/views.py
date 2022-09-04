from django.http import Http404
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Category
from .permissions import IstheUser, IsInstractor
from .serializers import AllCategorySerializer, CategorySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics, mixins, viewsets
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
# Category Function Based View


@api_view(['GET', 'POST'])
def Category_List(request):

    # GET Method
    if request.method == 'GET':
        try:
            category = Category.objects.all()
        except Category.DoesNotExist:
            raise Http404
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data)

    # POST Method
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def Category_pk(request, pk):
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        raise Http404

    # GET Method
    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    # PUT Method
    if request.method == 'PUT':
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete Method
    if request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class generics_category(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = AllCategorySerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsInstractor, IstheUser]


class generics_cat_pk(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = AllCategorySerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsInstractor, IstheUser]


class generics_allcategory(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsInstractor]
