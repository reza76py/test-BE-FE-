from django.urls import path
from .views import WordCountView  # FIXED: Import correct view

urlpatterns = [
    path('message/', WordCountView.as_view()),  # FIXED: Ensure correct mapping
]
