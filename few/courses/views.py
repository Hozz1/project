from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.response import Response
from  .models import Courses, Category
from .permissions import IsAdminOrReadOnly, IsUserOrReadOnly
from .serializers import CoursesSerializer, UserSerializer, CreateUserSerializer
from rest_framework.decorators import action
from rest_framework import viewsets, generics, mixins


class CoursesAPIList(generics.ListCreateAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )

class CoursesAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer
    permission_classes = (IsAuthenticated, )

class CoursesAPIDestroy(generics.RetrieveDestroyAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer
    permission_classes = (IsAdminOrReadOnly, )


# class UserViewSet(mixins.CreateModelMixin,
#                   mixins.RetrieveModelMixin,
#                   mixins.UpdateModelMixin,
#                   viewsets.GenericViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = (IsUserOrReadOnly,)
#
#     def create(self, request, *args, **kwargs):
#         self.serializer_class = CreateUserSerializer
#         self.permission_classes = (AllowAny,)
#         return super(UserViewSet, self).create(request, *args, **kwargs)

class UserAPIList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
