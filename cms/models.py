from django.utils.translation import gettext_lazy as _
from django.db import models

class License(models.Model):
	identifier = models.CharField(unique=True, max_length=50, verbose_name=_('SPDX license identifier'))
	name = models.CharField(max_length=500, verbose_name=_('Name'))
	url = models.CharField(max_length=500, verbose_name=_('License URL'))

	def __str__(self):
		return self.name
