from django.utils.translation import gettext_lazy as _
from django.db import models
from PIL import Image, ExifTags,TiffImagePlugin
from cms.models import License
import json

class Photo(models.Model):
	image = models.ImageField()
	image_exif = models.JSONField(blank=True, null=True)

	# Save original image name on instantiation
	def __init__(self, *args, **kwargs):
		super().__init__(*args, **kwargs)
		self.original_image_name = self.image.name

	def __str__(self):
		return self.image.name

	def save(self, *args, **kwargs):
		if self.original_image_name != self.image.name and not self.image.closed:
			image = Image.open(self.image)
			image.verify()
			exif_data = image.getexif()
			if exif_data:
				exif = {
					# Ensure we're not getting "TypeError: Object of type IFDRational is not JSON serializable".
					ExifTags.TAGS[k]: v for k, v in exif_data.items()
					if k in ExifTags.TAGS and type(v) not in [bytes, TiffImagePlugin.IFDRational]
				}

				self.image_exif = json.dumps(exif)

		super().save(*args, **kwargs)

class Album(models.Model):
	slug = models.SlugField(unique=True, db_index=True, verbose_name=_('URL slug'))
	name = models.CharField(max_length=500, verbose_name=_('Name'))
	description = models.TextField(blank=True, verbose_name=_('Description'))
	location = models.CharField(max_length=500, blank=True, verbose_name=_('Location'))
	license = models.ForeignKey(License, on_delete=models.SET_NULL, null=True, blank=True, verbose_name=_('License'))
	hero_image = models.ForeignKey(Photo, on_delete=models.SET_NULL, null=True, verbose_name=_('Hero image'))

	def __str__(self):
		return self.name

class AlbumEntry(models.Model):
	album = models.ForeignKey(Album, on_delete=models.CASCADE, verbose_name=_('Album'), related_name='entries')
	photo = models.ForeignKey(Photo, on_delete=models.CASCADE, verbose_name=_('Photo'), related_name='entries')
	description = models.TextField(blank=True, verbose_name=_('Description'))

	def __str__(self):
		return f'{self.photo} in {self.album}'

class AlbumList(models.Model):
	name = models.CharField(null=True, blank=True, max_length=500, verbose_name=_('Name'))
	albums = models.ManyToManyField(Album, verbose_name=_('Albums'))

	def __str__(self):
		return self.name
