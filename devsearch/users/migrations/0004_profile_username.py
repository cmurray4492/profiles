# Generated by Django 3.2.6 on 2021-09-12 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210911_1910'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='username',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
