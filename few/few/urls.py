"""
URL configuration for few project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from courses.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/courses/', CoursesAPIList.as_view()),
    path('api/v1/courses/<int:pk>/', CoursesAPIUpdate.as_view()),
    path('api/v1/coursesdelete/<int:pk>/', CoursesAPIDestroy.as_view()),
    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/token/verify', TokenVerifyView.as_view(), name='token_verify'),
    path('api/v1/register/', RegisterView.as_view(), name='register'),
    path('api/v1/users/currentuser/', CurrentUserView.as_view(), name='current_user'),
]
