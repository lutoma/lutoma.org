from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from .api import api

urlpatterns = [
    path("", api.urls),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
