# Generated by Django 5.0.3 on 2024-03-22 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='image_exif',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
