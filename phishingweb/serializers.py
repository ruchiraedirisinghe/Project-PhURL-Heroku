from rest_framework import serializers

class UrlPredictionSerializer(serializers.Serializer):
    url = serializers.URLField()