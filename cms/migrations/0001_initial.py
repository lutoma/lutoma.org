# Generated by Django 5.0.3 on 2024-03-22 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='License',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('identifier', models.SlugField(unique=True, verbose_name='SPDX license identifier')),
                ('name', models.CharField(max_length=500, verbose_name='Name')),
                ('url', models.CharField(blank=True, max_length=500, verbose_name='License URL')),
            ],
        ),
    ]