"""PhURL URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
# Importing the necessary modules.
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from phishingweb import views
from django.contrib.staticfiles.views import serve
from django.conf import settings
from django.conf.urls.static import static

# A list of URL patterns.
urlpatterns = [
    path("admin/", admin.site.urls),
    path('phishingweb/predict/', views.predict, name='predict'),
    # path('', TemplateView.as_view(template_name="index.html")),
    path('phishingweb/check_phishing/', views.predict, name='check_phishing'),
    path('', serve, kwargs={'path': 'index.html'}),
    path('<path:path>', serve),
    path('', include('phishingweb.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
