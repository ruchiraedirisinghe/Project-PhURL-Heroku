# This is the URL pattern for the predict function.
from django.urls import path
from . import views

urlpatterns = [
    path('phishingweb/predict/', views.predict, name='predict'),
    path('phishingweb/check_phishing/', views.predict, name='check_phishing'),
]