from django.contrib import admin
from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    """Admin configuration for Task model."""
    list_display = ['id', 'title', 'completed', 'created_at']
    list_filter = ['completed', 'created_at']
    search_fields = ['title']
    ordering = ['-created_at']
