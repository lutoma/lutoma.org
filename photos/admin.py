from django.contrib import admin
from .models import Photo, Album, AlbumEntry, AlbumList


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
	list_filter = []


class AlbumEntryInline(admin.TabularInline):
    model = AlbumEntry
    extra = 1

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
	list_display = ['name']
	list_filter = ['license']
	inlines = [AlbumEntryInline]


@admin.register(AlbumList)
class AlbumList(admin.ModelAdmin):
	list_filter = []
