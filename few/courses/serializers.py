from django.contrib.auth.models import User

from .models import Courses
from rest_framework import serializers



class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = "__all__"


class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = "__all__"

class CreateUserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}