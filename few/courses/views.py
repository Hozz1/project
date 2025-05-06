from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import permissions

from  .models import Courses, Category
from .permissions import IsAdminOrReadOnly, IsUserOrReadOnly
from .serializers import CoursesSerializer, RegisterSerializer, UserSerializer
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


class RegisterView(generics.CreateAPIView):
    """
    Точка для регистрации нового пользователя.
    """
    serializer_class = RegisterSerializer
    permission_classes = (IsAdminOrReadOnly, )

class CurrentUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user